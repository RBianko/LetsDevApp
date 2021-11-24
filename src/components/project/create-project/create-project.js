import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { connect } from 'react-redux'
import './create-project.css'

import defaultProjectPicture from '../../../img/project.svg'
import SkillsForm from '../../forms/skills'
import RolesForm from './../../forms/roles'
import ProjectRequests from './project-requests/project-requests';

import {
    addProject,
    editTitle,
    editStatus,
    editDescription,
    editNeedList,
    editSkillsStack,
} from '../../../redux/modules/projects/actions'
import { addProjectId } from './../../../redux/modules/user/actions'
import { PropTypes } from 'prop-types';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';

const CreateProject = ({
    user,
    users,
    skills: skillsList,
    roles: rolesList,
    addProject,
    addProjectId,
    editTitle,
    editStatus,
    editDescription,
    editNeedList,
    editSkillsStack,
    newProjectId,
    isEditing = false
}) => {

    const history = useHistory()
    const { state: project } = useLocation()


    let currentProject = project || {
        id: newProjectId,
        title: '',
        projectPicture: defaultProjectPicture,
        status: '',
        description: '',
        skills: [],
        requests: [],
        devs: [
            {
                _id: user._id,
                role: user.roles[0],
                creator: true
            }
        ],
        needList: []
    }

    const {
        id,
        title,
        projectPicture,
        status,
        description,
        skills,
        devs,
        requests,
        needList
    } = currentProject

    const titleInput = React.createRef()
    const statusInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()
    const descriptionInput = React.createRef()
    const pictureUpload = React.createRef()

    const [newTitle, setTitle] = useState(title)
    const [newStatus, setStatus] = useState(status)
    const [newDescription, setDescription] = useState(description)
    const [newPicture, setPicture] = useState(projectPicture)
    const [newNeedList, setNeedList] = useState(needList)
    const [newSkills, setSkills] = useState(skills)

    let devsList = devs.map(dev => users.list.find(user => dev._id === user._id))
    let devsListString = devsList.map((dev, id) => `${dev.firstName}: ${devs[id].role}`).join(', ')

    let needListString = newNeedList.join(', ')
    let skillsStackList = newSkills.join(', ')

    const event = {
        'title': () => setTitle(titleInput.current.value),
        'status': () => setStatus(statusInput.current.value),
        'roles': () => setNeedList(rolesInput.current.value),
        'skillsStack': () => setSkills(skillsInput.current.value),
        'description': () => setDescription(descriptionInput.current.value),
        'picture': () => setPicture(pictureUpload.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const submitClickHandler = () => {
        if (isEditing) {
            editTitle(newTitle, id)
            editStatus(newStatus, id)
            editDescription(newDescription, id)
            editNeedList(newNeedList, id)
            editSkillsStack(newSkills, id)
        } else {
            currentProject = {
                title: newTitle,
                status: newStatus,
                description: newDescription,
                skills: newSkills,
                needList: newNeedList,
                projectPicture,
                requests,
                devs
            }
            addProject(currentProject)
            addProjectId(newProjectId.toString())
            clearClickHandler()
        }

        history.push('/my-projects')
    }

    const clearClickHandler = () => {
        setTitle(title)
        setStatus(status)
        setDescription(description)
        setNeedList(needList)
        setSkills(skills)
    }

    const requestslist = isEditing ? <ProjectRequests projectId={id} /> : null

    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skills} />
                <RolesForm setRoles={setNeedList} roles={needList} />
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">project.init</div>
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__contacts">
                                <img className="profile-picture" src={newPicture} alt="project" />
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
                                            value={newTitle}
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
                                            value={newStatus}
                                            ref={statusInput}
                                            onChange={() => onChangeHandler('status')}>
                                            <option hidden>Select one...</option>
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                            <option value="Active">Active</option>
                                            <option value="Done">Done</option>
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
                                            value={devsListString} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="role">Need roles</label>
                                        <div className="input__item">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="role"
                                                type="text"
                                                placeholder="Roles"
                                                value={needListString}
                                                ref={rolesInput}
                                                onChange={() => onChangeHandler('roles')} />
                                            <label className="btn input_btn" htmlFor="modal__toggle_roles">Edit</label>
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
                                            <label className="btn input_btn" htmlFor="modal__toggle_skills">Edit</label>
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
                                    value={newDescription}
                                    ref={descriptionInput}
                                    onChange={() => onChangeHandler('description')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <button className="btn settings_btn" onClick={submitClickHandler}>
                                Submit
                            </button>
                            <button className="btn settings_btn" onClick={clearClickHandler}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                {requestslist}
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
    ({ user, users, skills, roles, projects }) => ({ user, users, skills, roles, newProjectId: projects.id }),
    {
        addProject,
        addProjectId,
        editTitle,
        editStatus,
        editDescription,
        editNeedList,
        editSkillsStack,
    }
)(CreateProject)