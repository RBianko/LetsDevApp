/* eslint-disable react-hooks/exhaustive-deps */
import './app.css';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { useRoutes } from './routes'

import { setUser } from '../../redux/modules/user/actions'
import { updateUsers } from './../../redux/modules/users/actions';

const App = ({ user, setUser, updateUsers }) => {

    // const { token, userId, login, logout } = useAuth()

    // useEffect(() => {
    //     setUser({ token, userId, login, logout })
    // }, [userId, token])

    useEffect(() => {
        updateUsers(user)
    }, [user])

    const routes = useRoutes(user.isLogedIn, user.userId)

    return routes
}

export default connect(({ user }) => ({ user }), { setUser, updateUsers })(App)