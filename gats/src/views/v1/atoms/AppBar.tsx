import React from 'react';
import {
    AppBar as _AppBar,
    styled
} from '@mui/material';

export default function AppBar(props) {
    return (
        <>
            <_AppBar {...props}>
                {props.children}
            </_AppBar>
        </>
    );
}