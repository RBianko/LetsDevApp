import {
    ADD_PROJECT
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
                    creator: false
                },
                {
                    userId: "611928392323293bfd37",
                    role: 'Software',
                    creator: false
                },
            ],
            needList: ['Frontend', 'Backend', 'Software'],
        },
    ]
}

const projectsReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT:
            payload.id = _PROJECT_ID.toString
            let newList = [...state.list, payload]
            _PROJECT_ID++
            return { ...state, list: newList, id: _PROJECT_ID }
        default:
            return state
    }
}

export default projectsReduser