import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './roles.css'

import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'
import { PropTypes } from 'prop-types';

const RolesForm = ({ roles: currentRoles, setRoles }) => {
    const { roles } = useSelector(({ roles }) => ({ roles }))

    let [rolesList, setRolesList] = useState(currentRoles)
    let [counter, setCounter] = useState(1)
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedRole, id) => {
        if (selectedRole) {
            let duplicate = rolesList.some(role => role === selectedRole)
            if (!duplicate) {
                if (id > rolesList.length) {
                    rolesList.splice(id, 1, selectedRole)
                }
                const newRolesList = [...rolesList, selectedRole]
                setRolesList(newRolesList)
            }
        }
    }

    let roleSelector = (role) => {
        <RoleSelector key={`${counter}-${role}`} role={role} roles={roles} id={counter - 1} selectRole={onSelectHandler} />
        setCounter(counter++)
    }

    const initialSelectors = rolesList.map(role => roleSelector(role))

    let [selectList, setSelectList] = useState(initialSelectors)

    const addClickHandler = () => {
        setCounter(counter++)
        setSelectList([...selectList, roleSelector()])
    }

    const submitClickHandler = () => {
        setRoles(rolesList)
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setCounter(() => 1)
        setRolesList([])
        setSelectList([roleSelector()])
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
