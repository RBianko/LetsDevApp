const ADD_PROJECT = `ADD_PROJECT`

let PROJECT_ID = 0

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

export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project
})

export const getId = () => PROJECT_ID


export default projectsReduser