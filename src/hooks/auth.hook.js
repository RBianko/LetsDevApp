/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'
export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [_id, setUserId] = useState(null)

    const login = useCallback((jwt = null, id = null) => {
        setToken(jwt)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify({
            _id: id, token: jwt
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data._id)
        }
    }, [login])

    return { token, _id, login, logout }
}