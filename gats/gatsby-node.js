const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query CreatePageQuery {
      allWpPost(sort: {fields: date, order: DESC}, filter: {status: {eq: "publish"}}) {
        edges {
          node {
            date
            modified
            title
            content
            author {
              node {
                nicename
                avatar {
                  url
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

  const pageTemplate = path.resolve('src/views/v1/templates/PageTemplate.tsx');
  results.data.allWpPost.edges.forEach(node => {
    createPage({
      path: `/${node.node.slug}`,
      component: pageTemplate,
      context: {
        title: node.node.title,
        date: node.node.date,
        modified: node.node.modified,
        content: node.node.content
      }
    });
  });
}

/*
edges.forEach だと node が↓みたいになる、命名考え直したほうが良いかも。

[Object: null prototype] {
  node: [Object: null prototype] {
    date: '2022-04-24T04:55:54',
    modified: '2022-04-27T03:08:05',
    title: 'このブログについて',
    content: '\n' +
      '<p><a rel="noreferrer noopener"
href="https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/?l=japanese" target="_blank">Age of
 Empires II (AoE2)</a> の情報やノウハウを書き連ねていくサイトです。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>意見感想質問等は AoE2 関連 Discord に居る asuky か、 <a href="https://twitter.com/aoe2jp" target="_blank"
rel="noreferrer noopener">aoe2.jp の Twitter アカウント</a>にメンションしていただければ、可能な限りお返事します。</p>\n'
 +
      '\n' +
      '\n' +
      '\n' +
      '<p>記載内容は吟味しますが、正確さの担保は出来ません。記載に問題や誤字脱字等ありましたら、上記連絡先までご連絡下さ
い。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<figure class="wp-block-image size-full"><div data-gatsby-image-wrapper=""
style="position:relative;overflow:hidden;display:inline-block;vertical-align:top" class="gatsby-image-wrapper
gatsby-image-wrapper-constrained wp-image-17 inline-gatsby-image-wrapper"><div
style="max-width:642px;display:block"><img alt="" role="presentation" aria-hidden="true"
src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;439&#x27; width=&#x27;642&#x27;
xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
style="max-width:100%;display:block;position:static"/></div><div aria-hidden="true" data-placeholder-image=""
style="height:100%;left:0;position:absolute;top:0;width:100%"></div><picture><source type="image/avif"
data-srcset="/_gatsby/image/591a97232761da115ea77b9f6fd10585/a9ede6e1c7123ec6e1b9b63ac19b382f/enjo.avif?u=https%3A%2F%2F
wp.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Davif%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/68aabec2e5582b5e2042e26023f8e129/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Davif%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/3b66806e9cfeffb6afdfe2f1cf8e03c9/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Davif%26q%3D90 642w"
sizes="(min-width: 642px) 642px, 100vw"/><source type="image/webp"
data-srcset="/_gatsby/image/591a97232761da115ea77b9f6fd10585/630076192a5c256d3d25b8b931691b47/enjo.webp?u=https%3A%2F%2F
wp.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Dwebp%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/43950e24709829bdf476daef03351e52/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Dwebp%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c26260d7be93e3cb2a0748a24fa74dc4/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Dwebp%26q%3D90 642w"
sizes="(min-width: 642px) 642px, 100vw"/><img data-gatsby-image-ssr="" data-wp-inline-image="1" data-main-image=""
style="height:100%;left:0;position:absolute;top:0;transform:translateZ(0);transition:opacity 250ms
linear;width:100%;will-change:opacity;opacity:0" sizes="(min-width: 642px) 642px, 100vw" decoding="async" loading="lazy"
 data-src="/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=https%3A%2F%2Fwp.
dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90"
data-srcset="/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=https%3A%2F%2Fw
p.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/813496bbc9c0f130fdf42d86c269679c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Djpg%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c1f3711d5820a27216fcdf7c035c596c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Djpg%26q%3D90 642w"
alt=""/></picture><noscript><picture><source type="image/avif"
srcSet="/_gatsby/image/591a97232761da115ea77b9f6fd10585/a9ede6e1c7123ec6e1b9b63ac19b382f/enjo.avif?u=https%3A%2F%2Fwp.de
v.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Davif%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/68aabec2e5582b5e2042e26023f8e129/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Davif%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/3b66806e9cfeffb6afdfe2f1cf8e03c9/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Davif%26q%3D90 642w"
sizes="(min-width: 642px) 642px, 100vw"/><source type="image/webp"
srcSet="/_gatsby/image/591a97232761da115ea77b9f6fd10585/630076192a5c256d3d25b8b931691b47/enjo.webp?u=https%3A%2F%2Fwp.de
v.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Dwebp%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/43950e24709829bdf476daef03351e52/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Dwebp%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c26260d7be93e3cb2a0748a24fa74dc4/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Dwebp%26q%3D90 642w"
sizes="(min-width: 642px) 642px, 100vw"/><img data-gatsby-image-ssr="" data-wp-inline-image="1" data-main-image=""
style="height:100%;left:0;position:absolute;top:0;transform:translateZ(0);transition:opacity 250ms
linear;width:100%;will-change:opacity;opacity:0" sizes="(min-width: 642px) 642px, 100vw" decoding="async" loading="lazy"
 src="/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90"
srcSet="/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=https%3A%2F%2Fwp.dev
.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/813496bbc9c0f130fdf42d86c269679c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D321%26h%3D220%26fm%3Djpg%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c1f3711d5820a27216fcdf7c035c596c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&amp;a=w%3D642%26h%3D439%26fm%3Djpg%26q%3D90 642w"
alt=""/></picture></noscript><script type="module">const t="undefined"!=typeof HTMLImageElement&&"loading"in
HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of
t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute(
"srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const
t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.remove
Attribute("data-srcset");e.complete&&(e.style.opacity=1)}}</script></div><script type="application/json"
data-wp-inline-image-hydration="1">{"image":{"images":{"sources":[{"srcSet":"/_gatsby/image/591a97232761da115ea77b9f6fd1
0585/a9ede6e1c7123ec6e1b9b63ac19b382f/enjo.avif?u=https%3A%2F%2Fwp.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2
Fenjo.jpg&a=w%3D161%26h%3D110%26fm%3Davif%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/68aabec2e5582b5e2042e26023f8e129/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D321%26h%3D220%26fm%3Davif%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/3b66806e9cfeffb6afdfe2f1cf8e03c9/enjo.avif?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D642%26h%3D439%26fm%3Davif%26q%3D90
642w","type":"image/avif","sizes":"(min-width: 642px) 642px,
100vw"},{"srcSet":"/_gatsby/image/591a97232761da115ea77b9f6fd10585/630076192a5c256d3d25b8b931691b47/enjo.webp?u=https%3A
%2F%2Fwp.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D161%26h%3D110%26fm%3Dwebp%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/43950e24709829bdf476daef03351e52/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D321%26h%3D220%26fm%3Dwebp%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c26260d7be93e3cb2a0748a24fa74dc4/enjo.webp?u=https%3A%2F%2Fwp.dev.d
ocs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D642%26h%3D439%26fm%3Dwebp%26q%3D90
642w","type":"image/webp","sizes":"(min-width: 642px) 642px,
100vw"}],"fallback":{"src":"/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=
https%3A%2F%2Fwp.dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90"
,"srcSet":"/_gatsby/image/591a97232761da115ea77b9f6fd10585/899d2565a80189513bd15b303aebd837/enjo.jpg?u=https%3A%2F%2Fwp.
dev.docs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D161%26h%3D110%26fm%3Djpg%26q%3D90
161w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/813496bbc9c0f130fdf42d86c269679c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D321%26h%3D220%26fm%3Djpg%26q%3D90
321w,/_gatsby/image/591a97232761da115ea77b9f6fd10585/c1f3711d5820a27216fcdf7c035c596c/enjo.jpg?u=https%3A%2F%2Fwp.dev.do
cs.aoe2.jp%2Fwp-content%2Fuploads%2F2022%2F04%2Fenjo.jpg&a=w%3D642%26h%3D439%26fm%3Djpg%26q%3D90
642w","sizes":"(min-width: 642px) 642px,
100vw"}},"layout":"constrained","width":642,"height":439},"alt":"","className":"wp-image-17
inline-gatsby-image-wrapper","data-wp-inline-image":"1"}</script><figcaption>Enjo</figcaption></figure>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>基本的な方針ですが、<strong>直接データを確認する方が早かったり、他のサイトや wiki
の方がより良い情報を期待できるような内容は記載しません</strong>。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<ul><li>斥候・弓・即城等のアラビアにおける進化</li><li>各ユ'... 593 more characters,
    author: [Object: null prototype] { node: [Object: null prototype] },
    slug: '%e3%81%93%e3%81%ae%e3%83%96%e3%83%ad%e3%82%b0%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6'
  }
}












*/