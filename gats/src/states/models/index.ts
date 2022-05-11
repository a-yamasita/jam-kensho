import { all, spawn, call } from 'redux-saga/effects';

import {
    State as ItemState,
    reducer as Item,
    sagas as ItemSaga
} from './item';

export type StoreState = Readonly<{
    Item: ItemState
}>;

export const reducers = {
    Item
};

export function* rootSaga()
{
    const watchers = [
        ...ItemSaga
    ];

    yield all(
        watchers.map((saga) => (
            spawn(function* (){
                while (true){
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
        ))
    );
}