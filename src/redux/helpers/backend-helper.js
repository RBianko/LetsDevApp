import { get } from './api-helper'
import * as url from './url-helper'

//Projects 
export const getProjects = () => get(url.GET_PROJECTS)

//Project
export const getProjectDetails = (id) =>
    get(url.GET_PROJECT_DETAILS, {
        params: { id: id } //state
    })