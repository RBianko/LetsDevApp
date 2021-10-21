import React from 'react'
import './profile.css'
import SkillIcon from '../style-components/skills-icon'
import ProjectCardSmall from '../project/project-card/project-card-small'
import { connect } from 'react-redux'

const Profile = ({ user }) => {

    const skillsList = user.skills.map(skill =>
        <SkillIcon key={skill} skill={skill} />
    )

    const projectsList = user.projects.map(project =>
        <ProjectCardSmall
            key={project.id}
            title={project.title}
            status={project.status}
        />
    )

    let projectListContent = projectsList.length > 0 ? projectsList : <p>You have no Projects</p>
    let skillsListContent = skillsList.length > 0 ? skillsList : <p>You have no selected skills</p>


    let profileFirstName = user.firstName || "New"
    let profileLastName = user.lastName || "User"
    let profileCity = (user.city || "City") + ","
    let profileCountry = user.country || "Country"
    let profileRole = user.role
    let profileBio = user.bio || "Something about you."



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
                                <img className="profile-icon" src={user.profilePicture} alt="profile" />
                            </div>
                            <div className="profile__info">
                                <p className="profile__info_name">{profileFirstName} {profileLastName}</p>
                                <p className="profile__info_sity">{profileCity} {profileCountry}</p>
                                <p className="profile__info_role">{profileRole}</p>
                                <div className="skills-list">
                                    {skillsListContent}
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

export default connect(({ user }) => ({ user }))(Profile)