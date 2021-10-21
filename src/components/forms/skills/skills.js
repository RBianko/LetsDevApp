import React, { useState } from 'react'
import './skills.css'

import CloseIcon from '../../../img/xmark.svg'
import SkillIcon from '../../style-components/skills-icon/skill-icon'

const SkillsForm = ({ skills, setSkills }) => {

    const [skillsList, setSkillsList] = useState([])

    const onSelectHandler = (skill) => {
        if (!skillsList.some(sk => sk === skill)) {
            setSkillsList([...skillsList, skill])
        }
    }

    const skillsGrid = skills.map(skill =>
        <label className="modal-skill" type="checkbox" id={skill}>
            <SkillIcon key={skill} skill={skill} onSelectHandler={onSelectHandler} />
        </label>
    )

    const submitClickHandler = () => {
        setSkills(skillsList)
    }

    const clearClickHandler = () => {
        setSkillsList([])
    }

    return (
        <>
            <input id="modal-toggle_skills" type="checkbox" />
            <div className="modal-backdrop" htmlFor="modal-toggle_skills" />
            <div className="modal-content">
                <label className="modal-close-btn" htmlFor="modal-toggle_skills">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>
                <div className="modal-content__body">
                    <h3 className="modal-title">Technical Skills</h3>
                    <div className="modal__list">
                        {skillsGrid}
                    </div>
                    <div className="modal__list-selected">
                        {skillsList.join(', ')}
                    </div>
                    <div className="modal__buttons">
                        <button className="modal-btn btn" onClick={submitClickHandler}>Submit</button>
                        <button className="modal-btn btn" onClick={clearClickHandler}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsForm
