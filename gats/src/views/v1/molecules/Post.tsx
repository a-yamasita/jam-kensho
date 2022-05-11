import React from 'react';
import clsx from 'clsx';

import { red, yellow, cyan, indigo, brown, grey } from '@mui/material/colors';
import Link from '../atoms/Link';

import styled from '@emotion/styled';

import Card from '../atoms/Card';
import CardHeader from '../atoms/CardHeader';
import CardContent from '../atoms/CardContent';
import CardMedia from '../atoms/CardMedia';
import Typography from '../atoms/Typography';

import Difficulty from './Difficulty';

/*
import {
    as _
} from '@mui/material';

export default function _(props) {
    return (<_ {...props}>{props.children}</_>);
}
*/

const StyledDiv = styled('div')({
    textDecoration: 'none',
    '& > p': {
        textDecoration: 'none'
    }
});

const StyledCard = styled(Card)({

    //color: grey['A100'],
    '&.poem': {
        backgroundColor: brown[100]
    },

    '&.beginner': {
        backgroundColor: cyan[100]
    },

    '&.elementary': {
        backgroundColor: indigo[100]
    },

    '&.intermediate': {
        backgroundColor: yellow[100]
    },

    '&.advanced': {
        backgroundColor: red[100]
    },
    

});

export default function Post({ node }) {
    console.log(node);
    return (
        <Link
            to={node.uri}
            style={{ textDecoration: 'inherit' }}
        >
            <StyledCard
                className={clsx(node.categories.nodes.map(node => (node.slug)))}
            >
                <CardHeader
                    title={node.title}
                />
                <CardContent>
                    <StyledDiv
                        dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/\r?\n/g, '') }}
                    />
                </CardContent>
            </StyledCard>
        </Link>
    );
}