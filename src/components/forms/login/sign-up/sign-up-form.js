import React, { useState } from 'react'
import { useRegistration } from '../../../../server-api/registration';


const SignUpForm = ({ active, setActive }) => {
    const { registration, loading } = useRegistration()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const onChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        registration(form)
    }

    return (
        <>
            <input className="tab__radio" id="tab-2" type="radio" readOnly checked={!active} onClick={() => setActive(false)} />
            <label className="tab__radio-title" htmlFor="tab-2">
                <span className="tab__title">Sign Up</span>
            </label>
            <div className="tab-content">
                <form className="tab-content__form" action="">
                    <input className="form-input" type="email" name="email" placeholder="Email" required onChange={onChangeHandler} />
                    <input className="form-input" type="password" name="password" placeholder="Password" required onChange={onChangeHandler} />
                    <button className="form-btn btn" disabled={loading} onClick={signUpHandler}>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm
