import React, { useEffect, useState } from 'react'
import styles from "../../styles/Profile.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/user/userSlice'
const Profile = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",

  })
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  }

  const {currentUser} = useSelector(({user}) => user)

  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if(!isNotEmpty) return;
    dispatch(updateUser(values));
  }
  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
}, [currentUser])

  return (
    <section className={styles.profile}>
      {!currentUser ? <span>You need to login</span> : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input type="email"
              name='email'
              value={values.email}
              autoComplete='off'
              onChange={handleChange}
              placeholder='Your email'
              required />
          </div>
          <div className={styles.group}>
            <input type="name"
              name='name'
              value={values.name}
              autoComplete='off'
              onChange={handleChange}
              placeholder='Your name'
              required />
          </div>
          <div className={styles.group}>
            <input type="password"
              name='password'
              value={values.password}
              autoComplete='off'
              onChange={handleChange}
              placeholder='Your password'
              required />
          </div>
          <div className={styles.group}>
            <input type="avatar"
              name='avatar'
              value={values.avatar}
              autoComplete='off'
              onChange={handleChange}
              placeholder='Your avatar'
              required />
          </div>
          <button className={styles.submit} type='submit'>
            Update
          </button>
        </form>
      )}
    </section>
  )
}

export default Profile