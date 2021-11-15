import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './roles.css'

import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'
import { PropTypes } from 'prop-types';

const RolesForm = ({ stack = null, roles: currentRoles = [], setRoles }) => {
    const { roles } = useSelector(({ roles }) => ({ roles }))

    let [rolesList, setRolesList] = useState(currentRoles)
    let [counter, setCounter] = useState(0)
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

    let roleSelector = (role) =>
        <RoleSelector key={`${counter}-${role}`} role={role} roles={stack || roles} id={counter} selectRole={onSelectHandler} />


    const initialSelectors = rolesList.map(role => roleSelector(role))

    let [selectList, setSelectList] = useState(initialSelectors)
    useEffect(() => setCounter((counter) => counter + 1), [selectList])

    const addClickHandler = () => {
        setSelectList([...selectList, roleSelector('')])
    }


    const submitClickHandler = () => {
        setRoles(rolesList)
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setCounter(-1)
        setRolesList([])
        setSelectList([])
    }

    return (
        <>
            <input id="modal-toggle_roles" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
            <div className="modal-backdrop_roles" htmlFor="modal-toggle_roles" onClick={() => setIsChecked(!isChecked)} />
            <div className="modal-content_roles">
                <label className="modal-close-btn" htmlFor="modal-toggle_roles">
                    <img className="close-btn_icon" src={CloseIcon} alt="close" />
                </label>
                <div className="modal-content__body">
                    <h3 className="modal-title">Roles Selection</h3>
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

RolesForm.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    setRoles: PropTypes.func.isRequired,
}

export default RolesForm
