import React, { useEffect, useState } from "react";
import styles from '../../styles/Header.module.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.svg"
import AVATAR from "../../images/avatar.jpg";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
    const { currentUser, cart } = useSelector(({ user }) => user)
    const dispatch = useDispatch();
    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE);
    }

    const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

   
    
    const[searchValue, setSearchValue] = useState("");

    const {data, isLoading} = useGetProductsQuery({title: searchValue});

    
    
    useEffect(() => {
        if (!currentUser) return;
        setValues(currentUser);
    }, [currentUser])
 const handleSearch = ({target: {value}}) =>{
        setSearchValue(value)
    }
        const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={Logo} alt="Stuff" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div
                        className={styles.avatar}
                        style={{ backgroundImage: `url(${values.avatar})` }}
                    />
                    <div className={styles.username}>{values.name}</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input type="search" name="search"
                            placeholder="Search for something"
                            autoComplete="off"
                            onChange={handleSearch}
                            value={searchValue}
                        />
                    </div>
                    {searchValue && <div className={styles.box}>
                       {isLoading ? 'Loading' : !data.length ? "No results" : (
                        data.map(({title, images, id}) =>{
                            return(
                                <Link key={id} to={`products/${id}`} className={styles.item} onClick={() => setSearchValue("")}>
                                   <div className={styles.images} 
                                   style={{ backgroundImage: `url(${images[0]})` }}/>
                                     <div className={styles.title}>
                                            {title}
                                     </div>
                                </Link>
                            )
                        })
                       )}
                        </div>}
                </form>
                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favorites}>
                        <svg className={styles["icon-fav"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
                    </Link>
                    <Link to={ROUTES.CART} className={styles.cart}>
                        <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        {!!cart.length && <span className={styles.count}>{cart.length}</span>}
                        
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header;