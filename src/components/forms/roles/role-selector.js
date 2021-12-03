/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

const RoleSelector = ({ role, roles, selectRole, id }) => {
    const [newRole, setNewRole] = useState(role)

    const rolesOptions = roles.map((role, id) => (
        <option key={role + id} value={role}>{role}</option>
    ))

    useEffect(() => selectRole(newRole, id), [newRole])

    return (
        <div className="settings__item">
            <label className="text-label">Role</label>
            <select
                className="text-input"
                id="role"
                type="text"
                placeholder="Role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}>
                <option hidden defaultValue={''}>Select One...</option>
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
