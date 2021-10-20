import React, { useState } from 'react'
import { connect } from 'react-redux'

import './login.css'
import CloseIcon from '../../../img/xmark.svg'

import { useHttp } from '../../../hooks/http.hook'

const Login = ({ user }) => {
    const { loading, request } = useHttp()
    const [loginForm, setLoginForm] = useState({
        email: '', password: ''
    })
    const [signUpForm, setSignUpForm] = useState({
        email: '', password: ''
    })

    const singUpChangeHandler = event => {
        setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value })
    }
    const loginChangeHandler = event => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const signUpHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', { ...signUpForm })
        } catch (error) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...loginForm })
            user.login(data.token, data.userId)
        } catch (error) { }
    }

    return (
        <>
            <input id="modal-toggle_login" type="checkbox" />
            <div className="modal-backdrop" htmlFor="modal-toggle_login" />
            <div className="modal-content">
                <label className="modal-close-btn" htmlFor="modal-toggle_login">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>

                <div className="tabs">
                    <input className="radio" id="tab-1" name="tabs-name" type="radio" readOnly />
                    <label className="table" htmlFor="tab-1">
                        <span className="tab-title">Login</span>
                    </label>
                    <div className="tabs-content">
                        <form className="tabs-content__form" action="">
                            <input className="form-input" type="email" name="email" placeholder="Email" required onChange={loginChangeHandler} />
                            <input className="form-input" type="password" name="password" placeholder="Password" required onChange={loginChangeHandler} />
                            <button className="form-btn btn" type="submit" onClick={loginHandler} disabled={loading}>Login</button>
                        </form>
                        <form className="forgot-password" action="">
                            <input id="forgot-password-toggle" type="checkbox" />
                            <label className="forgot-password__link" htmlFor="forgot-password-toggle">forgot password?</label>
                            <div className="forgot-password-content">
                                <input className="form-input form-input_forgot" type="email" placeholder="enter your email" required />
                                <button className="form-btn_go btn" type="submit">Go</button>
                            </div>
                        </form>
                    </div>
                    <input className="radio" id="tab-2" name="tabs-name" type="radio" readOnly />
                    <label className="table" htmlFor="tab-2">
                        <span className="tab-title">Sign Up</span>
                    </label>
                    <div className="tabs-content">
                        <form className="tabs-content__form" action="">
                            <input className="form-input" type="email" name="email" placeholder="Email" required onChange={singUpChangeHandler} />
                            <input className="form-input" type="password" name="password" placeholder="Password" required onChange={singUpChangeHandler} />
                            <button className="form-btn btn" type="submit" onClick={signUpHandler} disabled={loading}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(
    ({ user }) => ({ user })
)(Login)