import { combineReducers, createStore } from 'redux'
import userReduser from './modules/user/user'
import usersReduser from './modules/users/users'
import projectsReduser from './modules/projects/projects'
import skillsReduser from './modules/skills/skills'
import rolesReduser from './modules/roles/roles'

let redusers = combineReducers({
    user: userReduser,
    users: usersReduser,
    projects: projectsReduser,
    skills: skillsReduser,
    roles: rolesReduser,
})

let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store