/* eslint-disable react-hooks/exhaustive-deps */
import './app.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { useRoutes } from './routes'

import { setUser } from '../../redux/modules/user/actions'
import { getCurrentUser } from './../../redux/modules/user/actions';

const App = () => {
    const { token, _id, login, logout } = useAuth()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUser({ token, _id, login, logout }))
    }, [_id, token, dispatch])
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (_id) {
            dispatch(getCurrentUser(_id))
        }
    }, [_id])

    // useEffect(() => {
    //     dispatch(updateUsers(user))
    // }, [])

    const routes = useRoutes(user.isLogedIn, user._id)

    return routes
}

export default App