import { combineReducers, createStore } from 'redux'
import userReduser from './modules/user'
import projectsReduser from './modules/projects'

let redusers = combineReducers({
    user: userReduser,
    projects: projectsReduser
})

let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store