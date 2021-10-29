import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import './menu.css'

import Icon from './../style-components/icon';
import ProfileIcon from '../../img/user.svg'
import SearchIcon from '../../img/search.svg'
import ChatIcon from '../../img/chat.svg'
import SettingsIcon from '../../img/settings.svg'
import ProjectIcon from '../../img/project.svg'
import Button from '../style-components/button';


const Menu = ({ user }) => {
    return (
        <nav className="side-menu">
            <ul className="menu__icons">
                <li className="menu-icon">
                    <NavLink to="/profile">
                        <Icon className={'link-icon'} alt={'profile'} src={ProfileIcon} />
                    </NavLink>
                </li>
                <li className="menu-icon icon_project">
                    <Icon className={'link-icon'} alt={'project-menu'} src={ProjectIcon} />
                    <ul className="links__list links_project">
                        <li className="menu__link">
                            <NavLink to="/my-projects">
                                <span className="link__title">My Projects</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/create-project">
                                <span className="link__title">Create Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_search">
                    <Icon className={'link-icon'} alt={'search-menu'} src={SearchIcon} />
                    <ul className="links__list links_search">
                        <li className="menu__link">
                            <NavLink to="/search-projects">
                                <span className="link__title">Search for Projects</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/search-devs">
                                <span className="link__title">Search for Dev's</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_messages">
                    <Icon className={'link-icon'} alt={'chat-menu'} src={ChatIcon} />
                    <ul className="links__list links_messages">
                        <li className="menu__link">
                            <NavLink to="/messages">
                                <span className="link__title">Messages</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/friend-list">
                                <span className="link__title">Friends</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_settings">
                    <Icon className={'link-icon'} alt={'settings-menu'} src={SettingsIcon} />
                    <ul className="links__list links_settings">
                        <li className="menu__link">
                            <NavLink to="/settings">
                                <span className="link__title">Settings</span>
                            </NavLink>
                        </li>
                        <li className="menu__link menu__link_logout">
                            <Button subClass="btn_logout" onClick={() => user.logout()} text={'Log Out'} />
                        </li>
                    </ul>
                </li>
                <li className="icon_last"></li>
            </ul>
        </nav>
    )
}

export default connect(({ user }) => ({ user }))(Menu)