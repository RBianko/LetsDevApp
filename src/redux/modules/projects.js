import defaultProjectPicture from '../../img/project.svg'

const ADD_PROJECT = `ADD_PROJECT`

const initialState1 = {
    list: [
        {
            projectId: null,
            title: null,
            projectPicture: defaultProjectPicture,
            status: null,
            description: null,
            skills: [],
            devs: [],
            needList: [],
        }
    ]
}

const initialState = {
    list: [
        {
            projectId: 1,
            title: 'New Project',
            projectPicture: defaultProjectPicture,
            status: 'Active',
            description: 'some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps some info asdkaps ',
            skills: ['CSS', 'HTML', 'JS', 'React'],
            devsId: [1, 2, 3],
            needList: ['Frontend', 'Tester'],
        }
    ]
}

const projectsReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT:
            return { ...state, list: [...state.list, payload] }
        default:
            return state
    }
}

export const addProjest = () => ({
    type: ADD_PROJECT,
    payload: initialState1
})

export default projectsReduser