import React from 'react'
import ProjectIcon from '../../../img/project.svg'


const ProjectCardSmall = ({ title, status }) => {
    return (
        <div className="project__card_small card">
            <div className="card__header card__header_small">project.item</div>
            <div className="card__content project-content_small">
                <img className="project__icon" src={ProjectIcon} alt="profile" />
                <div className="project__info project__info_small">
                    <span className="project-info__title_small">{title}</span>
                    <span className="project-info__status_small">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSmall
