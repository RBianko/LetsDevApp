import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_PROJECTS, GET_PROJECT_DETAILS, UPDATE_PROJECT } from '../../action-types'

import {
    getProjectsSuccess,
    getProjectsFail,
    getProjectDetailsSuccess,
    getProjectDetailsFail,
    updateProjectSuccess,
    updateProjectFail,
} from './actions'

import { getProjects, getProjectDetails, updateProject } from '../../helpers/backend-helper'

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

function* ProjectsSaga() {
    yield takeLatest(GET_PROJECTS, onGetProjects)
    yield takeLatest(GET_PROJECT_DETAILS, onGetProjectDetails)
    yield takeLatest(UPDATE_PROJECT, onUpdateProject)
}

export default ProjectsSaga