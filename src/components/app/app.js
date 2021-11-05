/* eslint-disable react-hooks/exhaustive-deps */
import './app.css';
import { connect } from 'react-redux'
import { useMemo, useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { useRoutes } from './routes'

import { setUser } from '../../redux/modules/user/actions'
import { updateUsers } from './../../redux/modules/users/actions';

const App = ({ user, setUser, updateUsers }) => {

    const { token, userId, login, logout } = useAuth()
    useMemo(() => {
        return setUser({ token, userId, login, logout })
    }, [userId, token])

    useEffect(() => {
        updateUsers(user)
    }, [user, token, userId])

    const routes = useRoutes(user.isLogedIn)

    return routes
}

export default connect(({ user }) => ({ user }), { setUser, updateUsers })(App)