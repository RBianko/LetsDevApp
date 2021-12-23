/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';
import locale from '../../../locale/en'

const RoleSelector = ({ role, roles, selectRole, id }) => {
    const [newRole, setNewRole] = useState(role)
    useEffect(() => selectRole(newRole, id), [newRole])
    const { placeholder } = locale.translation

    const rolesOptions = roles.map((role, id) => (
        <option key={role + id} value={role}>{role}</option>
    ))

    return (
        <div className="settings__item">
            <label className="text-label">{placeholder.role}</label>
            <select
                className="text-input"
                id="role"
                type="text"
                placeholder={placeholder.role}
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}>
                <option hidden defaultValue={''}>{placeholder.selectOne}</option>
                {rolesOptions}
            </select>
        </div>
    )
}

RoleSelector.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectRole: PropTypes.func.isRequired,
}

export default RoleSelector
