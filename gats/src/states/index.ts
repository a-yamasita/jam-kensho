import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { reducers, rootSaga } from './models';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

export default function configureStore() {

    console.log("configureStore called");

    let middlewares :any = [
        sagaMiddleware
    ];

    if (`${process.env.NODE_ENV}` === 'development') {
        middlewares.push(createLogger());
    }

    const composeEnhancers = composeWithDevTools({
        trace: true,
        traceLimit: 25
    });

    
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
}