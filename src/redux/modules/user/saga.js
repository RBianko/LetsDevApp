import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_CURRENT_USER, UPDATE_USER_INFO } from '../../action-types'

import {
    getCurrentUserSuccess,
    getCurrentUserFail,
    updateUserInfoSuccess,
    updateUserInfoFail,
} from '../user/actions'

import { getCurrentUser, updateUserInfo } from '../../helpers/backend-helper'

function* onGetCurrentUser({ payload: id }) {
    try {
        const response = yield call(getCurrentUser, id)
        yield put(getCurrentUserSuccess(response))
    } catch (error) {
        yield put(getCurrentUserFail(error.response))
    }
}

function* onUpdateUserInfo({ payload: user }) {
    try {
        const response = yield call(updateUserInfo, user)
        yield put(updateUserInfoSuccess(response))
    } catch (error) {
        yield put(updateUserInfoFail(error.response))
    }
}

function* UserSaga() {
    yield takeLatest(GET_CURRENT_USER, onGetCurrentUser)
    yield takeLatest(UPDATE_USER_INFO, onUpdateUserInfo)
}

export default UserSaga