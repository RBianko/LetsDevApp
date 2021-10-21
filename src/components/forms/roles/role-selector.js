import React, { useState, useEffect } from 'react'

const RoleSelector = ({ roles, counter, selectRole }) => {
    const rolesOptions = roles.map(role => (
        <option key={role} value={role}>{role}</option>
    ))

    const [role, setRole] = useState(null)

    const roleOption = React.createRef()

    const onRoleChange = () => {
        setRole(roleOption.current.value)
    }

    useEffect(() => {
        selectRole(role)
    }, [role])

    return (
        <div className="settings__item">
            <label className="text-label" htmlFor="status">Role #{counter}</label>
            <select
                className="text-input"
                id="role"
                type="text"
                placeholder="Role"
                value={role}
                ref={roleOption}
                onChange={() => onRoleChange()}>
                <option hidden>Select one...</option>
                {rolesOptions}
            </select>
        </div>
    )
}

export default RoleSelector
