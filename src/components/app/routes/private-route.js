import {
    Route,
    Redirect
} from 'react-router-dom'

function PrivateRoute({ children, isAuthenticated, ...routeProps }) {
    return (
        <Route
            {...routeProps}
            render={
                ({ location }) => (
                    isAuthenticated
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/welcome',
                                    state: { from: location }
                                }}
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;