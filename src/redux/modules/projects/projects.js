import {
    ADD_PROJECT,
    EDIT_NEED_LIST,
    EDIT_SKILLS_STACK,
    EDIT_DESCRIPTION,
    EDIT_TITLE,
    EDIT_STATUS,
    APPLY_REQUEST
} from '../../action-types'
import defaultProjectPicture from '../../../img/project.svg'

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


let _PROJECT_ID = 102

const initialState = {
    id: _PROJECT_ID,
    list: [
        {
            id: "100",
            title: 'Project v1.29',
            projectPicture: defaultProjectPicture,
            status: 'Active',
            description: 'some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ',
            skills: ['CSS', 'HTML', 'JS', 'React', "redux", "Angular"],
            devs: [
                {
                    userId: "616e71fbe25229d0d93bfd37",
                    role: 'Frontend',
                    creator: true
                }
            ],
            requests: [
                {
                    userId: "211928392323293bfd37",
                    for: 'Frontend'
                },
                {
                    userId: "311928392323293bfd37",
                    for: 'Frontend'
                }
            ],
            needList: ['Designer', 'Tester'],
        },
        {
            id: "101",
            title: 'Dev free',
            projectPicture: defaultProjectPicture,
            status: 'Active',
            description: 'some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ',
            skills: ['CSS', 'HTML', 'JS', 'React', 'NoSQL', 'Java', 'Svelte'],
            devs: [
                {
                    userId: "616e71fbe25229d0d93bfd37",
                    role: 'Frontend',
                    creator: true
                },
                {
                    userId: "616e71fb12311233bfd37",
                    role: 'Backend',
                },
                {
                    userId: "611928392323293bfd37",
                    role: 'Software',
                },
            ],
            requests: [],
            needList: ['Frontend', 'Backend', 'Software'],
        },
    ]
}

const projectsReduser = (state = initialState, { type, payload, id, userId }) => {
    const projectId = state.list.findIndex(project => project.id === id)
    switch (type) {
        case ADD_PROJECT:
            payload.id = _PROJECT_ID.toString()
            let newList = [...state.list, payload]
            _PROJECT_ID++
            return { ...state, list: newList, id: _PROJECT_ID }
        case EDIT_TITLE:
            state.list[projectId].title = payload
            return { ...state, list: [...state.list] }
        case EDIT_STATUS:
            state.list[projectId].status = payload
            return { ...state, list: [...state.list] }
        case EDIT_NEED_LIST:
            state.list[projectId].needList = payload
            return { ...state, list: [...state.list] }
        case EDIT_SKILLS_STACK:
            state.list[projectId].skills = payload
            return { ...state, list: [...state.list] }
        case EDIT_DESCRIPTION:
            state.list[projectId].description = payload
            return { ...state, list: [...state.list] }
        case APPLY_REQUEST:
            const newRequest = {
                userId,
                role: payload
            }
            state.list[projectId].requests = { ...state.list[projectId].requests, newRequest }
            return { ...state, list: [...state.list] }
        default:
            return state
    }
}

export default projectsReduser