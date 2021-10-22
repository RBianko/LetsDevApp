import React, { useState } from 'react'
import './roles.css'
import CloseIcon from '../../../img/xmark.svg'
import RoleSelector from './role-selector'

const RolesForm = ({ roles, setRoles }) => {

    let [rolesList, setRolesList] = useState([])
    let [isChecked, setIsChecked] = useState(false)

    const onSelectHandler = (selectedRole) => {
        if (!rolesList.some(role => role === selectedRole)) {
            setRolesList([...rolesList, selectedRole])
        }
    }

    const roleSelector = <RoleSelector key={roles} roles={roles} selectRole={onSelectHandler} />
    let [selectList, setSelectList] = useState([roleSelector])

    const addClickHandler = () => {
        setSelectList([...selectList, roleSelector])
    }

    const submitClickHandler = () => {
        setRoles(rolesList)
        setIsChecked(!isChecked)
    }

    const clearClickHandler = () => {
        setRolesList([])
        setSelectList([roleSelector])
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

export default RolesForm
