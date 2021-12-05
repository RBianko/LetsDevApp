import {
    Route,
    Redirect
} from 'react-router-dom'

function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    !isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/profile/:id',
                                state: { from: location }
                            }}
                        />
                    ))
            }
        />
    );
}

export default PublicRoute;