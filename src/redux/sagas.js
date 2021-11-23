import { all, fork } from 'redux-saga/effects'

import ProjectsSaga from './modules/projects/saga'
import UsersSaga from './modules/users/saga'

export default function* rootSaga() {
    yield all([fork(ProjectsSaga)])
    yield all([fork(UsersSaga)])
}