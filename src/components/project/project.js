import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useSkills } from '../../hooks/skills.hook'
import { applyRequest } from '../../redux/modules/projects/actions'
import { getProjectDetails } from '../../redux/modules/projects/actions'
import { getUsers } from './../../redux/modules/users/actions'
import { shortenLink } from './../../helpers/shorten-link';

import ConfirmForm from '../forms/cofirm/confirm-form'
import LoaderComponent from '../style-components/loader/loader'
import ProfileCard from '../profile/profile-card'
import IconButton from '../style-components/icon-button'
import RolesForm from '../forms/roles'
import Icon from '../style-components/icon'

import locale from '../../locale/en'

import editIcon from '../../img/edit.svg'
import deleteIcon from '../../img/delete.svg'
import requestsIcon from '../../img/request.svg'
import linkIcon from '../../img/link.svg'


const Project = () => {
    const { state } = useLocation()
    const dispatch = useDispatch()
    const { defaultSkills, customSkills } = useSkills()
    const { placeholder, text, header, button, tooltip } = locale.translation

    useEffect(() => {
        dispatch(getProjectDetails(state.id));
    }, [dispatch, state.id]);

    const user = useSelector(state => state.user)
    const { project, loadingProjectDetails } = useSelector((state) => state.projects);
    const { list: users, loadingUsers } = useSelector(state => state.users)

    const {
        title = '',
        picture = '',
        status = '',
        description = '',
        link = '',
        skills = [],
        devs = [],
        needList = [],
        requests = []
    } = project

    useEffect(() => {
        if (devs.length > 0) dispatch(getUsers([...devs].map(dev => dev._id)))
    }, [devs, dispatch]);

    const defaultSkillsList = defaultSkills(skills)
    const customSkillsList = customSkills(skills)

    const noSkillsString = customSkillsList.length === 0 && defaultSkillsList.length === 0 ? <p>{text.noSelectedSkills}</p> : null
    const customSkillsTitle = customSkillsList.length > 0 ? <span className="skills-other__title">{text.otherTechnologies}</span> : null

    const creator = devs.find(user => user.creator)
    const getRole = (id) => devs.find(dev => dev._id === id)?.role
    const devsList = users.map(dev => {
        return <ProfileCard
            key={dev._id}
            user={dev}
            role={getRole(dev._id)}
            creator={dev._id === creator?._id}
        />
    })

    const descriptionContent = description ? description : <span>{text.noDescription}</span>
    const needListString = needList.join(', ')
    const needListContent = needList.length > 0
        ? <div className="need-list">
            <h3 className="need-list__title">{text.weNeed}</h3>
            <span className="need-list__roles">
                {needListString}
            </span>
        </div>
        : null

    const userInProject = devs.find(dev => dev._id === user._id)
    const isCreator = userInProject && userInProject.creator

    const applyButton = (needList.length > 0) && !userInProject
        ? <IconButton className={'btn apply-btn'} htmlFor={'modal__toggle_roles'} text={button.applyForProject} data={state.id} />
        : null

    const links = isCreator
        ? <div className="project__creator-links">
            <Link to={{ pathname: "/edit-project", state: project }}>
                <Icon className={'creator-link__icon'} alt={'Edit'} src={editIcon} title={tooltip.editProject} />
            </Link>
            {requests.length > 0
                ?
                <Link to={{ pathname: "/requests", state: project }}>
                    <Icon className={'creator-link__icon'} alt={'Requests'} src={requestsIcon} title={tooltip.requestsForProject} />
                    <span className={'notification-counter'}>{requests.length}</span>
                </Link>
                : null}
            <IconButton
                className={'delete-btn'}
                classNameIcon={'arrow_icon'}
                htmlFor={'modal__toggle_confirm'}
                child={<Icon className={'creator-link__icon'} alt={'Delete'} src={deleteIcon} title={tooltip.deleteProject} />}
                data={state.id}
            />
        </div>
        : null

    const applyRoles = (role) => dispatch(applyRequest(state.id, user._id, role[0].toString()))

    const shortLink = shortenLink(link)
    const linkString = shortLink
        ? <a className="social__link" href={link} target="_blank" rel="noopener noreferrer">
            <div className="link-wrapper">
                <img className="link-icon link-icon_small" src={linkIcon} alt="link" />
            </div>
            <span className="short-link__text">{shortLink}</span>
        </a>
        : null

    const projectContent = loadingProjectDetails || loadingUsers
        ? <LoaderComponent />
        : <>
            <div className="project-content__header">
                <div className="project__info">
                    <img className="project__picture" src={picture} alt="project" />
                </div>
                <div className="project__info">
                    {links}
                    <span className="project-info__title">{title}</span>
                    <span className="project-info__status">{status}</span>
                    {linkString}
                    <div className="skills-list skills_project">
                        {noSkillsString}
                        <div className="skills-grid">
                            {defaultSkillsList}
                        </div>
                        <div className="skills-other">
                            {customSkillsTitle}
                            <div className="skills-grid">
                                {customSkillsList}
                            </div>
                        </div>
                    </div>
                    {applyButton}
                </div>
            </div>
            <div className="project-content_body">
                {needListContent}
                <div className="project__description">
                    <div className="socials__list" >
                        <h3 className="description__title">{placeholder.description}</h3>
                    </div>
                    <p className="description__text">{descriptionContent}</p>
                </div>

                <div className="project__devs">
                    <h3 className="devs__title">{text.devsList}</h3>
                    <div className="devs__list">
                        {devsList}
                    </div>
                </div>
            </div>
        </>

    return <div className="container">
        <RolesForm stack={needList} setRoles={applyRoles} multiply={false} />
        <ConfirmForm id={state.id} />
        <div className="project__card card">
            <div className="card__header">
                <div className="header__title">{header.projectPage}</div>
            </div>
            <div className="card__content project-content">
                {projectContent}
            </div>
        </div>
    </div>
}

export default Project