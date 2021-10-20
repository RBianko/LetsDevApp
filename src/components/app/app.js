import './app.css';
import { connect } from 'react-redux'
import { useMemo } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { setUser } from '../../redux/modules/user'
import { useRoutes } from './routes'


const App = ({ user, setUser }) => {

    const { token, userId, login, logout } = useAuth()
    useMemo(() => {
        return setUser({ token, userId, login, logout })
    }, [token, userId])

    const routes = useRoutes(user.isLogedIn)

    return routes
}

export default connect(({ user }) => ({ user }), { setUser })(App)