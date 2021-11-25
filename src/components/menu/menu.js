import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './menu.css'

import Icon from './../style-components/icon';
import ProfileIcon from '../../img/user.svg'
import SearchIcon from '../../img/search.svg'
import FriendsIcon from '../../img/friends.svg'
import SettingsIcon from '../../img/settings.svg'
import ProjectIcon from '../../img/project.svg'
import Button from '../style-components/button';

const Menu = () => {
    const user = useSelector(state => state.user)

    const followersCounter = user.follow.followers.length;
    const followingCounter = user.follow.following.length;

    return (
        <nav className="side-menu">
            <ul className="menu__icons">
                <li className="menu-icon">
                    <Link to={{
                        pathname: `/profile/${user._id}`,
                        state: { id: user._id }
                    }}>
                        <Icon className={'link-icon'} alt={'profile'} src={ProfileIcon} />
                    </Link>
                </li>
                <li className="menu-icon icon_follow">
                    <Icon className={'link-icon'} alt={'follow-menu'} src={FriendsIcon} />
                    <ul className="links__list links_follow">
                        <li className="menu__link">
                            <Link to="/following">
                                <span className="link__title">{followingCounter} Following</span>
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/followers">
                                <span className="link__title">{followersCounter} Followers</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_project">
                    <Icon className={'link-icon'} alt={'project-menu'} src={ProjectIcon} />
                    <ul className="links__list links_project">
                        <li className="menu__link">
                            <Link to="/my-projects">
                                <span className="link__title">My Projects</span>
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/create-project">
                                <span className="link__title">Create Project</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_search">
                    <Icon className={'link-icon'} alt={'search-menu'} src={SearchIcon} />
                    <ul className="links__list links_search">
                        <li className="menu__link">
                            <Link to="/search-projects">
                                <span className="link__title">Search for Projects</span>
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/search-devs">
                                <span className="link__title">Search for Dev's</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-icon icon_settings">
                    <Icon className={'link-icon'} alt={'settings-menu'} src={SettingsIcon} />
                    <ul className="links__list links_settings">
                        <li className="menu__link">
                            <Link to="/settings">
                                <span className="link__title">Settings</span>
                            </Link>
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

export default Menu