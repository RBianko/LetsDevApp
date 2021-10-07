import React from 'react'
import Logo from '../logo/logo'
import './header.css'
import LoginBtn from './../login-btn/login-btn';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">
                <Logo />
                <LoginBtn />
            </div>
        </div>
    )
}

export default Header