import React from 'react';

import { styled } from '@mui/material';

import AppBar from '../atoms/AppBar';
import Container from '../atoms/Container';
import Typography from '../atoms/Typography';

// const _Footer_ = styled(AppBar)({
//     width: '100%',
//     position: 'fixed',
//     bottom: '0'
// });

const FooterNote = styled(Typography)({
    textAlign: 'center'
});

export default function Footer(props) {
    return (
        <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="lg">
                <FooterNote>&copy; ASCON {new Date().getFullYear()}</FooterNote>
            </Container>
        </AppBar>
    );
}