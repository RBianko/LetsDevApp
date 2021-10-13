import React from 'react'
import './project-card.css'

import SkillIcon from '../../style-components/skills-icon'
import ProfileCard from '../../profile/profile-card'


const ProjectCard = (props) => {
    const {
        title,
        projectPicture,
        status,
        description,
        skills,
        devsId,
        needList
    } = props.project

    const skillsList = skills.map(skill =>
        <SkillIcon key={skill} skill={skill} />
    )

    const devsList = devsId.map(dev =>
        <ProfileCard
            title={'Dev Name'}
        />
    )

    return (
        <div className="project__card card">
            <div className="card__header">project.info</div>
            <div className="card__content project-content">
                <div className="project-content__header">
                    <div className="project__info">
                        <span className="project-info__title">{title}</span>
                        <span className="project-info__status">{status}</span>
                    </div>
                    <img className="project__picture" src={projectPicture} alt="profile" />
                    <div className="project__info">
                        <span>STACK:</span>
                        <div className="skills-list skills_project">
                            {skillsList}
                        </div>
                    </div>
                </div>
                <div className="profile-content_body">
                    <div className="profile__description">
                        <h3 className="description_title">Description</h3>
                        <p className="description_text">{description}</p>
                    </div>
                    <div className="profile__projects">
                        <h3 className="projects_title">Devs List</h3>
                        <div className="projects__list">
                            {devsList}
                        </div>
                        <span className="need-list__title">NEED:</span>
                        <div className="need-lis">
                            {needList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
