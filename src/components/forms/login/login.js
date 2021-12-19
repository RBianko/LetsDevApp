import React, { useState } from 'react'

import AuthForm from './auth/auth-form'
import SignUpForm from './sign-up/sign-up-form'
import IconButton from './../../style-components/icon-button'

import CloseIcon from '../../../img/xmark.svg'
import './login.css'

const Login = () => {
    const [activeForm, setActiveForm] = useState(true)

    return (
        <>
            <input id="modal__toggle_login" type="checkbox" />
            <div className="modal-backdrop_login" htmlFor="modal__toggle_login" />
            <div className="modal-content_login">
                <IconButton
                    className={'modal-close-btn'}
                    classNameIcon={'close-btn_icon'}
                    htmlFor={'modal__toggle_login'}
                    alt={'close'}
                    src={CloseIcon}
                />
                <div className="tabs">
                    <AuthForm active={activeForm} setActive={setActiveForm} />
                    <SignUpForm active={activeForm} setActive={setActiveForm} />
                </div>
            </div>
        </>
    )
}

export default Login