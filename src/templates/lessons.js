/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Seo from '../components/helmet'
import Header from '../components/header'
import TableOfContents from '../components/toc'
import Heading from '../components/textbook/heading'
import NavFooter from '../components/textbook/navFooter'

const LessonPage = ({ data: { mdx: post } }) => {
  const {
    frontmatter: { title },
    body,
    tableOfContents: { items: toc }
  } = post

  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Seo />
      <Header />
      <Flex
        sx={{
          paddingRight: 3,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            paddingTop: 2,
            width: '20%',
            flexDirection: 'row',
            bg: 'sidebar',
          }}
        >
          <TableOfContents items={toc} lessonTitle={title} />
        </Box>
        <Box
          sx={{
            width: '80%',
            marginTop: 4,
            marginLeft: 4,
          }}
        >
          <Heading lessonTitle={title} />
          <MDXRenderer>{body}</MDXRenderer>
          <NavFooter lessonTitle={title} />
        </Box>
      </Flex>
    </Flex>
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
