import { all, fork } from 'redux-saga/effects'

import ProjectsSaga from './modules/projects/saga'

export default function* rootSaga() {
    yield all([fork(ProjectsSaga)])
}