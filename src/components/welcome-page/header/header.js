import React from 'react'
import './header.css'
import Logo from '../../style-components/logo';
import IconButton from './../../style-components/icon-button';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">
                <Logo />
                <IconButton
                    className={'btn_login btn'}
                    htmlFor={'modal__toggle_login'}
                    text={'Login'}
                />
            </div>
        </div>
    )
}

export default Header