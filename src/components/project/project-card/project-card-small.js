import React from 'react'
import { PropTypes } from 'prop-types';


const ProjectCardSmall = ({ title, status, picture }) => {
    return (
        <div className="project__card_small card">
            <div className="card__header card__header_small">project.item</div>
            <div className="card__content project-content_small">
                <img className="project__icon" src={picture} alt="profile" />
                <div className="project__info project__info_small">
                    <span className="project-info__title_small">{title}</span>
                    <span className="project-info__status_small">{status}</span>
                </div>
            </div>
        </div>
    )
}

ProjectCardSmall.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    picture: PropTypes.string
}

export default ProjectCardSmall
