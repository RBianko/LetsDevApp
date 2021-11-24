import React from 'react'
import './project-card.css'

import { ProjectsPropTypes } from './../../../redux/modules/projects/prop-types';
import CardHeader from './../../style-components/card-header';
import { useSkills } from './../../../hooks/skills.hook';

const ProjectCard = ({ project }) => {
    const {
        _id,
        title,
        projectPicture,
        status,
        description,
        skills,
        needList
    } = project

    const { global, other } = useSkills()
    const globalSkillsList = global(skills)
    const otherSkillsList = other(skills)

    let noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>No selected skills</p> : null
    let otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null

    const needListString = needList.join(', ')
    const needListContent = needList.length > 0
        ? <div className="need-list">
            <h3 className="need-list__title">We need</h3>
            <span className="need-list__roles">
                {needListString}
            </span>
        </div>
        : null

    return (
        <>
            <div className="project__card card">
                <CardHeader id={_id} title={'project.info'} path={'project'} />
                <div className="card__content project-content">
                    <div className="project-content__header">
                        <div className="project__info">
                            <img className="project__picture" src={projectPicture} alt="project" />
                        </div>
                        <div className="project__info">
                            <span className="project-info__title">{title}</span>
                            <span className="project-info__status">{status}</span>
                            <div className="skills-list skills_project">
                                {noSkillsString}
                                <div className="skills-grid">
                                    {globalSkillsList}
                                </div>
                                <div className="skills-other">
                                    {otherSkillsTitle}
                                    <div className="skills-grid">
                                        {otherSkillsList}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-content_body">
                        {needListContent}
                        <div className="project__description">
                            <h3 className="description__title">Description</h3>
                            <p className="description__text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ProjectCard.propTypes = {
    project: ProjectsPropTypes.isRequired,
}

export default ProjectCard