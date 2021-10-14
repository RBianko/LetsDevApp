import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './login.css'
import CloseIcon from '../../../img/xmark.svg'

import { setUser } from '../../../redux/modules/user'

const Login = ({ user, setUser }) => {
    const history = useHistory()

    const loginClickHandler = () => {
        if (!user.isLogedIn) {
            setUser()
            history.push('/profile')
        }
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
                    <input className="radio" id="tab-1" name="tabs-name" type="radio" readOnly checked />
                    <label className="table" htmlFor="tab-1">
                        <span className="tab-title">Login</span>
                    </label>
                    <div className="tabs-content">
                        <form className="tabs-content__form" action="">
                            <input className="form-input" type="email" placeholder="Email" required />
                            <input className="form-input" type="password" placeholder="Password" required />
                            <button className="form-btn btn" type="submit" onClick={() => loginClickHandler()}>Login</button>
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
                            <input className="form-input" type="email" placeholder="Email" required />
                            <input className="form-input" type="password" placeholder="Password" required />
                            <input className="form-input" type="password" placeholder="Confirm password" required />
                            <button className="form-btn btn" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(
    ({ user }) => ({ user }),
    { setUser }
)(Login)