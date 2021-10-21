import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import './create-project.css'

import defaultProjectPicture from '../../../img/project.svg'
import SkillsForm from '../../forms/skills'
import { addProject } from '../../../redux/modules/projects'
import { addProjectId } from './../../../redux/modules/user';

const CreateProject = ({ user, skills, addProject, addProjectId }) => {

    const history = useHistory()

    const titleInput = React.createRef()
    const statusInput = React.createRef()
    const devsInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()
    const descriptionInput = React.createRef()

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const [devs, setDevs] = useState([])
    const [roles, setRoles] = useState([])
    const [skillsStack, setSkillsStack] = useState([])

    const event = {
        'title': () => setTitle(titleInput.current.value),
        'status': () => setStatus(statusInput.current.value),
        'devs': () => setDevs(devsInput.current.value),
        'roles': () => setRoles(rolesInput.current.value),
        'skillsStack': () => setSkillsStack(skillsInput.current.value),
        'description': () => setDescription(descriptionInput.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const createClickHandler = () => {
        let project = {
            title,
            creator: user.userId,
            status,
            description,
            devs,
            roles,
            skillsStack
        }
        addProject(project)
        addProjectId({ title, status })
        clearClickHandler()
        history.push('/projects')
    }

    const clearClickHandler = () => {
        setTitle('')
        setStatus('')
        setDescription('')
        setDevs([])
        setRoles([])
        setSkillsStack([])
    }

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkillsStack} skills={skills} />
                <div className="profile__card card">
                    <div className="card__header">
                        project.init
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={defaultProjectPicture} alt="profile" />
                                <label className="picture-label" htmlFor="profilePicture">Project picture:</label>
                                <input className="text-input btn" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" />
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
                                            <option value="startingSoon">Startin Soon</option>
                                            <option value="active">Active</option>
                                            <option value="planned">Planned</option>
                                        </select>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="devs">Devs</label>
                                        <div className="input__item">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="devs"
                                                type="text"
                                                placeholder="Devs"
                                                value={devs.join(', ')}
                                                ref={devsInput}
                                                onChange={() => onChangeHandler('devs')} />
                                            <button className="btn input_btn" onClick={() => ('')}>Add</button>
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="role">Need roles</label>
                                        <div className="input__item">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="role"
                                                type="text"
                                                placeholder="Roles"
                                                value={roles.join(', ')}
                                                ref={rolesInput}
                                                onChange={() => onChangeHandler('roles')} />
                                            <button className="btn input_btn" onClick={() => ('')}>Add</button>
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
                                                value={skillsStack.join(', ')}
                                                ref={skillsInput}
                                                onChange={() => onChangeHandler('skillsStack')} />
                                            <label className="btn input_btn" htmlFor="modal-toggle_skills">Add</label>
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

export default connect(
    ({ user, skills }) => ({ user, skills }),
    { addProject, addProjectId }
)(CreateProject)