import React from 'react'
import ProjectIcon from '../../../img/project.png'
import './project-card.css'


const ProjectCard = () => {
    return (
        <div className="project__card_small card">
            <div className="card__header card__header_small">project.item</div>
            <div className="card__content project-content_small">
                <img className="project__icon" src={ProjectIcon} alt="profile" />
                <div className="project__info">
                    <span className="project-info__title">Project Name</span>
                    <span className="project-info__status">status</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
