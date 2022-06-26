/** @jsx jsx */

import { jsx, Flex, Box, Heading } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Seo from '../components/helmet'
import Header from '../components/header'
import TableOfContents from '../components/toc'

const LessonPage = ({ data: { mdx: post } }) => {
  const {
    frontmatter: { title },
    body,
    tableOfContents: { items: toc }
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
      <Flex
        sx={{
          px: 3,
        }}
      >
        <Box
          sx={{
            paddingTop: 2,
            width: '20%',
            flexDirection: 'row',
          }}
        >
          <TableOfContents items={toc} lessonTitle={title} />
        </Box>
        <Box
          sx={{
            width: '80%'
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </Flex>
    </Box>
  )
}

export default LessonPage

export const query = graphql`
  query Lesson($path: String) {
    mdx(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      body
      tableOfContents(maxDepth: 2)
    }
  }
`
