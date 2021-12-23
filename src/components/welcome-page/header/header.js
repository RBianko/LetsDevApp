import React from 'react'

import Logo from '../../style-components/logo';
import IconButton from './../../style-components/icon-button';

import locale from '../../../locale/en'
import './header.css'


const Header = () => {
    const { button } = locale.translation

    return (
        <div className="header-wrapper">
            <div className="header">
                <Logo />
                <IconButton
                    className={'btn_login btn'}
                    htmlFor={'modal__toggle_login'}
                    text={button.login}
                />
            </div>
        </div>
    )
}

export default Header