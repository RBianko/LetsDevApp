import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

const RoleSelector = ({ roles, selectRole }) => {
    const rolesOptions = roles.map(role => (
        <option key={role} value={role}>{role}</option>
    ))

    const [role, setRole] = useState('')

    const roleOption = React.createRef()

    const onRoleChange = () => {
        setRole(roleOption.current.value)
    }

    useEffect(() => {
        selectRole(role)
    }, [role, selectRole])

    return (
        <div className="settings__item">
            <label className="text-label">Role</label>
            <select
                className="text-input"
                id="role"
                type="text"
                placeholder="Role"
                value={role}
                ref={roleOption}
                onChange={() => onRoleChange()}>
                <option hidden value={''}>Select One...</option>
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
