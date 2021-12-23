import React from 'react'
import { PropTypes } from 'prop-types';
import CardHeader from './../../style-components/card-header';

import locale from '../../../locale/en'


const ProjectCardSmall = ({ project }) => {
    const { _id, title, status, picture } = project

    return (
        <div className="project__card_small card">
            <CardHeader id={_id} title={locale.translation.header.projectItem} path={'project'} size={'medium'} />
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
    project: PropTypes.object.isRequired,
}

export default ProjectCardSmall
