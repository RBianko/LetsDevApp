import { combineReducers, createStore } from 'redux'
import userReduser from './modules/user'

let redusers = combineReducers({
    user: userReduser
})

let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store