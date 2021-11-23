/* eslint-disable react-hooks/exhaustive-deps */
import './app.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { useRoutes } from './routes'

import { setUser } from '../../redux/modules/user/actions'
import { getUser, updateUsers } from './../../redux/modules/users/actions';

const App = () => {
    const { token, userId, login, logout } = useAuth()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId && token) {
            dispatch(setUser({ token, userId, login, logout }))
        }
    }, [userId, token])

    useEffect(() => {
        if (userId) {
            dispatch(getUser(userId))
        }
    }, [userId])

    // useEffect(() => {
    //     dispatch(updateUsers(user))
    // }, [])

    const routes = useRoutes(user.isLogedIn, user.userId)

    return routes
}

export default App