import React from 'react'

import Logo from '../../style-components/logo';
import IconButton from './../../style-components/icon-button';

import './header.css'


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