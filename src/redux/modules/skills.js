const GET_SKILLS = `GET_SKILLS`

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

export const getSkills = () => ({
    type: GET_SKILLS
})

export default skillsReduser