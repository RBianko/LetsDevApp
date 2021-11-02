import {
    GET_SKILLS
} from '../../action-types'

// PROP_TYPES
// skills: PropTypes.arrayOf(PropTypes.string)

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