import { takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import * as sagas from './sagas';

export function* saga() {
    yield takeEvery(actions.GET, sagas.get);
}