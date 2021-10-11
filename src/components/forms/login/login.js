import React from 'react'
import './login.css'
import CloseIcon from '../../../img/xmark.svg'

const Login = () => {
    return (<>
        <input id="modal-toggle" type="checkbox" />
        <label className="modal-backdrop" for="modal-toggle"></label>
        <div className="modal-content">
            <label className="modal-close-btn" for="modal-toggle">
                <img className="close-btn_icon" src={CloseIcon} alt="close" />
            </label>

            <div className="tabs">
                <input className="radio" id="tab-1" name="tabs-name" type="radio" checked />
                <label className="table" for="tab-1">
                    <span className="tab-title">Login</span>
                </label>
                <div className="tabs-content">
                    <form className="tabs-content__form" action="">
                        <input className="form-input" type="email" placeholder="Email" required />
                        <input className="form-input" type="password" placeholder="Password" required />
                        <form className="forgot-password" action="">
                            <input id="forgot-password-toggle" type="checkbox" />
                            <label className="forgot-password__link" for="forgot-password-toggle">forgot password?</label>
                            <div className="forgot-password-content">
                                <input className="form-input form-input_forgot" type="email" placeholder="enter your email" required />
                                <button className="form-btn_go btn" type="submit">Go</button>
                            </div>
                        </form>
                        <button className="form-btn btn" type="submit">Login</button>
                    </form>
                </div>
                <input className="radio" id="tab-2" name="tabs-name" type="radio" />
                <label className="table" for="tab-2">
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

export default Login