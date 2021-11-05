import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import './create-project.css'

import defaultProjectPicture from '../../../img/project.svg'
import SkillsForm from '../../forms/skills'
import RolesForm from './../../forms/roles'
import { addProject } from '../../../redux/modules/projects/actions'
import { addProjectId } from './../../../redux/modules/user/actions'
import { PropTypes } from 'prop-types';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';


const CreateProject = ({
    user,
    skills: skillsList,
    roles: rolesList,
    addProject,
    addProjectId
}) => {

    const history = useHistory()

    const titleInput = React.createRef()
    const statusInput = React.createRef()
    const devsInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()
    const descriptionInput = React.createRef()
    const pictureUpload = React.createRef()

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState(defaultProjectPicture)
    const [devs, setDevs] = useState([user])
    const [roles, setRoles] = useState([])
    const [skills, setSkills] = useState([])

    let devsList = devs.map(dev => `${dev.firstName} (${dev.roles[0]})`).join(', ')
    let rolesStackList = roles.join(', ')
    let skillsStackList = skills.join(', ')

    const event = {
        'title': () => setTitle(titleInput.current.value),
        'status': () => setStatus(statusInput.current.value),
        'devs': () => setDevs(devsInput.current.value),
        'roles': () => setRoles(rolesInput.current.value),
        'skillsStack': () => setSkills(skillsInput.current.value),
        'description': () => setDescription(descriptionInput.current.value),
        'picture': () => setPicture(pictureUpload.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const createClickHandler = () => {
        let project = {
            title,
            creator: user.userId,
            picture,
            status,
            description,
            devs,
            roles,
            skills
        }
        const id = 'id'
        addProject(project)
        addProjectId(id)
        clearClickHandler()

        history.push('/my-projects')
    }

    const clearClickHandler = () => {
        setTitle('')
        setStatus('')
        setDescription('')
        setDevs([user])
        setRoles([])
        setSkills([])
    }

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skillsList} />
                <RolesForm setRoles={setRoles} roles={rolesList} />
                <div className="profile__card card">
                    <div className="card__header">
                        project.init
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={picture} alt="project" />
                                <label className="picture-label" htmlFor="profilePicture">Project picture:</label>
                                <input className="text-input btn" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" ref={pictureUpload} onChange={() => onChangeHandler('picture')} />
                            </div>
                            <div className="profile__info">
                                <div className="settings-field">
                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="title">Title</label>
                                        <input
                                            className="text-input"
                                            id="title"
                                            type="text"
                                            placeholder="Title"
                                            value={title}
                                            ref={titleInput}
                                            onChange={() => onChangeHandler('title')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="status">Status</label>
                                        <select
                                            className="text-input"
                                            id="status"
                                            type="text"
                                            placeholder="Status"
                                            value={status}
                                            ref={statusInput}
                                            onChange={() => onChangeHandler('status')}>
                                            <option hidden>Select one...</option>
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                            <option value="Active">Active</option>
                                            <option value="Planned">Planned</option>
                                        </select>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="devs">Devs</label>
                                        <input
                                            className="text-input" disabled
                                            id="devs"
                                            type="text"
                                            placeholder="Devs"
                                            value={devsList}
                                            ref={devsInput}
                                            onChange={() => onChangeHandler('devs')} />

                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="role">Need roles</label>
                                        <div className="input__item">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="role"
                                                type="text"
                                                placeholder="Roles"
                                                value={rolesStackList}
                                                ref={rolesInput}
                                                onChange={() => onChangeHandler('roles')} />
                                            <label className="btn input_btn" htmlFor="modal-toggle_roles">Edit</label>
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="skills">Technical stack</label>
                                        <div className="input__item">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="skills"
                                                type="text"
                                                placeholder="Tech stack"
                                                value={skillsStackList}
                                                ref={skillsInput}
                                                onChange={() => onChangeHandler('skillsStack')} />
                                            <label className="btn input_btn" htmlFor="modal-toggle_skills">Edit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Description</h3>
                                <textarea
                                    className="textarea-input"
                                    type="text"
                                    placeholder="Description"
                                    value={description}
                                    ref={descriptionInput}
                                    onChange={() => onChangeHandler('description')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <button className="btn settings_btn" onClick={createClickHandler}>
                                Create
                            </button>
                            <button className="btn settings_btn" onClick={clearClickHandler}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CreateProject.propTypes = {
    user: UserPropTypes,
    skills: PropTypes.arrayOf(PropTypes.string),
    roles: PropTypes.arrayOf(PropTypes.string),
    addProject: PropTypes.func,
    addProjectId: PropTypes.func,
    id: PropTypes.number,
}


export default connect(
    ({ user, skills, roles, projects }) => ({ user, skills, roles, id: projects.id }),
    { addProject, addProjectId }
)(CreateProject)