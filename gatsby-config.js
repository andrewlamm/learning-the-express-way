module.exports = {
  siteMetadata: {
    title: 'Learning the Express Way',
    author: 'me :)',
    description: 'Learn web development the easy way.',
    image: 'https://tinyurl.com/346vdub2',
    origin: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'lessons',
        path: './lessons',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/lessons.js')
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     withWebp: true,
          //     linkImagesToOriginal: true,
          //   }
          // },
          // {
          //   resolve: 'gatsby-remark-copy-linked-files',
          //   options: {
          //     ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff'],
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'language-',
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     noInlineHighlight: true,
          //   },
          // },
        ],
      },
    },
  ],
  flags: {
    GATSBY_CPU_COUNT: 1, // garbage workaround for netlify (https://github.com/gatsbyjs/gatsby/discussions/34473)
  }
}
