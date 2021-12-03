/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

const SkillSelector = ({ skill, skills, selectSkill, id }) => {
    const [newSkill, setNewSkill] = useState(skill)

    const skillsOptions = skills.map(skill => (
        <option key={skill} value={skill}>{skill}</option>
    ))

    useEffect(() => selectSkill(newSkill, id), [newSkill])

    return (
        <div className="settings__item">
            <label className="text-label">Skill</label>
            <input
                autoComplete="on"
                className="text-input"
                id="skill"
                type="text"
                placeholder="Skill"
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
