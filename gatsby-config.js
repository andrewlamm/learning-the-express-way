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
    'gatsby-plugin-sharp',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
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
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              beginMarker: `{{`,
              endMarker: `}}`,
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              linkImagesToOriginal: true,
              wrapperStyle: 'margin-left: 0!important; margin-right: 0!important;',
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff'],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '›',
              aliases: {},
            },
          },
        ],
      },
    },
  ],
}
