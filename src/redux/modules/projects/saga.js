import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_PROJECTS, GET_PROJECT_DETAILS } from '../../action-types'

import {
    getProjectsSuccess,
    getProjectsFail,
    getProjectDetailsSuccess,
    getProjectDetailsFail,
} from './actions'

import { getProjects, getProjectDetails } from '../../helpers/backend-helper'

function* onGetProjects() {
    try {
        const response = yield call(getProjects)
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

function* ProjectsSaga() {
    yield takeLatest(GET_PROJECTS, onGetProjects)
    yield takeLatest(GET_PROJECT_DETAILS, onGetProjectDetails)
}

export default ProjectsSaga