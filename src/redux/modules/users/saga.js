import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_USER, GET_USERS, GET_ALL_USERS } from '../../action-types'

import {
    getUserSuccess,
    getUserFail,
    getUsersSuccess,
    getUsersFail,
} from '../users/actions'

import { getUser, getUsers, getAllUsers } from '../../helpers/backend-helper'

function* onGetUsers({ payload: ids }) {
    try {
        const response = yield call(getUsers, ids)
        yield put(getUsersSuccess(response))
    } catch (error) {
        yield put(getUsersFail(error.response))
    }
}

function* onGetAllUsers() {
    try {
        const response = yield call(getAllUsers)
        yield put(getUsersSuccess(response))
    } catch (error) {
        yield put(getUsersFail(error.response))
    }
}

function* onGetUser({ payload: id }) {
    try {
        const response = yield call(getUser, id)
        yield put(getUserSuccess(response))
    } catch (error) {
        yield put(getUserFail(error.response))
    }
}

function* UsersSaga() {
    yield takeLatest(GET_USER, onGetUser)
    yield takeLatest(GET_USERS, onGetUsers)
    yield takeLatest(GET_ALL_USERS, onGetAllUsers)
}

export default UsersSaga