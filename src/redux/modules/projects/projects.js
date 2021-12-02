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

// {
//     title: "Project v1.29",
//     picture: defaultProjectPicture,
//     status: "Active",
//     description: "some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ",
//     skills: ["CSS", "HTML", "JS", "React", "redux", "Angular"],
//     devs: [
//         {
//             _id: "616e71fbe25229d0d93bfd37",
//             role: "Frontend",
//             creator: true
//         }
//     ],
//     requests: [
//         {
//             requestId: "0",
//             _id: "1fake616e71fb12311233bfd37",
//             forRole: "UI-Designer"
//         },
//         {
//             requestId: "1",
//             _id: "2fake616e71fb12311233bfd37",
//             forRole: "Tester"
//         }
//     ],
//     needList: ["UI-Designer", "Tester"],
// }

const projectsReduser = (state = initialState, { type, payload, id, _id }) => {
    let projectId = state.list.findIndex(project => project.id === id)
    let project = state.list[projectId]

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