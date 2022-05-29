/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Seo from '../components/helmet'
import Header from '../components/header'

const LessonPage = ({ data: { mdx: post } }) => {
  const {
    frontmatter: { title, slug },
    body,
  } = post

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Seo />
      <Header />
      <Box
        sx={{
          px: 3,
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Box>
  )
}

export default LessonPage

export const query = graphql`
  query Lessons {
    mdx {
      frontmatter {
        title
      }
      body
    }
  }
`
