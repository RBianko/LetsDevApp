import React, { useState } from 'react'
import './roles.css'

import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'
import { PropTypes } from 'prop-types';

const RolesForm = ({ roles, setRoles }) => {

    let [rolesList, setRolesList] = useState([])
    let [counter, setCounter] = useState(0)
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedRole) => {
        if (selectedRole) {
            let newRole = rolesList.some(role => role === selectedRole)
            if (!newRole) {
                setRolesList([...rolesList, selectedRole])
            }
        }
    }

    let roleSelector = () => <RoleSelector key={`${counter}`} roles={roles} selectRole={onSelectHandler} />
    let [selectList, setSelectList] = useState([roleSelector()])

    const addClickHandler = () => {
        setCounter(++counter)
        setSelectList([...selectList, roleSelector()])
    }

    const submitClickHandler = () => {
        setRoles(rolesList)
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
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
