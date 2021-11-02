import {
    ADD_PROJECT
} from '../../action-types'

let PROJECT_ID = 0

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

// EXAMPLE_PROJECT
//         {
//             id: 1,
//             title: 'New Project',
//             projectPicture: defaultProjectPicture,
//             status: 'Active',
//             description: 'some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ',
//             skills: ['CSS', 'HTML', 'JS', 'React'],
//             devs: [
//                 {
//                     userId: 1,
//                     firstName: 'John',
//                     role: 'Frontend',
//                     profilePicture: defaultProfilePicture
//                 },
//                 {
//                     userId: 2,
//                     firstName: 'Roman',
//                     role: 'Frontend',
//                     profilePicture: defaultProfilePicture
//                 },
//                 {
//                     userId: 3,
//                     firstName: 'Dave',
//                     role: 'Backend',
//                     profilePicture: defaultProfilePicture
//                 },
//             ],
//             needList: ['Designer', 'Tester'],
//         }

const initialState = {
    list: []
}

const projectsReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT:
            payload.id = PROJECT_ID++
            let newList = [...state.list, payload]
            return { ...state, list: newList }
        default:
            return state
    }
}

export default projectsReduser