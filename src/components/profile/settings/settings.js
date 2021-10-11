import React from 'react'
import './settings.css'
import ProfileIcon from '../../../img/users.svg'
import CssIcon from '../../style-components/skills-icons/css-icon'
import ReactIcon from '../../style-components/skills-icons/react-icon'
import HtmlIcon from '../../style-components/skills-icons/html-icon'
import JsIcon from '../../style-components/skills-icons/js-icon'
import EditIcon from './edit-icon'

const Settings = () => {
    return (
        <>
            <div className="container">
                <div className="profile__card card">
                    <div className="card__header">
                        settings.cfg
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={ProfileIcon} alt="profile" />
                                <button className="settings-btn settings_profile-icon">
                                    <EditIcon />
                                </button>
                            </div>
                            <div className="profile__info">
                                <div className="settings-field">
                                    <input className="text-input" type="text" placeholder="Name" value="Roman Bianko" />
                                    <input className="text-input" type="text" placeholder="City" value="Minsk, Belarus" />
                                    <input className="text-input" type="text" placeholder="Role" value="Frontend" />
                                </div>
                                <div className="profile__skills">
                                    <button className="settings-btn">
                                        <EditIcon />
                                    </button>
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
                                <textarea className="textarea-input" type="text" placeholder="City" value="Lorem ipsum dolor sit amet, consectetur adipiscing ellorem ipsum dolor sit amet, consectetur adipiscing ellorem ipsum dolor sit amet,
                                consectetur adipiscing ellorem ipsum dolor sit amet, consectetur adipiscing el" />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <button className="btn settings_btn">
                                Update
                            </button>
                            <button className="btn settings_btn">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings