/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'

import Seo from '../components/helmet'
import Header from '../components/header'
import TableOfContents from '../components/toc'
import Heading from '../components/textbook/heading'
import NavFooter from '../components/textbook/navFooter'

import Warning from '../components/textbook/warning.js'
import OtherInfo from '../components/textbook/otherInfo'

const mdxComponents = { Warning, OtherInfo }

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
      <Global
        styles={{
          '.gatsby-highlight': {
            overflow: 'auto',
            padding: '1rem',
            backgroundColor: '#eeeeee',
            display: 'flex',
          }
        }}
      />
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
          <Box
            sx={{
              top: 0,
              position: 'sticky',
            }}
          >
            <TableOfContents items={toc} lessonTitle={title} />
          </Box>
        </Box>
        <Flex
          sx={{
            width: '80%',
            marginTop: 4,
            marginLeft: 4,
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '960px',
            }}
          >
            <Heading lessonTitle={title} />
            <MDXProvider components={mdxComponents}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            <NavFooter lessonTitle={title} />
          </Box>
        </Flex>
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
