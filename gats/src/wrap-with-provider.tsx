/*if (`${process.env.NODE_ENV}` !== 'development') {
    console.log = function() {};
    console.dir = function() {};
    console.warn = function() {};
    console.error = function() {};
}*/

import { CssBaseline } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './states';

const store = configureStore();

export default function wrapRootElement({ element })
{
    return (
        <>
            <CssBaseline />
            <Provider store={store}>{element}</Provider>
        </>
    );
}

