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
                <IconButton
                    className={'modal-close-btn'}
                    classNameIcon={'close-btn_icon'}
                    htmlFor={'modal-toggle_login'}
                    alt={'close'}
                    src={CloseIcon}
                />
                <div className="tabs">
                    <AuthForm />
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default Login