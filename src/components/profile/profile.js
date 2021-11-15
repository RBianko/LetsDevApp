import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom';
import './profile.css'

import PropTypes from 'prop-types';
import { UserPropTypes } from '../../redux/modules/user/prop-types';

import SkillIcon from '../style-components/skills-icon'
import ProjectCardSmall from '../project/project-card/project-card-small'
import OtherSkill from '../style-components/skills-icon/other-skill'
import SocialLink from './../style-components/social-link';
import Button from './../style-components/button';
import { followToggle } from './../../redux/modules/user/actions';
import getFollowState from '../../helpers/get-follow-state'

const Profile = ({ user: currentUser, users, skills: skillsGlobalStack, projects: projectsList, followToggle }) => {
    let { state } = useLocation()
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

    const globalSkills = skills.filter(skill =>
        skillsGlobalStack.some(stack => stack === skill))

    const otherSkills = skills.filter(skill =>
        !skillsGlobalStack.some(stack => stack === skill))

    const globalSkillsList = globalSkills.map(skill =>
        <SkillIcon key={skill} skill={skill} />)

    const otherSkillsList = otherSkills.map(skill =>
        <OtherSkill key={skill} skill={skill} />)

    let socialsList = []
    for (let key in socials) {
        if (socials[key]) {
            socialsList.push(<SocialLink key={`${key}`} link={socials[key]} media={key} />)
        }
    }

    const userProjects = projects.map(id =>
        projectsList.find(poroject => poroject.id === id)
    )

    const userProjectsList = userProjects.map(project =>
        <ProjectCardSmall
            key={project.id}
            project={project}
        />
    )

    let projectListContent = userProjectsList.length > 0 ? userProjectsList : <p>{firstName} have no Projects yet.</p>

    let noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>{firstName} no selected skills</p> : null
    let otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null
    let socialsTitle = socialsList.length > 0 ? <span className="socials__title">Contact me:</span> : <span className="socials__title">{firstName} have no contacts.</span>

    let globalSkillsListContent = globalSkillsList.length > 0 ? globalSkillsList : null
    let otherSkillsListContent = otherSkillsList.length > 0 ? otherSkillsList : null

    let profileLocation = `${city}, ${country}`
    let profileRoles = roles.join(', ')

    const currentUserProfile = currentUser.userId === userId
    let followButton = currentUserProfile ? null : <Button subClass={'btn_follow'} onClick={followToggle} data={user.userId} text={getFollowState(currentUser, user)} />

    return (
        <>
            <div className="container">
                <div className="profile__card card">
                    <div className="card__header">
                        <div className="header__title">profile.info</div>
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
                                        {globalSkillsListContent}
                                    </div>
                                    <div className="skills-other">
                                        {otherSkillsTitle}
                                        <div className="skills-grid">
                                            {otherSkillsListContent}
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

Profile.propTypes = {
    user: UserPropTypes,
    skills: PropTypes.arrayOf(PropTypes.string)
}

export default connect(
    ({ user, users, skills, projects }) => ({ user, users: users.list, skills, projects: projects.list }),
    { followToggle }
)(Profile)