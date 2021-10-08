import React from 'react'
import './profile.css'
import Menu from '../menu'
import ProfileIcon from '../../img/user.png'
import CssIcon from '../style-components/skills-icons/css-icon'
import ReactIcon from '../style-components/skills-icons/react-icon'
import HtmlIcon from '../style-components/skills-icons/html-icon'
import JsIcon from '../style-components/skills-icons/js-icon'

const Profile = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="profile__card card">
                    <div className="card__header">
                        profile.info
                    </div>
                    <div className="profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={ProfileIcon} alt="profile" />
                            </div>
                            <div className="profile__info">
                                <p className="profile__info_name">Roman Bianko</p>
                                <p className="profile__info_sity">Minsk, Belarus</p>
                                <p className="profile__info_role">Frontend</p>
                                <div className="profile__skills">
                                    <HtmlIcon />
                                    <CssIcon />
                                    <JsIcon />
                                    <ReactIcon />
                                </div>
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <p className="description_text">lorem ipsum dolor sit amet, consectetur adipiscing ellorem ipsum dolor sit amet, consectetur adipiscing ellorem ipsum dolor sit amet, consectetur adipiscing ellorem ipsum dolor sit amet, consectetur adipiscing el</p>
                            </div>
                            <div className="profile__projects">
                                <h3 className="projects_title">Projects</h3>
                                <img className="project-icon" src={ProfileIcon} alt="profile" />
                                <img className="project-icon" src={ProfileIcon} alt="profile" />
                                <img className="project-icon" src={ProfileIcon} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile