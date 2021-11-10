import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

const RoleSelector = ({ role, roles, selectRole, id }) => {
    const rolesOptions = roles.map((role, id) => (
        <option key={role + id} value={role}>{role}</option>
    ))

    const [newRole, setNewRole] = useState(role || 'select')

    const roleOption = React.createRef()

    const onRoleChange = () => {
        selectRole(roleOption.current.value, id)
    }

    setNewRole(role)

    return (
        <div className="settings__item">
            <label className="text-label">Role</label>
            <select
                className="text-input"
                id="role"
                type="text"
                placeholder="Role"
                value={newRole}
                ref={roleOption}
                onChange={() => onRoleChange()}>
                <option hidden>Select One...</option>
                {rolesOptions}
            </select>
        </div >
    )
}

RoleSelector.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectRole: PropTypes.func.isRequired,
}

export default RoleSelector
