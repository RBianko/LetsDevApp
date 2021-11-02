import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

const SkillSelector = ({ skills, selectSkill, counter }) => {
    const skillsOptions = skills.map(skill => (
        <option key={skill} value={skill}>{skill}</option>
    ))

    const [skill, setSkill] = useState(null)

    const skillOption = React.createRef()

    const onSkillChange = () => {
        setSkill(skillOption.current.value)
    }

    useEffect(() => {
        selectSkill(skill)
    }, [skill, selectSkill])

    return (
        <div className="settings__item">
            <label className="text-label">Skill #{counter + 1}</label>
            <input
                autoComplete="on"
                className="text-input"
                id="skill"
                type="text"
                placeholder="Skill"
                list="skills"
                value={skill || ''}
                ref={skillOption}
                onChange={() => onSkillChange()} />
            <datalist id="skills" >
                {skillsOptions}
            </datalist>
        </div >
    )
}

SkillSelector.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectSkill: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
}

export default SkillSelector
