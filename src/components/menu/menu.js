import React from 'react'
import './menu.css'
import ProfileIcon from '../../img/user.png'
import SearchIcon from '../../img/search.png'
import ChatIcon from '../../img/chat.png'
import SettingsIcon from '../../img/setting.png'

const Menu = () => {
    return (
        <nav className="side-menu">
            <ul className="menu__links">
                <li className="menu__link">
                    <img className="link-icon" src={ProfileIcon} alt="profile" />
                </li>
                <li className="menu__link ">
                    <img className="link-icon" src={SearchIcon} alt="search" />
                </li>
                <li className="menu__link ">
                    <img className="link-icon" src={ChatIcon} alt="chat" />
                </li>
                <li className="menu__link ">
                    <img className="link-icon" src={SettingsIcon} alt="settings" />
                </li>
            </ul>
        </nav>
    )
}

export default Menu