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
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
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
        path: `./src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/lessons.js')
        },
        extensions: ['.mdx', '.md'],
        plugins: [
          '@bonobolabs/gatsby-remark-images-custom-widths',
        ],
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
            resolve: `@bonobolabs/gatsby-remark-images-custom-widths`,
            options: {
              withWebp: true,
              linkImagesToOriginal: true,
              maxWidth: 950,
              wrapperStyle: 'margin-left: 0!important; margin-right: 0!important; margin-top: 15px; margin-bottom: 15px;',
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
