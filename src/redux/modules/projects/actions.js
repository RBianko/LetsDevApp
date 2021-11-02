import {
    ADD_PROJECT
} from '../../action-types'


export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project
})
