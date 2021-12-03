import React, { useState } from 'react'
import { useAuthorization } from '../../../../server-api/authorization.js';
import { useSelector } from 'react-redux';

const AuthForm = ({ active, setActive }) => {
    const { authorization, loading } = useAuthorization()
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
                    <input className="form-input" type="email" name="email" placeholder="Email" required onChange={onChangeHandler} />
                    <input className="form-input" type="password" name="password" placeholder="Password" required onChange={onChangeHandler} />
                    <button className="form-btn btn" onClick={loginHandler}>Login</button>
                </form>
                <form className="forgot-password" action="">
                    <input id="forgot-password-toggle" type="checkbox" />
                    <label className="forgot-password__link" htmlFor="forgot-password-toggle">forgot password?</label>
                    <div className="forgot-password-content">
                        <input className="form-input form-input_forgot" type="email" placeholder="Enter your email" required />
                        <button className="form-btn_go btn" disabled={loading} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthForm
