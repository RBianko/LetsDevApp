import './app.css';
import { connect } from 'react-redux'
import { useAuth } from '../../hooks/auth.hook'
import { setUser } from '../../redux/modules/user'
import { useRoutes } from './routes'


const App = ({ user, setUser }) => {

    const { token, userId, login, logout } = useAuth()
    setUser({ token, userId, login, logout })

    const routes = useRoutes(user.userId)

    return routes
}

export default connect(({ user }) => ({ user }), { setUser })(App);