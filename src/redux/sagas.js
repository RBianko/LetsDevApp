import { all, fork } from 'redux-saga/effects'

import ProjectsSaga from './modules/projects/saga'
import UsersSaga from './modules/users/saga'
import UserSaga from './modules/user/saga'

export default function* rootSaga() {
    yield all([fork(ProjectsSaga)])
    yield all([fork(UsersSaga)])
    yield all([fork(UserSaga)])
}