import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import './create-project.css'

import defaultProjectPicture from '../../../img/project.svg'
import SkillsForm from '../../forms/skills'
import RolesForm from './../../forms/roles'
import ProjectRequests from './project-requests/project-requests';

import { addProject, updateProject } from '../../../redux/modules/projects/actions'
import { getUsers } from '../../../redux/modules/users/actions'
import { PropTypes } from 'prop-types';

const CreateProject = ({
    isEditing = false
}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { state: project } = useLocation()

    const currentUser = useSelector(state => state.user)

    let currentProject = project || {
        title: '',
        picture: defaultProjectPicture,
        status: '',
        description: '',
        skills: [],
        requests: [],
        devs: [
            {
                _id: currentUser._id,
                role: currentUser.roles[0],
                creator: true
            }
        ],

        needList: []
    }

    const {
        _id = project?._id || null,
        title,
        picture,
        status,
        description,
        skills,
        devs,
        requests,
        needList
    } = currentProject

    const ids = requests.map(request => request._id)
    useEffect(() => {
        if (isEditing) dispatch(getUsers(ids))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const titleInput = React.createRef()
    const statusInput = React.createRef()
    const rolesInput = React.createRef()
    const skillsInput = React.createRef()
    const descriptionInput = React.createRef()
    const pictureUpload = React.createRef()

    const [newTitle, setTitle] = useState(title)
    const [newStatus, setStatus] = useState(status)
    const [newDescription, setDescription] = useState(description)
    const [newPicture, setPicture] = useState(picture)
    const [newNeedList, setNeedList] = useState(needList)
    const [newSkills, setSkills] = useState(skills)

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
        currentProject = {
            _id,
            title: newTitle,
            status: newStatus,
            description: newDescription,
            skills: newSkills,
            needList: newNeedList,
            picture,
            requests,
            devs
        }
        if (isEditing) {
            dispatch(updateProject(currentProject))
        } else {
            dispatch(addProject(currentProject))
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

    let requestslist = isEditing ? <ProjectRequests /> : null

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
    isEditing: PropTypes.bool,
}


export default CreateProject