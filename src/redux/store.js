import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import userReduser from './modules/user/user'
import usersReduser from './modules/users/users'
import projectsReduser from './modules/projects/projects'
import skillsReduser from './modules/skills/skills'
import rolesReduser from './modules/roles/roles'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const redusers = combineReducers({
    user: userReduser,
    users: usersReduser,
    projects: projectsReduser,
    skills: skillsReduser,
    roles: rolesReduser,
})

const store = createStore(redusers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store