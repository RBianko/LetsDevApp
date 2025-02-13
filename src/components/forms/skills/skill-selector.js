/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import locale from '../../../locale/en'


const SkillSelector = ({ skill, skills, selectSkill, id }) => {
    const [newSkill, setNewSkill] = useState(skill)
    useEffect(() => selectSkill(newSkill, id), [newSkill])
    const { placeholder } = locale.translation

    const skillsOptions = skills.map(skill => (
        <option key={skill} value={skill}>{skill}</option>
    ))

    return (
        <div className="settings__item">
            <label className="text-label">{placeholder.skill}</label>
            <input
                autoComplete="on"
                className="text-input"
                id="skill"
                type="text"
                placeholder={placeholder.skill}
                list="skills"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)} />
            <datalist id="skills" >
                {skillsOptions}
            </datalist>
        </div>
    )
}

SkillSelector.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectSkill: PropTypes.func.isRequired
}

export default SkillSelector
