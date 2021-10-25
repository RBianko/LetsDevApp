import React from 'react'
import './profile.css'
import SkillIcon from '../style-components/skills-icon'
import ProjectCardSmall from '../project/project-card/project-card-small'
import { connect } from 'react-redux'

const Profile = ({ user, skills: skillsGlobalStack }) => {
    const {
        firstName,
        lastName,
        city,
        country,
        roles,
        bio,
        projects,
        skills,
        profilePicture
    } = user

    const globalSkills = skills.filter(skill =>
        skillsGlobalStack.some(stack => stack === skill))

    const otherSkills = skills.filter(skill =>
        !skillsGlobalStack.some(stack => stack === skill))

    const skillsList = globalSkills.map(skill =>
        <SkillIcon key={skill} skill={skill} />
    )

    const otherSkillsList = otherSkills.map(skill =>
        <figure key={skill} className="skill_wrapper">
            <span>{skill}</span>
        </figure>
    )

    const projectsList = projects.map((project, id) =>
        <ProjectCardSmall
            key={id}
            title={project.title}
            status={project.status}
        />
    )

    let projectListContent = projectsList.length > 0 ? projectsList : <p>You have no Projects</p>
    let skillsListContent = skillsList.length > 0 ? skillsList : <p>You have no selected skills</p>
    let otherSkillsListContent = otherSkillsList.length > 0 ? otherSkillsList : null

    let profileFirstName = firstName || "New"
    let profileLastName = lastName || "User"
    let profileCity = (city || "City") + ", "
    let profileCountry = country || "Country"
    let profileRoles = roles.join(', ')
    let profileBio = bio || "Something about you."



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
                            </div>
                            <div className="profile__info">
                                <p className="profile__info_name">{profileFirstName} {profileLastName}</p>
                                <p className="profile__info_sity">{profileCity} {profileCountry}</p>
                                <p className="profile__info_role">{profileRoles}</p>
                                <div className="skills-list">
                                    <div className="skills-grid">
                                        {skillsListContent}
                                    </div>
                                    <div className="skills-other">
                                        <span>Other Technologies:</span>
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
                                <p className="description_text">{profileBio}</p>
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