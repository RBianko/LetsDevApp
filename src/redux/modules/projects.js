import defaultProjectPicture from '../../img/project.svg'
import defaultProfilePicture from '../../img/users.svg'

const ADD_PROJECT = `ADD_PROJECT`
const SET_SKILLS = `SET_SKILLS`

// const initialState1 = {
//     list: [
//         {
//             projectId: null,
//             title: null,
//             projectPicture: defaultProjectPicture,
//             status: null,
//             description: null,
//             skills: [],
//             devs: [],
//             needList: [],
//         }
//     ]
// }

const initialState = {
    list: [
        {
            projectId: 1,
            title: 'New Project',
            projectPicture: defaultProjectPicture,
            status: 'Active',
            description: 'some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ',
            skills: ['CSS', 'HTML', 'JS', 'React'],
            devs: [
                {
                    userId: 1,
                    firstName: 'John',
                    role: 'Frontend',
                    profilePicture: defaultProfilePicture
                },
                {
                    userId: 2,
                    firstName: 'Roman',
                    role: 'Frontend',
                    profilePicture: defaultProfilePicture
                },
                {
                    userId: 3,
                    firstName: 'Dave',
                    role: 'Backend',
                    profilePicture: defaultProfilePicture
                },
            ],
            needList: ['Designer', 'Tester'],
        }
    ]
}

const projectsReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT:
            return { ...state, list: [...state.list, payload] }
        case SET_SKILLS:
            return { ...state, skills: [...payload] }
        default:
            return state
    }
}

export const addProject = (payload) => ({
    type: ADD_PROJECT,
    payload
})

export const setSkills = (payload) => ({
    type: SET_SKILLS,
    payload
})

export default projectsReduser