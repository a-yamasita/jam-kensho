import React from 'react';
import styled from '@emotion/styled';

import Layout from './Layout';

import { red } from '@mui/material/colors';

const ContentWrapper = styled('div')({
    '& > p': {
        fontFamily: [
            "Noto Sans JP",
            "Lato",
            "游ゴシック Medium",
            "游ゴシック体",
            "Yu Gothic Medium",
            "YuGothic",
            "ヒラギノ角ゴ ProN",
            "Hiragino Kaku Gothic ProN",
            "メイリオ",
            "Meiryo",
            "ＭＳ Ｐゴシック",
            "MS PGothic",
            "sans-serif",
        ],
    },
    '& > figure': {
        textAlign: 'center',
        '& > figcaption': {
            textAlign: 'center',
            fontSize: '80%'
        }
    },

    '& > p.has-large-font-size': {
        fontSize: '200%',
        textAlign: 'center',
    },

    '& > p.has-vivid-red-color': {
        color: red['600']
    }
});



export default function PageTemplate({ pageContext }) {
    console.log(pageContext);
    return (
        <Layout>
            <h1>{pageContext.title}</h1>
            <ContentWrapper
                dangerouslySetInnerHTML={{ __html: pageContext.content.replace(/\r?\n/g, '') }}
            />
        </Layout>
    );
}