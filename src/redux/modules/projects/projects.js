import {
    ADD_PROJECT,
    EDIT_NEED_LIST,
    EDIT_SKILLS_STACK,
    EDIT_DESCRIPTION,
    EDIT_TITLE,
    EDIT_STATUS,
    APPLY_REQUEST,
    APPROVE_REQUEST,
    DECLINE_REQUEST,
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_DETAILS,
    GET_PROJECT_DETAILS_SUCCESS,
    GET_PROJECT_DETAILS_FAIL,
} from "../../action-types"

// EMPTY_PROJECT
//         {
//             id: null,
//             creator: null,
//             title: null,
//             picture: defaultProjectPicture,
//             status: null,
//             description: null,
//             skills: [],
//             devs: [],
//             needList: [],
//         }

const initialState = {
    loadingProjects: false,
    loadingProjectDetails: false,
    error: { message: "" },
    project: {},
    list: []
}

// list: [
//     {
//         title: "Project v1.29",
//         projectPicture: defaultProjectPicture,
//         status: "Active",
//         description: "some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ",
//         skills: ["CSS", "HTML", "JS", "React", "redux", "Angular"],
//         devs: [
//             {
//                 userId: "616e71fbe25229d0d93bfd37",
//                 role: "Frontend",
//                 creator: true
//             }
//         ],
//         requests: [
//             {
//                 requestId: "0",
//                 userId: "1fake616e71fb12311233bfd37",
//                 forRole: "UI-Designer"
//             },
//             {
//                 requestId: "1",
//                 userId: "2fake616e71fb12311233bfd37",
//                 forRole: "Tester"
//             }
//         ],
//         needList: ["UI-Designer", "Tester"],
//     },
//     {
//         id: "101",
//         title: "Dev free",
//         projectPicture: defaultProjectPicture,
//         status: "Active",
//         description: "some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ",
//         skills: ["CSS", "HTML", "JS", "React", "NoSQL", "Java", "Svelte"],
//         devs: [
//             {
//                 userId: "5fake616e71fb12311233bfd37",
//                 role: "Backend",
//                 creator: true
//             },
//             {
//                 userId: "616e71fbe25229d0d93bfd37",
//                 role: "Frontend",
//             },
//             {
//                 userId: "4fake616e71fb12311233bfd37",
//                 role: "Software",
//             },
//         ],
//         requests: [],
//         needList: ["Tester", "Tester", "Frontend"],
//     },
//     {
//         id: "102",
//         title: "Apply here!",
//         projectPicture: defaultProjectPicture,
//         status: "Offline",
//         description: "some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ",
//         skills: ["CSS", "HTML", "JS", "React", "NoSQL", "Java", "Svelte"],
//         devs: [
//             {
//                 userId: "1fake616e71fb12311233bfd37",
//                 role: "Backend",
//                 creator: true
//             },
//             {
//                 userId: "2fake616e71fb12311233bfd37",
//                 role: "Software",
//             },
//         ],
//         requests: [],
//         needList: ["Frontend"],
//     },
// ]

const projectsReduser = (state = initialState, { type, payload, id, userId }) => {
    let projectId = state.list.findIndex(project => project.id === id)
    let project = state.list[projectId]

    switch (type) {
        case GET_PROJECTS:
            state = { ...state, loadingProjects: true };
            break;
        case GET_PROJECTS_SUCCESS:
            state = { ...state, list: payload, loadingProjects: false };
            break;
        case GET_PROJECTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_PROJECTS",
                },
                loadingProjects: false,
            };
            break;
        case GET_PROJECT_DETAILS:
            state = { ...state, loadingProjectDetails: true };
            break;
        case GET_PROJECT_DETAILS_SUCCESS:
            state = { ...state, project: payload, loadingProjectDetails: false };
            break;
        case GET_PROJECT_DETAILS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_PROJECT_DETAILS",
                },
                loadingProjectDetails: false,
            };
            break;



        // case ADD_PROJECT:
        //     payload.id = _PROJECT_ID.toString()
        //     let newList = [...state.list, payload]
        //     _PROJECT_ID++
        //     return { ...state, list: newList, id: _PROJECT_ID }
        // case EDIT_TITLE:
        //     project.title = payload
        //     return { ...state, list: [...state.list] }
        // case EDIT_STATUS:
        //     project.status = payload
        //     return { ...state, list: [...state.list] }
        // case EDIT_NEED_LIST:
        //     project.needList = payload
        //     return { ...state, list: [...state.list] }
        // case EDIT_SKILLS_STACK:
        //     project.skills = payload
        //     return { ...state, list: [...state.list] }
        // case EDIT_DESCRIPTION:
        //     project.description = payload
        //     return { ...state, list: [...state.list] }


        case APPLY_REQUEST:
            const newRequest = {
                requestId: project.requests.length.toString(),
                userId,
                role: payload
            }
            state.list[projectId].requests.push(newRequest)
            return { ...state, list: [...state.list] }
        case APPROVE_REQUEST:
            let approveRequestId = project.requests.findIndex(request => request.id === payload.id)
            project.requests.splice(approveRequestId, 1) //delete request

            let roleId = project.needList.findIndex(role => role === payload.forRole)
            project.needList.splice(roleId, 1) //delete needed role

            let newDev = {
                userId: payload.userId,
                role: payload.forRole
            }
            project.devs.push(newDev) // add new dev

            const updatedProject = { ...project }
            state.list.splice(projectId, 1, updatedProject)
            return { ...state, list: [...state.list] }
        case DECLINE_REQUEST:
            let declineRequestId = project.requests.findIndex(request => request.id === payload.id)
            project.requests.splice(declineRequestId, 1) //delete request
            return { ...state }
        default:
            state = { ...state }
            break
    }
    return state
}

export default projectsReduser