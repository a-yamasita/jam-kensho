import * as React from 'react';
import { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import Link from '@/views/v1/atoms/Link';

import Layout from '@/views/v1/templates/Layout';

// dangerouslySetInnerHtml するときに image 要素があるとエラーが出るみたい？
// https://github.com/gatsbyjs/gatsby/issues/35421
const IndexPage = ({ data }) => {

    console.log(data.allWpPost.nodes[0].content.replace(/\r?\n/g, ''));
    return (
        <Layout>
        </Layout>
    );
    //<div dangerouslySetInnerHTML={{ __html: data.allWpPost.nodes[0].content.replace(/\r?\n/g, '') }} />
};


export default IndexPage;

export const query = graphql`
query IndexQuery {
    allWpPost {
      nodes {
        content
      }
    }
  }  
`;

// 画像？
// https://stackoverflow.com/questions/60696636/how-to-import-images-within-a-gatsby-blog-mdx-file-for-a-slick-carousel
// https://github.com/wesbos/Gatsby-Workshop/blob/master/notes/04%20-%20Images.md
