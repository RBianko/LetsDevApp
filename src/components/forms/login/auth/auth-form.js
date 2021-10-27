import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAuthorization } from '../../../../server-api/authorization.js';

const AuthForm = ({ user }) => {
    const { authorization, loading } = useAuthorization()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    let [activeForm, setActiveForm] = useState(true)

    const onChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        authorization(form, user)
    }

    return (
        <>
            <input className="radio" id="tab-1" name="tabs-name" type="radio" readOnly checked={activeForm} onClick={() => setActiveForm(activeForm = true)} />
            <label className="table" htmlFor="tab-1">
                <span className="tab-title">Login</span>
            </label>
            <div className="tabs-content">
                <form className="tabs-content__form" action="">
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

export default connect(
    ({ user }) => ({ user })
)(AuthForm)
