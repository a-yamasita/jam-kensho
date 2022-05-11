import React from 'react';
import { CssBaseline, styled, Typography } from '@mui/material';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

import AppBar from '../atoms/AppBar';
import AppBarSpacer from '../atoms/AppBarSpacer';
import Container from '../atoms/Container';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

const GlobalWrapper = styled('div')({
    display: 'flex',
    minHeight: '100vh'
});

// const Footer = styled('div')({
//     backgroundColor: 'blue',
//     width: '100%',
//     position: 'fixed',
//     bottom: '0'
// });

const theme = createTheme({
    typography: {
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
          ].join(","),
    }
});

export default function Layout(props :any) {

    // <Component {...props}>{props.children}</Component>
    return (
        <ThemeProvider theme={theme}>
            <GlobalWrapper>
                <Header />
                <Container maxWidth="lg">
                    <AppBarSpacer />
                    <main>
                        {props.children}
                    </main>
                    <AppBarSpacer />
                </Container>
                <Footer />
            </GlobalWrapper>
        </ThemeProvider>
    );
}

// Box + Text かな？
// https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/