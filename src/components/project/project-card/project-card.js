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
        devs,
        needList
    } = props.project

    const skillsList = skills.map(skill =>
        <SkillIcon
            key={skill}
            skill={skill} />
    )

    const devsList = devs.map(dev =>
        <ProfileCard
            key={dev.userId}
            dev={dev}
        />
    )

    let needListString = needList.join(', ')

    return (
        <div className="project__card card">
            <div className="card__header">project.info</div>
            <div className="card__content project-content">
                <div className="project-content__header">
                    <div className="project__info">
                        <span className="project-info__title">{title}</span>
                        <span className="project-info__status">{status}</span>
                    </div>
                    <img className="project__picture" src={projectPicture} alt="project" />
                    <div className="project__info">
                        <div className="skills-list skills_project">
                            {skillsList}
                        </div>
                    </div>
                </div>
                <div className="project-content_body">
                    <div className="need-list">
                        <h3 className="need-list__title">We need</h3>
                        <span className="need-list__roles">
                            {needListString}
                        </span>
                    </div>
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
        </div>
    )
}

export default ProjectCard
