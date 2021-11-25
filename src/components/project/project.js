import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import ProfileCard from '../profile/profile-card'
import Icon from '../style-components/icon';
import editIcon from '../../img/edit.svg'
import IconButton from '../style-components/icon-button';
import RolesForm from '../forms/roles';
import { useSkills } from '../../hooks/skills.hook';
import { applyRequest } from '../../redux/modules/projects/actions';
import { getProjectDetails } from '../../redux/modules/projects/actions'
import LoaderComponent from '../style-components/loader/loader';
import { getUsers } from './../../redux/modules/users/actions';

const Project = () => {
    let { state } = useLocation()
    const dispatch = useDispatch()
    const { global, other } = useSkills()

    useEffect(() => {
        dispatch(getProjectDetails(state.id));
    }, [dispatch, state.id]);

    const user = useSelector(state => state.user)

    const { project, loadingProjectDetails } = useSelector((state) => state.projects);
    const {
        title = '',
        projectPicture = '',
        status = '',
        description = '',
        skills = [],
        devs = [],
        needList = []
    } = project

    useEffect(() => {
        if (devs.length > 0) dispatch(getUsers([...devs].map(dev => dev._id)))
    }, [devs, dispatch]);

    const usersDevs = useSelector(state => state.users.list)

    const globalSkillsList = global(skills)
    const otherSkillsList = other(skills)

    let noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>No selected skills</p> : null
    let otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null

    const devsList = usersDevs.map(dev => {
        return <ProfileCard
            key={dev._id}
            user={dev}
            role={dev.role}
            creator={dev.creator}
        />
    })

    const needListString = needList.join(', ')
    const needListContent = needList.length > 0
        ? <div className="need-list">
            <h3 className="need-list__title">We need</h3>
            <span className="need-list__roles">
                {needListString}
            </span>
        </div>
        : null

    const userInProject = devs.find(dev => dev._id === user._id)

    const applyButton = (needList.length > 0) && !userInProject
        ? <IconButton className={'btn apply-btn'} htmlFor={'modal__toggle_roles'} text={'Apply for Project'} data={state.id} />
        : null

    const editLink = userInProject && userInProject.creator
        ? <Link to={{
            pathname: "/edit-project",
            state: project
        }}>
            <Icon className={'edit-icon'} alt={'Edit'} src={editIcon} title={'Edit project'} />
        </Link>
        : null

    const applyRoles = (roles) => dispatch(applyRequest(state.id, user._id, roles))

    const content = loadingProjectDetails
        ? <LoaderComponent />
        : <div className="card__content project-content">
            <div className="project-content__header">
                <div className="project__info">
                    <img className="project__picture" src={projectPicture} alt="project" />
                </div>
                <div className="project__info">
                    {editLink}
                    <span className="project-info__title">{title}</span>
                    <span className="project-info__status">{status}</span>
                    <div className="skills-list skills_project">
                        {noSkillsString}
                        <div className="skills-grid">
                            {globalSkillsList}
                        </div>
                        <div className="skills-other">
                            {otherSkillsTitle}
                            <div className="skills-grid">
                                {otherSkillsList}
                            </div>
                        </div>
                    </div>
                    {applyButton}
                </div>
            </div>
            <div className="project-content_body">
                {needListContent}
                <div className="project__description">
                    <h3 className="description__title">Description</h3>
                    <p className="description__text">{description}</p>
                </div>
                <div className="project__devs">
                    <h3 className="devs__title">Devs List</h3>
                    <div className="devs__list">
                        {devsList}
                    </div>
                </div>

            </div>
        </div>

    return <div className="container">
        <RolesForm stack={needList} setRoles={applyRoles} />
        <div className="project__card card">
            <div className="card__header">
                <div className="header__title">project.page</div>
            </div>
            {content}
        </div>
    </div>
}

export default Project