import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { map } from 'lodash'

import { updateUserInfo } from '../../../redux/modules/user/actions'
import { getUser } from '../../../redux/modules/users/actions'

import SkillsForm from './../../forms/skills';
import RolesForm from './../../forms/roles';
import CountriesDatalist from './countries-datalist';
import Button from './../../style-components/button';
import IconButton from './../../style-components/icon-button';
import Input from './../../style-components/input';
import Icon from './../../style-components/icon/index';

import locale from '../../../locale/en'

import vkIcon from '../../../img/vk.svg'
import githubIcon from '../../../img/github.svg'
import facebookIcon from '../../../img/facebook.svg'
import linkedinIcon from '../../../img/linkedin.svg'
import './settings.css'

const Settings = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const user = useSelector(state => state.users.user)
    const { header, placeholder, button } = locale.translation

    useEffect(() => {
        dispatch(getUser(currentUser._id))
    }, [dispatch, currentUser._id])

    const {
        _id,
        firstName = '',
        lastName = '',
        city = '',
        country = '',
        bio = '',
        roles,
        skills,
        profilePicture = "/static/media/users.86cb98ab.svg",
        socials
    } = user

    const {
        vk = '',
        facebook = '',
        linkedin = '',
        github = '',
    } = socials

    const history = useHistory()

    const firstNameInput = React.createRef()
    const lastNameInput = React.createRef()
    const cityInput = React.createRef()
    const countryInput = React.createRef()
    const bioInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()
    const vkInput = React.createRef()
    const facebookInput = React.createRef()
    const linkedinInput = React.createRef()
    const githubInput = React.createRef()

    const [editedFirstName, setFirstName] = useState(firstName)
    const [editedLastName, setLastName] = useState(lastName)
    const [editedCity, setCity] = useState(city)
    const [editedCountry, setCountry] = useState(country)
    const [editedBio, setBio] = useState(bio)
    const [editedRoles, setRoles] = useState([...roles])
    const [editedSkills, setSkills] = useState([...skills])
    const [editedVk, setVk] = useState(vk)
    const [editedFacebook, setFacebook] = useState(facebook)
    const [editedLinkedin, setLinkedin] = useState(linkedin)
    const [editedGithub, setGithub] = useState(github)

    const rolesString = editedRoles.join(', ')
    const skillsString = editedSkills.join(', ')

    const event = {
        'firstName': () => setFirstName(firstNameInput.current.value),
        'lastName': () => setLastName(lastNameInput.current.value),
        'city': () => setCity(cityInput.current.value),
        'country': () => setCountry(countryInput.current.value),
        'bio': () => setBio(bioInput.current.value),
        'roles': () => setRoles(rolesInput.current.value),
        'skills': () => setSkills(skillsInput.current.value),
        'vk': () => setVk(vkInput.current.value),
        'facebook': () => setFacebook(facebookInput.current.value),
        'linkedin': () => setLinkedin(linkedinInput.current.value),
        'github': () => setGithub(githubInput.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const updateClickHandler = () => {
        const editedUser = {
            _id,
            firstName: editedFirstName,
            lastName: editedLastName,
            city: editedCity,
            country: editedCountry,
            bio: editedBio,
            roles: editedRoles,
            skills: editedSkills,
            profilePicture,
            socials: {
                vk: editedVk,
                facebook: editedFacebook,
                linkedin: editedLinkedin,
                github: editedGithub
            }
        }

        dispatch(updateUserInfo(editedUser))
        history.push(`/profile/${currentUser._id}`)
    }

    const cancelClickHandler = () => {
        setFirstName(firstName)
        setLastName(lastName)
        setCity(city)
        setCountry(country)
        setBio(bio)
        setRoles(roles)
        setSkills(skills)
        setVk(socials.vk)
        setFacebook(socials.facebook)
        setLinkedin(socials.linkedin)
        setGithub(socials.github)
    }

    const socialsData = {
        'vk': [vkIcon, editedVk, vkInput],
        'facebook': [facebookIcon, editedFacebook, facebookInput],
        'linkedin': [linkedinIcon, editedLinkedin, linkedinInput],
        'github': [githubIcon, editedGithub, githubInput]
    }

    const socialInputs = map(socialsData, (value, key) =>
        <div key={key} className="settings__item">
            <div className="social-settings__field">
                <Icon className={'social-icon social-icon_settings'} alt={`add-${key}`} src={value[0]} />
                <Input id={key} type="text" placeholder={placeholder.link} value={value[1]} ref={value[2]} onChange={() => onChangeHandler(key)} />
            </div>
        </div>
    )

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skills} />
                <RolesForm setRoles={setRoles} roles={roles} />
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">{header.settings}</div>
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="settings__picture">
                                <img className="profile-picture" src={profilePicture} alt="profile" />
                                <label className="title-label" htmlFor="profilePicture">{placeholder.profilePicture}</label>
                                <input className="text-input btn" id="profilePicture" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" />
                            </div>
                            <div className="profile__info">
                                <label className="title-label" htmlFor="firstname">{placeholder.editProfile}</label>
                                <div className="settings-field">
                                    <div className="settings__item">
                                        <Input id="firstname" type="text" placeholder={placeholder.firstName} value={editedFirstName} ref={firstNameInput} onChange={() => onChangeHandler('firstName')} />
                                    </div>

                                    <div className="settings__item">
                                        <Input id="lastName" type="text" placeholder={placeholder.lastName} value={editedLastName} ref={lastNameInput} onChange={() => onChangeHandler('lastName')} />
                                    </div>

                                    <div className="settings__item">
                                        <Input id="city" type="text" placeholder={placeholder.city} value={editedCity} ref={cityInput} onChange={() => onChangeHandler('city')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="skill">{placeholder.coutry}</label>
                                        <input
                                            autoComplete="on"
                                            className="text-input"
                                            id="skill"
                                            type="text"
                                            placeholder={placeholder.coutry}
                                            list="countries"
                                            value={editedCountry}
                                            ref={countryInput}
                                            onChange={() => onChangeHandler('country')} />
                                        <CountriesDatalist />
                                    </div>

                                    <div className="settings__item">
                                        <div className="settings__field">
                                            <Input id="roles" type="text" disabled={true} placeholder={placeholder.roles} value={rolesString} ref={rolesInput} onChange={() => onChangeHandler('roles')} />
                                            <IconButton className={'btn input_btn'} htmlFor={'modal__toggle_roles'} text={button.edit} />
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <div className="settings__field">
                                            <Input id="skills" type="text" disabled={true} placeholder={placeholder.skills} value={skillsString} ref={skillsInput} onChange={() => onChangeHandler('skills')} />
                                            <IconButton className={'btn input_btn'} htmlFor={'modal__toggle_skills'} text={button.edit} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="settings__item">
                            <label className="title-label" htmlFor="vk">{placeholder.addSocials}</label>
                            <div className="settings-socials__list">
                                {socialInputs}
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <textarea className="textarea-input" type="text" placeholder={placeholder.bio} value={editedBio} ref={bioInput} onChange={() => onChangeHandler('bio')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <Button subClass="settings_btn" onClick={() => updateClickHandler()} text={button.update} />
                            <Button subClass="settings_btn" onClick={() => cancelClickHandler()} text={button.cancelChanges} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings