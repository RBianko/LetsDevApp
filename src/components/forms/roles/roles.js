/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { editElement, addNewElement } from './../../../helpers/array-helpers';

import Button from './../../style-components/button';

import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'
import { PropTypes } from 'prop-types';

import locale from '../../../locale/en'

import './roles.css'


const RolesForm = ({ stack = null, roles: currentRoles = [], setRoles, multiply = true }) => {
    const { roles } = useSelector(({ roles }) => ({ roles }))
    const { text, button } = locale.translation

    const [rolesList, setRolesList] = useState(currentRoles)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => { if (!multiply) setSelectList([roleSelector('')]) }, [stack])

    const onSelectHandler = (selectedRole, id) => {
        if (selectedRole) {
            const isEditing = id < rolesList.length
            isEditing
                ? setRolesList(editElement(selectedRole, id, rolesList))
                : setRolesList(addNewElement(selectedRole, rolesList))
        }
    }

    const roleSelector = (role, id) =>
        <RoleSelector key={`${id}-${role}`} role={role} roles={stack || roles} id={id} selectRole={onSelectHandler} />

    const initialSelectors = rolesList.map((role, id) => roleSelector(role, id))

    const [selectList, setSelectList] = useState(initialSelectors)
    const [counter, setCounter] = useState(initialSelectors.length)

    const addClickHandler = () => {
        setSelectList([...selectList, roleSelector('', counter)])
        setCounter((counter) => counter + 1)
    }

    const submitClickHandler = () => {
        if (rolesList.length > 0) {
            setRoles(rolesList)
        }
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setCounter((counter) => counter = 1)
        setRolesList([])
        setSelectList([roleSelector('', 0)])
    }

    return (
        <>
            <input id="modal__toggle_roles" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
            <div className="modal-backdrop_roles" htmlFor="modal__toggle_roles" onClick={() => setIsChecked(!isChecked)} />
            <div className="modal-content_roles">
                <label className="modal-close-btn" htmlFor="modal__toggle_roles">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>
                <div className="modal-content__body">
                    <h3 className="modal-title">{text.roleSelection}</h3>
                    <div className="modal__select">
                        {selectList}
                        {multiply
                            ? <Button subClass="modal-btn" onClick={addClickHandler} text={button.addMore} />
                            : null}
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

RolesForm.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string),
    setRoles: PropTypes.func.isRequired,
}

export default RolesForm
