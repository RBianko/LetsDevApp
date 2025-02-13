/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'

import { setUser } from '../../redux/modules/user/actions'
import { getCurrentUser } from './../../redux/modules/user/actions'
import { Suspense } from 'react'
import { LoaderComponent } from './../style-components/loader/loader'
import { ToastContainer } from 'react-toastify'

import PrivateRoute from './routes/private-route'
import Menu from './../menu/menu'
import ProtectedRoutes from './routes/protected-routes'
import PublicRoute from './routes/public-route'
import Header from './../welcome-page/header/index'
import WelcomePage from './../welcome-page/welcome-page'
import Footer from './../footer/index'
import NoFoundComponent from './../welcome-page/welcome-page'

import './app.css';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const { token, _id, login, logout } = useAuth()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUser({ token, _id, login, logout }))
        if (_id) {
            dispatch(getCurrentUser(_id))
        }
    }, [_id, token, dispatch])

    return (
        <Suspense fallback={<LoaderComponent />}>
            <ToastContainer />
            <Switch>
                <PublicRoute
                    path="/welcome"
                    isAuthenticated={user.isLogedIn}
                >
                    <Header />
                    <WelcomePage />
                </PublicRoute>
                <PrivateRoute
                    path="/"
                    isAuthenticated={user.isLogedIn}
                >
                    <Menu />
                    <ProtectedRoutes userId={user._id} />
                </PrivateRoute>
                <Redirect to="/welcome" />
                <Route path="*">
                    <NoFoundComponent />
                </Route>
            </Switch>
            <Footer />
        </Suspense>
    )
}

export default App