import React, { useState, useEffect } from 'react'
import './skills.css'

import CloseIcon from '../../../img/xmark.svg'
import SkillSelector from './skill-selector'
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const SkillsForm = ({ skills: currentSkills = [], setSkills }) => {
    const skills = useSelector(state => state.skills)

    let [skillsList, setSkillsList] = useState(currentSkills)
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedSkill, id) => {
        let newSkillsList = [...skillsList]
        if (selectedSkill) {
            if (id < skillsList.length) {
                newSkillsList.splice(id, 1, selectedSkill)
            } else {
                newSkillsList.push(selectedSkill)
            }
            setSkillsList([...newSkillsList])
        }
    }

    let skillSelector = (skill, id) =>
        <SkillSelector key={`${id}-${skill}`} skill={skill} skills={skills} id={id} selectSkill={onSelectHandler} />

    const initialSelectors = skillsList.map((skill, id) => skillSelector(skill, id))

    let [selectList, setSelectList] = useState(initialSelectors)
    let [counter, setCounter] = useState(initialSelectors.length)

    const addClickHandler = () => {
        setSelectList([...selectList, skillSelector('', counter)])
        setCounter((counter) => counter + 1)
    }

    const submitClickHandler = () => {
        if (skillsList.length > 0) {
            setSkills(skillsList)
        }
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setCounter((counter) => counter = 1)
        setSkillsList([])
        setSelectList([skillSelector('', 0)])
    }

    return (
        <>
            <input id="modal__toggle_skills" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
            <div className="modal-backdrop_skills" htmlFor="modal__toggle_skills" onClick={() => setIsChecked(!isChecked)} />
            <div className="modal-content_skills">
                <label className="modal-close-btn" htmlFor="modal__toggle_skills">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>
                <div className="modal-content__body">
                    <h3 className="modal-title">Skills Selection</h3>
                    <div className="modal__select">
                        {selectList}
                        <button className="btn modal-btn" onClick={addClickHandler}>Add more</button>
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

SkillsForm.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSkills: PropTypes.func.isRequired,
}


export default SkillsForm
