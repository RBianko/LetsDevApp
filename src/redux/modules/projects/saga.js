import { takeLatest, put, call } from 'redux-saga/effects'

import {
    GET_PROJECTS,
    GET_PROJECT_DETAILS,
    UPDATE_PROJECT,
    ADD_PROJECT
} from '../../action-types'

import {
    getProjectsSuccess,
    getProjectsFail,
    getProjectDetailsSuccess,
    getProjectDetailsFail,
    updateProjectSuccess,
    updateProjectFail,
    addProjectSuccess,
    addProjectFail,
} from './actions'

import {
    getProjects,
    getProjectDetails,
    updateProject,
    addProject
} from '../../helpers/backend-helper'

function* onGetProjects({ payload: ids }) {
    try {
        const response = yield call(getProjects, ids)
        yield put(getProjectsSuccess(response))
    } catch (error) {
        yield put(getProjectsFail(error.response))
    }
}

function* onGetProjectDetails({ payload: id }) {
    try {
        const response = yield call(getProjectDetails, id)
        yield put(getProjectDetailsSuccess(response))
    } catch (error) {
        yield put(getProjectDetailsFail(error.response))
    }
}

function* onUpdateProject({ payload: project }) {
    try {
        const response = yield call(updateProject, project)
        yield put(updateProjectSuccess(response))
    } catch (error) {
        yield put(updateProjectFail(error.response))
    }
}

function* onAddProject({ payload: project }) {
    try {
        const response = yield call(addProject, project)
        yield put(addProjectSuccess(response))
    } catch (error) {
        yield put(addProjectFail(error.response))
    }
}

function* ProjectsSaga() {
    yield takeLatest(GET_PROJECTS, onGetProjects)
    yield takeLatest(GET_PROJECT_DETAILS, onGetProjectDetails)
    yield takeLatest(UPDATE_PROJECT, onUpdateProject)
    yield takeLatest(ADD_PROJECT, onAddProject)
}

export default ProjectsSaga