import React from 'react'
import './project-card.css'

import { ProjectsPropTypes } from './../../../redux/modules/projects/prop-types';
import CardHeader from './../../style-components/card-header';
import { useSkills } from './../../../hooks/skills.hook';

import locale from '../../../locale/en'


const ProjectCard = ({ project }) => {
    const {
        _id,
        title,
        picture,
        status,
        description,
        skills,
        needList
    } = project

    const { global, other } = useSkills()
    const globalSkillsList = global(skills)
    const otherSkillsList = other(skills)
    const { placeholder, text, header } = locale.translation

    const noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>{text.noSelectedSkills}</p> : null
    const otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">{text.otherTechnologies}</span> : null

    const needListString = needList.join(', ')
    const needListContent = needList.length > 0
        ? <div className="need-list">
            <h3 className="need-list__title">{text.weNeed}</h3>
            <span className="need-list__roles">
                {needListString}
            </span>
        </div>
        : null

    const descriptionContent = description ? description : <span>{text.noDescription}</span>

    return (
        <>
            <div className="project__card card">
                <CardHeader id={_id} title={header.projectInfo} path={'project'} />
                <div className="card__content project-content">
                    <div className="project-content__header">
                        <div className="project__info">
                            <img className="project__picture" src={picture} alt="project" />
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
                            <h3 className="description__title">{placeholder.description}</h3>
                            <p className="description__text">{descriptionContent}</p>
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