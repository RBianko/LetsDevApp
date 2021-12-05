import {
    GET_PROJECTS,
    GET_ALL_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_DETAILS,
    GET_PROJECT_DETAILS_SUCCESS,
    GET_PROJECT_DETAILS_FAIL,
    ADD_PROJECT,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAIL,
    UPDATE_PROJECT,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,
    APPLY_REQUEST,
    APPROVE_REQUEST,
    DECLINE_REQUEST,
} from "../../action-types"

const initialState = {
    loadingProjects: false,
    loadingProjectDetails: false,
    error: { message: "" },
    project: {},
    list: []
}

const projectsReduser = (state = initialState, { type, payload, id }) => {
    switch (type) {
        case GET_PROJECTS:
            state = { ...state, loadingProjects: true }
            break
        case GET_ALL_PROJECTS:
            state = { ...state, loadingProjects: true }
            break
        case GET_PROJECTS_SUCCESS:
            state = { ...state, list: payload, loadingProjects: false }
            break
        case GET_PROJECTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_PROJECTS",
                },
                loadingProjects: false,
            }
            break
        case GET_PROJECT_DETAILS:
            state = { ...state, loadingProjectDetails: true }
            break
        case GET_PROJECT_DETAILS_SUCCESS:
            state = { ...state, project: payload, loadingProjectDetails: false }
            break
        case GET_PROJECT_DETAILS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_PROJECT_DETAILS",
                },
                loadingProjectDetails: false,
            }
            break

        case ADD_PROJECT:
            state = { ...state, loadingProjectDetails: true }
            break
        case ADD_PROJECT_SUCCESS:
            state = { ...state, loadingProjectDetails: false }
            break
        case ADD_PROJECT_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on ADD_PROJECT",
                },
                loadingProjectDetails: false,
            }
            break

        case UPDATE_PROJECT:
            state = { ...state, loadingProjectDetails: true }
            break
        case UPDATE_PROJECT_SUCCESS:
            state = { ...state, loadingProjectDetails: false }
            break
        case UPDATE_PROJECT_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on UPDATE_PROJECT",
                },
                loadingProjectDetails: false,
            }
            break
        case APPLY_REQUEST:
            state = { ...state }
            break
        case APPROVE_REQUEST:
            state = { ...state }
            break
        case DECLINE_REQUEST:
            state = { ...state }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default projectsReduser