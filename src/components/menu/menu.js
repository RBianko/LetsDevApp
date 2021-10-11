import React from 'react'
import './menu.css'
import ProfileIcon from '../../img/user.svg'
import SearchIcon from '../../img/search.svg'
import ChatIcon from '../../img/chat.svg'
import SettingsIcon from '../../img/settings.svg'
import ProjectIcon from '../../img/project.svg'
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="side-menu">
            <ul className="menu__icons">
                <li className="menu-icon">
                    <NavLink to="/profile">
                        <img className="link-icon" src={ProfileIcon} alt="profile" />
                    </NavLink>
                </li>
                <li className="menu-icon icon_project">
                    <img className="link-icon" src={ProjectIcon} alt="project-menu" />
                    <ul className="links__list links_project">
                        <li className="menu__link">
                            <NavLink to="/my-projects">
                                <span>My Projects</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/create-project">
                                <span>Create Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_search">
                    <img className="link-icon" src={SearchIcon} alt="search-menu" />
                    <ul className="links__list links_search">
                        <li className="menu__link">
                            <NavLink to="/search-projects">
                                <span>Search for Projects</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/search-devs">
                                <span>Search for Dev's</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_messages">
                    <img className="link-icon" src={ChatIcon} alt="chat-menu" />
                    <ul className="links__list links_messages">
                        <li className="menu__link">
                            <NavLink to="/messages">
                                <span>Messages</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <NavLink to="/friend-list">
                                <span>Friends</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_settings">
                    <img className="link-icon" src={SettingsIcon} alt="settings-menu" />
                    <ul className="links__list links_settings">
                        <li className="menu__link">
                            <NavLink to="/settings">
                                <span>Settings</span>
                            </NavLink>
                        </li>
                        <li className="menu__link">
                            <span>Log Out</span>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_last"></li>
            </ul>
        </nav>
    )
}

export default Menu