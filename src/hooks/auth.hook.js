/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from 'react'
import { useHistory } from "react-router-dom"

const storageName = 'userData'
export const useAuth = () => {
    const history = useHistory()
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwt = null, id = null) => {
        setToken(jwt)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwt
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
        history.push('/')
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    return { token, userId, login, logout }
}