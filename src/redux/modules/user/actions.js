import {
    SET_USER,
    EDIT_FIRSTNAME,
    EDIT_LASTNAME,
    EDIT_CITY,
    EDIT_COUNTRY,
    EDIT_BIO,
    EDIT_ROLES,
    EDIT_SKILLS,
    EDIT_SOCIALS_VK,
    EDIT_SOCIALS_FACEBOOK,
    EDIT_SOCIALS_LINKEDIN,
    EDIT_SOCIALS_GITHUB,
    ADD_PROJECT_ID,
    FOLLOW_TOGGLE,
} from '../../action-types'

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const editFirstName = (string) => ({
    type: EDIT_FIRSTNAME,
    payload: string
})

export const editLastName = (string) => ({
    type: EDIT_LASTNAME,
    payload: string
})

export const editCity = (string) => ({
    type: EDIT_CITY,
    payload: string
})

export const editCountry = (string) => ({
    type: EDIT_COUNTRY,
    payload: string
})

export const editBio = (string) => ({
    type: EDIT_BIO,
    payload: string
})

export const editRoles = (string) => ({
    type: EDIT_ROLES,
    payload: string
})

export const editSkills = (array) => ({
    type: EDIT_SKILLS,
    payload: array
})

export const editSocialVk = (string) => ({
    type: EDIT_SOCIALS_VK,
    payload: string
})
export const editSocialFacebook = (string) => ({
    type: EDIT_SOCIALS_FACEBOOK,
    payload: string
})
export const editSocialLinkedin = (string) => ({
    type: EDIT_SOCIALS_LINKEDIN,
    payload: string
})
export const editSocialGithub = (string) => ({
    type: EDIT_SOCIALS_GITHUB,
    payload: string
})

export const addProjectId = (project) => ({
    type: ADD_PROJECT_ID,
    payload: project
})

export const followToggle = (id) => ({
    type: FOLLOW_TOGGLE,
    payload: id
})