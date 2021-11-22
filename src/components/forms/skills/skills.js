import React, { useState } from 'react'
import './skills.css'

import CloseIcon from '../../../img/xmark.svg'
import SkillSelector from './skill-selector'
import { PropTypes } from 'prop-types';

const SkillsForm = ({ skills, setSkills }) => {

    let [skillsList, setSkillsList] = useState([])
    let [counter, setCounter] = useState(0)
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedSkill) => {
        if (selectedSkill) {
            let newSkill = !skillsList.some(skill => skill === selectedSkill)
            if (newSkill) {
                setSkillsList([...skillsList, selectedSkill])
            }
        }
    }

    let skillSelector = () => <SkillSelector key={counter} skills={skills} selectSkill={onSelectHandler} />
    let [selectList, setSelectList] = useState([skillSelector()])

    const addClickHandler = () => {
        setCounter(++counter)
        setSelectList([...selectList, skillSelector()])
    }

    const submitClickHandler = () => {
        setSkills(skillsList)
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setSkillsList([])
        setCounter(0)
        setSelectList([skillSelector()])
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
