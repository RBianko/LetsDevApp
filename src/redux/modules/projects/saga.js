import { takeLatest, put, call } from 'redux-saga/effects'

import {
    GET_PROJECTS,
    GET_ALL_PROJECTS,
    GET_PROJECT_DETAILS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    APPLY_REQUEST,
    APPROVE_REQUEST,
    DECLINE_REQUEST
} from '../../action-types'

import {
    getProjectsSuccess,
    getProjectsFail,
    getProjectDetailsSuccess,
    getProjectDetailsFail,
    updateProjectSuccess,
    updateProjectFail,
    deleteProjectSuccess,
    deleteProjectFail,
    addProjectSuccess,
    addProjectFail,
    requestSuccess,
    requestFail
} from './actions'

import {
    getProjects,
    getAllProjects,
    getProjectDetails,
    updateProject,
    deleteProject,
    addProject,
    applyRequest,
    approveRequest,
    declineRequest
} from '../../helpers/backend-helper'

function* onGetProjects({ payload: ids }) {
    try {
        const response = yield call(getProjects, ids)
        yield put(getProjectsSuccess(response))
    } catch (error) {
        yield put(getProjectsFail(error.response))
    }
}

function* onGetAllProjects() {
    try {
        const response = yield call(getAllProjects)
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

function* onDeleteProject({ payload: id }) {
    try {
        const response = yield call(deleteProject, id)
        yield put(deleteProjectSuccess(response))
    } catch (error) {
        yield put(deleteProjectFail(error.response))
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

function* onApplyRequest({ payload: request }) {
    try {
        const response = yield call(applyRequest, request)
        yield put(requestSuccess(response))
    } catch (error) {
        yield put(requestFail(error.response))
    }
}

function* onApproveRequest({ payload: request }) {
    try {
        const response = yield call(approveRequest, request)
        yield put(requestSuccess(response))
    } catch (error) {
        yield put(requestFail(error.response))
    }
}

function* onDeclineRequest({ payload: request }) {
    try {
        const response = yield call(declineRequest, request)
        yield put(requestSuccess(response))
    } catch (error) {
        yield put(requestFail(error.response))
    }
}


function* ProjectsSaga() {
    yield takeLatest(GET_PROJECTS, onGetProjects)
    yield takeLatest(GET_ALL_PROJECTS, onGetAllProjects)
    yield takeLatest(GET_PROJECT_DETAILS, onGetProjectDetails)
    yield takeLatest(UPDATE_PROJECT, onUpdateProject)
    yield takeLatest(DELETE_PROJECT, onDeleteProject)
    yield takeLatest(ADD_PROJECT, onAddProject)
    yield takeLatest(APPLY_REQUEST, onApplyRequest)
    yield takeLatest(APPROVE_REQUEST, onApproveRequest)
    yield takeLatest(DECLINE_REQUEST, onDeclineRequest)
}

export default ProjectsSaga