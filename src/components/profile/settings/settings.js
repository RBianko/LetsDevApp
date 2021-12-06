import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './settings.css'

import { updateUserInfo } from '../../../redux/modules/user/actions'
import { getUser } from '../../../redux/modules/users/actions'

import SkillsForm from './../../forms/skills';
import RolesForm from './../../forms/roles';
import CountryDatalist from './country-datalist';
import Button from './../../style-components/button';
import IconButton from './../../style-components/icon-button';
import Input from './../../style-components/input';
import Icon from './../../style-components/icon/index';

import vkIcon from '../../../img/vk.svg'
import githubIcon from '../../../img/github.svg'
import facebookIcon from '../../../img/facebook.svg'
import linkedinIcon from '../../../img/linkedin.svg'

const Settings = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser(currentUser._id))
    }, [dispatch, currentUser._id])

    const user = useSelector(state => state.users.user)

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

    let rolesString = editedRoles.join(', ')
    let skillsString = editedSkills.join(', ')

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

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skills} />
                <RolesForm setRoles={setRoles} roles={roles} />
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">settings.cfg</div>
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__contacts">
                                <img className="profile-picture" src={profilePicture} alt="profile" />
                                <label className="title-label" htmlFor="profilePicture">Profile picture:</label>
                                <input className="text-input btn" id="profilePicture" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" />
                            </div>
                            <div className="profile__info">
                                <label className="title-label" htmlFor="firstname">Edit Profile:</label>
                                <div className="settings-field">
                                    <div className="settings__item">
                                        <Input id="firstname" type="text" placeholder="First Name" value={editedFirstName} ref={firstNameInput} onChange={() => onChangeHandler('firstName')} />
                                    </div>

                                    <div className="settings__item">
                                        <Input id="lastName" type="text" placeholder="Last Name" value={editedLastName} ref={lastNameInput} onChange={() => onChangeHandler('lastName')} />
                                    </div>

                                    <div className="settings__item">
                                        <Input id="city" type="text" placeholder="City" value={editedCity} ref={cityInput} onChange={() => onChangeHandler('city')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="skill">Country</label>
                                        <input
                                            autoComplete="on"
                                            className="text-input"
                                            id="skill"
                                            type="text"
                                            placeholder="Country"
                                            list="country"
                                            value={editedCountry}
                                            ref={countryInput}
                                            onChange={() => onChangeHandler('country')} />
                                        <CountryDatalist />
                                    </div>

                                    <div className="settings__item">
                                        <div className="input__item">
                                            <Input id="roles" type="text" disabled={true} placeholder="Roles" value={rolesString} ref={rolesInput} onChange={() => onChangeHandler('roles')} />
                                            <IconButton className={'btn input_btn'} htmlFor={'modal__toggle_roles'} text={'Edit'} />
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <div className="input__item">
                                            <Input id="skills" type="text" disabled={true} placeholder="Skills" value={skillsString} ref={skillsInput} onChange={() => onChangeHandler('skills')} />
                                            <IconButton className={'btn input_btn'} htmlFor={'modal__toggle_skills'} text={'Edit'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="settings__item">
                            <label className="title-label" htmlFor="vk">Add socials:</label>
                            <div className="settings-socials__list">
                                <div className="settings__item">
                                    <div className="social-input__item">
                                        <Icon className={'social-icon social-icon_settings'} alt={'add-vk'} src={vkIcon} />
                                        <Input id="vk" type="text" placeholder="Link" value={editedVk} ref={vkInput} onChange={() => onChangeHandler('vk')} />
                                    </div>
                                </div>
                                <div className="settings__item">
                                    <div className="social-input__item">
                                        <Icon className={'social-icon social-icon_settings'} alt={'add-facebook'} src={facebookIcon} />
                                        <Input id="vk" type="text" placeholder="Link" value={editedFacebook} ref={facebookInput} onChange={() => onChangeHandler('facebook')} />
                                    </div>
                                </div>
                                <div className="settings__item">
                                    <div className="social-input__item">
                                        <Icon className={'social-icon social-icon_settings'} alt={'add-linkedin'} src={linkedinIcon} />
                                        <Input id="vk" type="text" placeholder="Link" value={editedLinkedin} ref={linkedinInput} onChange={() => onChangeHandler('linkedin')} />
                                    </div>
                                </div>
                                <div className="settings__item">
                                    <div className="social-input__item">
                                        <Icon className={'social-icon social-icon_settings'} alt={'add-github'} src={githubIcon} />
                                        <Input id="vk" type="text" placeholder="Link" value={editedGithub} ref={githubInput} onChange={() => onChangeHandler('github')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <textarea className="textarea-input" type="text" placeholder="Bio" value={editedBio} ref={bioInput} onChange={() => onChangeHandler('bio')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <Button subClass="settings_btn" onClick={() => updateClickHandler()} text={'Update'} />
                            <Button subClass="settings_btn" onClick={() => cancelClickHandler()} text={'Cancel changes'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings