/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './roles.css'

import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'
import { PropTypes } from 'prop-types';

const RolesForm = ({ stack = null, roles: currentRoles = [], setRoles, multiply = true }) => {
    const { roles } = useSelector(({ roles }) => ({ roles }))

    let [rolesList, setRolesList] = useState(currentRoles)
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedRole, id) => {
        let newRolesList = [...rolesList]
        if (selectedRole) {
            if (id < rolesList.length) {
                newRolesList.splice(id, 1, selectedRole)
            } else {
                newRolesList.push(selectedRole)
            }
            setRolesList([...newRolesList])
        }
    }

    let roleSelector = (role, id) =>
        <RoleSelector key={`${id}-${role}`} role={role} roles={stack || roles} id={id} selectRole={onSelectHandler} />

    const initialSelectors = rolesList.map((role, id) => roleSelector(role, id))

    let [selectList, setSelectList] = useState(initialSelectors)
    let [counter, setCounter] = useState(initialSelectors.length)

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

    useEffect(() => { if (!multiply) setSelectList([roleSelector('')]) }, [stack])

    return (
        <>
            <input id="modal__toggle_roles" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
            <div className="modal-backdrop_roles" htmlFor="modal__toggle_roles" onClick={() => setIsChecked(!isChecked)} />
            <div className="modal-content_roles">
                <label className="modal-close-btn" htmlFor="modal__toggle_roles">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>
                <div className="modal-content__body">
                    <h3 className="modal-title">Roles Selection</h3>
                    <div className="modal__select">
                        {selectList}
                        {multiply ? <button className="btn modal-btn" onClick={addClickHandler}>Add more</button> : null}
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

RolesForm.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string),
    setRoles: PropTypes.func.isRequired,
}

export default RolesForm
