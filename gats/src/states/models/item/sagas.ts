import { call, put } from 'redux-saga/effects';

import * as actions from './actions';

export function* get() {
    console.log("sagas.get called");
    try {
        // call api
        yield put(actions.retrieve([
            {
                id: 1,
                name: 'hoge',
                description: 'hogehoge'
            },
            {
                id: 2,
                name: 'fuga',
                description: 'fugafuga'
            },
            {
                id: 3,
                name: 'piyo',
                description: 'piyopiyo'
            },
        ]));
    } catch (e) {
        console.log(e);
    }
}