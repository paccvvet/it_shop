import React, { useState } from 'react'

import styles from "../../styles/User.module.css"
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/user/userSlice'

const UserSingUpForm = ({toggleCurrentFormType, closeForm}) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",

  })
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  }
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if(!isNotEmpty) return;
    dispatch(createUser(values));
    closeForm();
  }

  return (
    
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>
        Sing Up
      </div>
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
        <div className={styles.link} onClick={() => toggleCurrentFormType("login")} >
          I already have a account
        </div>
        <button className={styles.submit} type='submit'>
          Create an account
        </button>
      </form>

    </div>
  )
}

export default UserSingUpForm;