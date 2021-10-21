const GET_SKILLS = `GET_SKILLS`

const initialState = [
    'CSS',
    'JS',
    'HTML',
    'React',
]

const skillsReduser = (state = initialState, { type, payload }) => {
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