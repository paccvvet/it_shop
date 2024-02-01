import React, { useEffect } from 'react'
import UserSingUpForm from './UserSingUpForm'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../../styles/User.module.css"
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';


const UserForm = () => {
    const { showForm, formType } = useSelector(({ user }) => user)

    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(toggleForm(false));
    }

    const toggleCurrentFormType = (type) => {
        dispatch(toggleFormType(type));
    }

    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm} />
            {formType === 'singup' ?
                (<UserSingUpForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} />) :
                (<UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} />)}
        </>
    ) : (<></>
    );
};

export default UserForm