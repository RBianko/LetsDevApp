import React, { useState } from 'react'
import { useRegistration } from '../../../../server-api/registration';


const SignUpForm = () => {
    const { registration, loading } = useRegistration()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    let [activeForm, setActiveForm] = useState(false)

    const onChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        registration(form)
    }

    return (
        <>
            <input className="radio" id="tab-2" name="tabs-name" type="radio" readOnly checked={activeForm} onClick={() => setActiveForm(activeForm = true)} />
            <label className="table" htmlFor="tab-2">
                <span className="tab-title">Sign Up</span>
            </label>
            <div className="tabs-content">
                <form className="tabs-content__form" action="">
                    <input className="form-input" type="email" name="email" placeholder="Email" required onChange={onChangeHandler} />
                    <input className="form-input" type="password" name="password" placeholder="Password" required onChange={onChangeHandler} />
                    <button className="form-btn btn" disabled={loading} onClick={signUpHandler}>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm
