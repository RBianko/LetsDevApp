import React, { useState } from 'react'
import { useAuthorization } from '../../../../server-api/authorization.js';
import { useSelector } from 'react-redux';

import Button from './../../../style-components/button';
import FormInput from './../../../style-components/input/form-input';

const AuthForm = ({ active, setActive }) => {
    const { authorization } = useAuthorization()
    const user = useSelector(state => state.user)

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const onChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        authorization(form, user)
    }

    return (
        <>
            <input className="tab__radio" id="tab-1" type="radio" readOnly checked={active} onClick={() => setActive(true)} />
            <label className="tab__radio-title" htmlFor="tab-1">
                <span className="tab__title">Login</span>
            </label>
            <div className="tab-content">
                <form className="tab-content__form" action="">
                    <FormInput type={'email'} name={'email'} placeholder={'Email'} onChange={onChangeHandler} />
                    <FormInput type={'password'} name={'password'} placeholder={'Password'} onChange={onChangeHandler} />
                    <Button subClass="form-btn" onClick={loginHandler} text={'Login'} />
                </form>
                <form className="forgot-password" action="">
                    <input id="forgot-password-toggle" type="checkbox" />
                    <label className="forgot-password__link" htmlFor="forgot-password-toggle">forgot password?</label>
                    <div className="forgot-password-content">
                        <FormInput type={'email'} name={'email'} placeholder={'Enter your email'} onChange={onChangeHandler} />
                        <Button subClass="form-btn_go" text={'Submit'} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthForm
