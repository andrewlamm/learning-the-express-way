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
        defualtLayouts: {
          default: require.resolve('./src/templates/lessons.js')
        },
        extensions: ['.mdx', '.md'],
      },
    },
  ],
}
