import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

import { useRegistration } from '../../../../server-api/registration';

import Button from './../../../style-components/button';
import FormInput from './../../../style-components/input/form-input';


const SignUpForm = ({ active, setActive }) => {
    const { registration } = useRegistration()
    const user = useSelector(state => state.user)

    const [form, setForm] = useState({
        email: '', password: '', repeatPassword: ''
    })

    const onChangeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        if (form.password === form.repeatPassword) {
            registration(form, user)
        } else {
            toast.error(`Passwords don't match!`)
        }

    }

    return (
        <>
            <input className="tab__radio" id="tab-2" type="radio" readOnly checked={!active} onClick={() => setActive(false)} />
            <label className="tab__radio-title" htmlFor="tab-2">
                <span className="tab__title">Sign Up</span>
            </label>
            <div className="tab-content">
                <form className="tab-content__form" action="">
                    <FormInput type={'email'} name={'email'} placeholder={'Email'} onChange={onChangeHandler} />
                    <FormInput type={'password'} name={'password'} placeholder={'Password'} onChange={onChangeHandler} />
                    <FormInput type={'password'} name={'repeatPassword'} placeholder={'Repeat password'} onChange={onChangeHandler} />
                    <Button subClass="form-btn" onClick={signUpHandler} text={'Sign Up'} />
                </form>
            </div>
        </>
    )
}

export default SignUpForm
