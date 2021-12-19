import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'

import { addProject, updateProject } from '../../../redux/modules/projects/actions'

import SkillsForm from '../../forms/skills'
import RolesForm from './../../forms/roles'
import Button from './../../style-components/button';

import locale from '../../../locale/en'

import defaultProjectPicture from '../../../img/project.svg'
import './create-project.css'
import Input from './../../style-components/input/index';


const CreateProject = ({ isEditing = false }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { state: project } = useLocation()
    const { placeholder, header, button } = locale.translation

    const currentUser = useSelector(state => state.user)

    const currentProject = project || {
        title: '',
        picture: defaultProjectPicture,
        status: '',
        description: '',
        link: '',
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
        link,
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
    const linkInput = React.createRef()
    const pictureUpload = React.createRef()

    const [newTitle, setTitle] = useState(title)
    const [newStatus, setStatus] = useState(status)
    const [newDescription, setDescription] = useState(description)
    const [newLink, setLink] = useState(link)
    const [newPicture, setPicture] = useState(picture)
    const [newNeedList, setNeedList] = useState(needList)
    const [newSkills, setSkills] = useState(skills)

    const needListString = newNeedList.join(', ')
    const skillsStackList = newSkills.join(', ')

    const event = {
        'title': () => setTitle(titleInput.current.value),
        'status': () => setStatus(statusInput.current.value),
        'roles': () => setNeedList(rolesInput.current.value),
        'skillsStack': () => setSkills(skillsInput.current.value),
        'description': () => setDescription(descriptionInput.current.value),
        'link': () => setLink(linkInput.current.value),
        'picture': () => setPicture(pictureUpload.current.value),
    }

    const onChangeHandler = target => {
        event[target]()
    }

    const submitClickHandler = () => {
        const result = {
            _id,
            title: newTitle,
            status: newStatus,
            description: newDescription,
            link: newLink,
            skills: newSkills,
            needList: newNeedList,
            picture,
            requests,
            devs
        }

        if (isEditing) {
            dispatch(updateProject(result))
        } else {
            dispatch(addProject(result))
        }

        history.push('/my-projects')
    }

    const clearClickHandler = () => {
        setTitle(title)
        setStatus(status)
        setDescription(description)
        setLink(link)
        setNeedList(needList)
        setSkills(skills)
    }


    return (
        <>
            <div className="container">
                <SkillsForm setSkills={setSkills} skills={skills} />
                <RolesForm setRoles={setNeedList} roles={needList} />
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">{header.projectInit}</div>
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__contacts">
                                <img className="profile-picture" src={newPicture} alt="project" />
                                <label className="picture-label" htmlFor="profilePicture">{placeholder.projectPicture}</label>
                                <input className="text-input btn" name="profilePicture" type="file" size="40" accept="image/png, image/jpeg" ref={pictureUpload} onChange={() => onChangeHandler('picture')} />
                            </div>
                            <div className="profile__info">
                                <div className="settings-field">
                                    <div className="settings__item">
                                        <Input id="title" type="text" placeholder={placeholder.title} value={newTitle} ref={titleInput} onChange={() => onChangeHandler('title')} />
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="status">{placeholder.status}</label>
                                        <select
                                            className="text-input"
                                            id="status"
                                            type="text"
                                            placeholder={placeholder.status}
                                            value={newStatus}
                                            ref={statusInput}
                                            onChange={() => onChangeHandler('status')}>
                                            <option hidden>{placeholder.selectOne}</option>
                                            <option value={placeholder.statusList.online}>{placeholder.statusList.online}</option>
                                            <option value={placeholder.statusList.offline}>{placeholder.statusList.offline}</option>
                                            <option value={placeholder.statusList.active}>{placeholder.statusList.active}</option>
                                            <option value={placeholder.statusList.done}>{placeholder.statusList.done}</option>
                                            <option value={placeholder.statusList.planned}>{placeholder.statusList.planned}</option>
                                        </select>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="role">{placeholder.needRoles}</label>
                                        <div className="settings__field">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="role"
                                                type="text"
                                                placeholder={placeholder.roles}
                                                value={needListString}
                                                ref={rolesInput}
                                                onChange={() => onChangeHandler('roles')} />
                                            <label className="btn input_btn" htmlFor="modal__toggle_roles">{button.edit}</label>
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <label className="text-label" htmlFor="skills">{placeholder.techStack}</label>
                                        <div className="settings__field">
                                            <input
                                                className="text-input input_complex" disabled
                                                id="skills"
                                                type="text"
                                                placeholder={placeholder.techStack}
                                                value={skillsStackList}
                                                ref={skillsInput}
                                                onChange={() => onChangeHandler('skillsStack')} />
                                            <label className="btn input_btn" htmlFor="modal__toggle_skills">{button.edit}</label>
                                        </div>
                                    </div>

                                    <div className="settings__item">
                                        <Input id="link" type="text" placeholder={placeholder.linkProject} value={newLink} ref={linkInput} onChange={() => onChangeHandler('link')} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">{placeholder.description}</h3>
                                <textarea
                                    className="textarea-input"
                                    type="text"
                                    placeholder={placeholder.description}
                                    value={newDescription}
                                    ref={descriptionInput}
                                    onChange={() => onChangeHandler('description')} />
                            </div>
                        </div>
                        <div className="settings__buttons">
                            <Button subClass="settings_btn" onClick={submitClickHandler} text={button.submit} />
                            <Button subClass="settings_btn" onClick={clearClickHandler} text={button.clear} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CreateProject.propTypes = {
    isEditing: PropTypes.bool,
}


export default CreateProject