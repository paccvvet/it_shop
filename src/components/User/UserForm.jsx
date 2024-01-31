import React, { useEffect } from 'react'
import UserSingUpForm from './UserSingUpForm'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../../styles/User.module.css"
import { toggleForm } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';


    const UserForm = () => {

    const dispatch = useDispatch();
    const closeForm = () => { 
        dispatch(toggleForm(false));
    }

    const { showForm, formType } = useSelector(({ user }) => user)
    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm} />
            {formType === 'singup' ? <UserSingUpForm closeForm={closeForm}/> : <UserLoginForm closeForm={closeForm} />}
        </>
    ) : (<></>
    );
};

export default UserForm