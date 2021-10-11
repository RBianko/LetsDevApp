import React from 'react'
import './header.css'
import LoginBtn from '../login-btn/login-btn';
import Logo from '../../style-components/logo';


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