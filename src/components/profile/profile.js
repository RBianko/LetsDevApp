import React from 'react'
import './profile.css'
import SkillIcon from '../style-components/skills-icon'
import ProjectCardSmall from '../project/project-card/project-card-small'
import { connect } from 'react-redux'
import OtherSkill from '../style-components/skills-icon/other-skill'
import SocialLink from './../style-components/social-link';

const Profile = ({ user, skills: skillsGlobalStack }) => {
    const {
        firstName = "New",
        lastName = "User",
        city = "City",
        country = "Country",
        bio = "Something about me.",
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
            socialsList.push(<SocialLink link={socials[key]} media={key} />)
        }
    }

    const projectsList = projects.map((project, id) =>
        <ProjectCardSmall
            key={`${project.id}-${id}`}
            title={project.title}
            status={project.status}
            picture={project.picture}
        />
    )

    let projectListContent = projectsList.length > 0 ? projectsList : <p>You have no Projects</p>

    let noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>You have no selected skills</p> : null
    let otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null
    let socialsTitle = socialsList.length > 0 ? <span className="socials__title">Contact me:</span> : <span className="socials__title">You have no contacts.</span>

    let globalSkillsListContent = globalSkillsList.length > 0 ? globalSkillsList : null
    let otherSkillsListContent = otherSkillsList.length > 0 ? otherSkillsList : null

    let profileLocation = `${city}, ${country}`
    let profileRoles = roles.join(', ')

    return (
        <>
            <div className="container">
                <div className="profile__card card">
                    <div className="card__header">
                        profile.info
                    </div>
                    <div className="card__content profile-content">
                        <div className="profile-content_header">
                            <div className="profile__picture">
                                <img className="profile-icon" src={profilePicture} alt="profile" />
                                <div className="profile__socials">
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

export default connect(({ user, skills }) => ({ user, skills }))(Profile)