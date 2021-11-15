import React from 'react'
import { PropTypes } from 'prop-types';
import CardHeader from './../../style-components/card-header';



const ProjectCardSmall = ({ project }) => {
    const { id, title, status, projectPicture } = project

    return (
        <div className="project__card_small card">
            <CardHeader id={id} title={'project.item'} path={'project'} size={'medium'} />
            <div className="card__content project-content_small">
                <img className="project__icon" src={projectPicture} alt="profile" />
                <div className="project__info project__info_small">
                    <span className="project-info__title_small">{title}</span>
                    <span className="project-info__status_small">{status}</span>
                </div>
            </div>
        </div>
    )
}

ProjectCardSmall.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectCardSmall
