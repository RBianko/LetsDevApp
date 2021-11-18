import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import './profile.css'

import ProjectCardSmall from '../project/project-card/project-card-small'
import SocialLink from './../style-components/social-link';
import Button from './../style-components/button';
import { followToggle } from './../../redux/modules/user/actions';
import { getProjects } from './../../redux/modules/projects/actions';

import getFollowState from '../../helpers/get-follow-state'
import { useSkills } from './../../hooks/skills.hook';

const Profile = () => {
    let { state } = useLocation()
    let dispatch = useDispatch()
    useEffect(() => dispatch(getProjects()), [dispatch])

    const { list: projectsList, loadingProjects } = useSelector((state) => state.projects);
    const currentUser = useSelector(state => state.user)
    const users = useSelector(state => state.users.list)

    const user = users.find(user => user.userId === state.id)

    const {
        userId,
        firstName = "New User",
        lastName = "",
        city = "City",
        country = "Country",
        bio = `Something about ${firstName}`,
        roles,
        projects,
        skills,
        socials,
        profilePicture
    } = user

    const { global, other } = useSkills()
    const globalSkillsList = global(skills)
    const otherSkillsList = other(skills)

    let noSkillsString = otherSkillsList && otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>No selected skills</p> : null
    let otherSkillsTitle = otherSkillsList && otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null

    let socialsList = []
    for (let key in socials) {
        if (socials[key]) {
            socialsList.push(<SocialLink key={`${key}`} link={socials[key]} media={key} />)
        }
    }

    let userProjects = []

    if (!loadingProjects && projectsList.length > 0) {
        userProjects = projects.map(id =>
            projectsList.find(poroject => poroject._id === id)
        )
    }

    const userProjectsList = userProjects.map(poroject =>
        <ProjectCardSmall
            key={poroject._id}
            project={poroject}
        />)


    let projectListContent = projects.length > 0 ? (loadingProjects ? <span>LOADING...</span> : userProjectsList) : <p>{firstName} have no Projects yet.</p>

    let socialsTitle = socialsList.length > 0 ? <span className="socials__title">Contact me:</span> : <span className="socials__title">{firstName} have no contacts.</span>

    let profileLocation = `${city}, ${country}`
    let profileRoles = roles.join(', ')

    const currentUserProfile = currentUser.userId === userId
    let followButton = currentUserProfile ? null : <Button subClass={'btn_follow'} onClick={followToggle} data={user.userId} text={getFollowState(currentUser, user)} />

    return (
        <>
            <div className="container">
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">profile.page</div>
                    </div>

                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__contacts">
                                <img className="profile-picture" src={profilePicture} alt="profile" />
                                <div className="profile__socials">
                                    {followButton}
                                    {socialsTitle}
                                    <div className="socials__list">
                                        {socialsList}
                                    </div>
                                </div>
                            </div>
                            <div className="profile__info">
                                <p className="profile__info_name">{firstName} {lastName}</p>
                                <p className="profile__info_sity">{profileLocation}</p>
                                <p className="profile__info_role">{profileRoles}</p>
                                <div className="skills-list">
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
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <p className="description_text">{bio}</p>
                            </div>
                            <div className="profile__projects">
                                <h3 className="projects__title">Projects List</h3>
                                <div className="projects__list">
                                    {projectListContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile