import {
    GET_SKILLS
} from '../../action-types'

const initialState = [
    'CSS',
    'JS',
    'HTML',
    'React',
    'Python',
    'Java',
    'C++',
    'С#',
    'R',
    'Go',
    'Swift',
    'Ruby',
    'SQL'
]

const skillsReduser = (state = initialState, { type }) => {
    switch (type) {
        case GET_SKILLS:
            return { ...state }
        default:
            return state
    }
}

export default skillsReduser