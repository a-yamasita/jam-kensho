import React from 'react';
import { Link } from 'gatsby';
import { styled } from '@mui/material'

import AppBar from '../atoms/AppBar';
import AppBarSpacer from '../atoms/AppBarSpacer';
import Container from '../atoms/Container';
import Typography from '../atoms/Typography';

const TitleText = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontStyle: "none",
    textDecoration: "none",
});

const LinkText = styled(Link)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontStyle: "none",
    textDecoration: "none",
    '&:visited': {
        color: 'white'
    }
});

export default function Header(props) {
    return (
        <>
            <AppBar>
                <Container maxWidth="lg">
                    <LinkText to="/">
                        
                    </LinkText>
                </Container>
            </AppBar>
            <AppBarSpacer />
        </>
    );
}
