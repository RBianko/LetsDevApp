import React from 'react'
import './profile.css'
import SkillIcon from '../style-components/skills-icon'
import ProjectCard from '../project/project-card'
import { connect } from 'react-redux'

const Profile = ({ user }) => {

    const skillsList = user.skills.map(skill =>
        <SkillIcon key={skill} skill={skill} />
    )

    const projectsList = user.projects.map(project =>
        <ProjectCard
            key={project.title}
            title={project.title}
            status={project.status}
        />
    )

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
                                <p className="profile__info_name">{user.firstName} {user.lastName}</p>
                                <p className="profile__info_sity">{user.city}, {user.country}</p>
                                <p className="profile__info_role">{user.role}</p>
                                <div className="profile__skills">
                                    {skillsList}
                                </div>
                            </div>
                        </div>
                        <div className="profile-content_body">
                            <div className="profile__description">
                                <h3 className="description_title">Bio</h3>
                                <p className="description_text">{user.bio}</p>
                            </div>
                            <div className="profile__projects">
                                <h3 className="projects_title">Projects List</h3>
                                <div className="projects__list">
                                    {projectsList}
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