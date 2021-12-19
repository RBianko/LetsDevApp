import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import SkillSelector from './skill-selector'
import Button from './../../style-components/button';

import locale from '../../../locale/en'

import CloseIcon from '../../../img/xmark.svg'
import './skills.css'

const SkillsForm = ({ skills: currentSkills = [], setSkills }) => {
    const skills = useSelector(state => state.skills)
    const { text, button } = locale.translation

    const [skillsList, setSkillsList] = useState(currentSkills)
    const [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedSkill, id) => {
        const newSkillsList = [...skillsList]
        if (selectedSkill) {
            if (id < skillsList.length) {
                newSkillsList.splice(id, 1, selectedSkill)
            } else {
                newSkillsList.push(selectedSkill)
            }
            setSkillsList([...newSkillsList])
        }
    }

    const skillSelector = (skill, id) =>
        <SkillSelector key={`${id}-${skill}`} skill={skill} skills={skills} id={id} selectSkill={onSelectHandler} />

    const initialSelectors = skillsList.map((skill, id) => skillSelector(skill, id))

    const [selectList, setSelectList] = useState(initialSelectors)
    const [counter, setCounter] = useState(initialSelectors.length)

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
                    <h3 className="modal-title">{text.skillSelection}</h3>
                    <div className="modal__select">
                        {selectList}
                        <Button subClass="modal-btn" onClick={addClickHandler} text={button.addMore} />
                    </div>
                    <div className="modal__buttons">
                        <Button subClass="modal-btn" onClick={submitClickHandler} text={button.submit} />
                        <Button subClass="modal-btn" onClick={clearClickHandler} text={button.clear} />
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
