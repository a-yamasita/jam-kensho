import React from 'react';
import { Helmet } from 'react-helmet';

//import {  as _ } from '@chakra-ui/react';

export default function GlobalHead({ title }: any) {
    // <Component {...props}>{props.children}</Component>
    return (
        <Helmet>
            <title>{ title }</title>
        </Helmet>
    );
}