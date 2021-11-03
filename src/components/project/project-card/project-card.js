import React from 'react'
import './project-card.css'

import SkillIcon from '../../style-components/skills-icon'
import ProfileCard from '../../profile/profile-card'
import OtherSkill from './../../style-components/skills-icon/other-skill';
import { PropTypes } from 'prop-types';
import { ProjectsPropTypes } from './../../../redux/modules/projects/prop-types';

const ProjectCard = ({ project, skills: skillsGlobalStack }) => {
    const {
        title,
        picture,
        status,
        description,
        skills,
        devs,
        roles
    } = project

    const globalSkills = skills.filter(skill =>
        skillsGlobalStack.some(stack => stack === skill))

    const otherSkills = skills.filter(skill =>
        !skillsGlobalStack.some(stack => stack === skill))

    const globalSkillsList = globalSkills.map(skill =>
        <SkillIcon key={skill} skill={skill} />)

    const otherSkillsList = otherSkills.map(skill =>
        <OtherSkill key={skill} skill={skill} />)

    const devsList = devs.map(dev =>
        <ProfileCard
            key={dev.userId}
            user={dev}
        />
    )
    let noSkillsString = otherSkillsList.length === 0 && globalSkillsList.length === 0 ? <p>You have no selected skills</p> : null
    let otherSkillsTitle = otherSkillsList.length > 0 ? <span className="skills-other__title">Other Technologies:</span> : null

    let globalSkillsListContent = globalSkillsList.length > 0 ? globalSkillsList : null
    let otherSkillsListContent = otherSkillsList.length > 0 ? otherSkillsList : null

    const needListString = roles.join(', ')

    return (
        <div className="project__card card">
            <div className="card__header">project.info</div>
            <div className="card__content project-content">
                <div className="project-content__header">
                    <div className="project__info">
                        <span className="project-info__title">{title}</span>
                        <span className="project-info__status">{status}</span>
                    </div>
                    <img className="project__picture" src={picture} alt="project" />
                    <div className="project__info">
                        <div className="skills-list skills_project">
                            {noSkillsString}
                            <div className="skills-grid">
                                {globalSkillsListContent}
                            </div>
                            <div className="skills-other">
                                {otherSkillsTitle}
                                <div className="skills-grid">
                                    {otherSkillsListContent}
                                </div>
                            </div>
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

ProjectCard.propTypes = {
    project: ProjectsPropTypes,
    skills: PropTypes.arrayOf(PropTypes.string),

}

export default ProjectCard