import * as React from 'react';
import { PageProps } from 'gatsby';

import { Typography } from '@mui/material';

import OutboundLink from '@/views/v1/atoms/OutboundLink';

import Layout from '@/views/v1/templates/Layout';

import Items from '../views/v1/organisms/Items';

const TopPage = () => (
    <Layout>
        <Typography variant="h3">Top Page</Typography>
        <OutboundLink href="https://google.co.jp" target="_blank">Outboundlink to Google</OutboundLink>
    </Layout>
);

export default TopPage;

// 画像？
// https://stackoverflow.com/questions/60696636/how-to-import-images-within-a-gatsby-blog-mdx-file-for-a-slick-carousel
// https://github.com/wesbos/Gatsby-Workshop/blob/master/notes/04%20-%20Images.md
