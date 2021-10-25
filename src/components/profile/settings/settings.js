import React, { useState } from 'react'
import './settings.css'
import {
    editFirstName,
    editLastName,
    editCity,
    editCountry,
    editBio,
    editRoles,
    editSkills
} from '../../../redux/modules/user'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import SkillsForm from './../../forms/skills';
import RolesForm from './../../forms/roles';
import CountryDatalist from './country-datalist';

const Settings = ({
    user,
    roles: rolesList,
    skills: skillsList,
    editFirstName,
    editLastName,
    editCity,
    editCountry,
    editBio,
    editRoles,
    editSkills
}) => {

    const history = useHistory()

    const firstNameInput = React.createRef()
    const lastNameInput = React.createRef()
    const cityInput = React.createRef()
    const countryInput = React.createRef()
    const bioInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [city, setCity] = useState(user.city)
    const [country, setCountry] = useState(user.country)
    const [bio, setBio] = useState(user.bio)
    const [roles, setRoles] = useState(user.roles)
    const [skills, setSkills] = useState(user.skills)
    let rolesStackList = roles.join(', ')
    let skillsStackList = skills.join(', ')

    const event = {
        'firstName': () => setFirstName(firstNameInput.current.value),
        'lastName': () => setLastName(lastNameInput.current.value),
        'city': () => setCity(cityInput.current.value),
        'country': () => setCountry(countryInput.current.value),
        'bio': () => setBio(bioInput.current.value),
        'roles': () => setRoles(rolesInput.current.value),
        'skills': () => setSkills(skillsInput.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const updateClickHandler = () => {
        editFirstName(firstName)
        editLastName(lastName)
        editCity(city)
        editCountry(country)
        editBio(bio)
        editRoles(roles)
        editSkills(skills)

        history.push('/profile')
    }

    const cancelClickHandler = () => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setCity(user.city)
        setCountry(user.country)
        setBio(user.bio)
        setRoles(user.roles)
        setSkills(user.skills.join(', '))
    }

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skillsList} />
                <RolesForm setRoles={setRoles} roles={rolesList} />
                <div className="profile__card card">
                    <div className="card__header">
                        settings.cfg
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={user.profilePicture} alt="profile" />
                                <label className="picture-label" htmlFor="profilePicture">Profile picture:</label>
                                <input className="text-input btn" id="profilePicture" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" />
                            </div>
                            <div className="profile__info">
                                <div className="settings-field">
                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="firstname">First Name</label>
                                        <input className="text-input" id="firstname" type="text" placeholder="First Name" value={firstName} ref={firstNameInput} onChange={() => onChangeHandler('firstName')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="lastName">Last Name</label>
                                        <input className="text-input" id="lastName" type="text" placeholder="Last Name" value={lastName} ref={lastNameInput} onChange={() => onChangeHandler('lastName')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="city">City</label>
                                        <input className="text-input" id="city" type="text" placeholder="City" value={city} ref={cityInput} onChange={() => onChangeHandler('city')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="country">Country</label>
                                        <input className="text-input" autoComplete="on" placeholder="Country" list="country" value={country} ref={countryInput} onChange={() => onChangeHandler('country')} />
                                        <CountryDatalist />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="roles">Roles</label>
                                        <div className="input__item">
                                            <input className="text-input input_complex" disabled id="roles" type="text" placeholder="Roles" value={rolesStackList} ref={rolesInput} onChange={() => onChangeHandler('roles')} />
                                            <label className="btn input_btn" htmlFor="modal-toggle_roles">Edit</label>
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="skills">Skills</label>
                                        <div className="input__item">
                                            <input className="text-input input_complex" disabled id="skills" type="text" placeholder="Skills" value={skillsStackList} ref={skillsInput} onChange={() => onChangeHandler('skills')} />
                                            <label className="btn input_btn" htmlFor="modal-toggle_skills">Edit</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <textarea className="textarea-input" type="text" placeholder="Bio" value={bio} ref={bioInput} onChange={() => onChangeHandler('bio')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <button className="btn settings_btn" onClick={() => updateClickHandler()}>
                                Update
                            </button>
                            <button className="btn settings_btn" onClick={() => cancelClickHandler()}>
                                Cancel changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(
    ({ user, roles, skills }) => ({ user, roles, skills }),
    {
        editFirstName,
        editLastName,
        editCity,
        editCountry,
        editBio,
        editRoles,
        editSkills
    }
)(Settings)