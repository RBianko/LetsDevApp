import { combineReducers, createStore } from 'redux'
import userReduser from './modules/user'
import usersReduser from './modules/users'
import projectsReduser from './modules/projects'
import skillsReduser from './modules/skills'
import rolesReduser from './modules/roles'

let redusers = combineReducers({
    user: userReduser,
    users: usersReduser,
    projects: projectsReduser,
    skills: skillsReduser,
    roles: rolesReduser,
})

let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store