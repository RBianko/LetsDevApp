import React from 'react'
import './login.css'
import CloseIcon from '../../../img/xmark.svg'

import AuthForm from './auth/auth-form';
import SignUpForm from './sign-up/sign-up-form';
import IconButton from './../../style-components/icon-button';

const Login = () => {
    return (
        <>
            <input id="modal-toggle_login" type="checkbox" />
            <div className="modal-backdrop_login" htmlFor="modal-toggle_login" />
            <div className="modal-content_login">
                <label className="modal-close-btn" htmlFor="modal-toggle_login">
                    <IconButton className={'close-btn_icon'} alt={'close'} src={CloseIcon} />
                </label>
                <div className="tabs">
                    <AuthForm />
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default Login