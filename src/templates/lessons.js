/** @jsx jsx */

import { useCallback, useState } from 'react'
import { jsx, Flex, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'

import Hamburger from 'react-hamburger-menu'

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

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
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
            marginBottom: '0.5rem',
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
            width: isOpen ? ['80%', '33%', '20%'] : ['0%', '33%', '20%'],
            flexDirection: 'row',
            bg: 'sidebar',
            display: isOpen ? ['block', 'block', 'block'] : ['none', 'block', 'block'],
            position: ['fixed', 'inherit', null],
            top: 0,
            height: ['100vh', 'auto', null],
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              top: 0,
              position: ['sticky', 'sticky', null],
            }}
          >
            <TableOfContents items={toc} lessonTitle={title} />
          </Box>
        </Box>
        <Flex
          sx={{
            width: ['100%', '67%', '80%'],
            marginTop: [3, 4, 4],
            marginLeft: [2, 4, 4],
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '960px',
            }}
          >
            <Box
              sx={{
                position: 'fixed',
                left: isOpen ? '80%' : 0,
                bottom: '2rem',
                py: 2,
                width: '24px',
                pr: 2,
                bg: 'sidebar',
                borderRadius: '0px 4px 4px 0px',
                display: ['block', 'none', null],
              }}
            >
              <Hamburger
                isOpen={isOpen}
                menuClicked={useCallback(() => {
                  setIsOpen((open) => !open)
                }, [])}
                width={20}
                height={16}
                strokeWidth={2}
                animationDuration={0.25}
                color='#000000'
                sx={{
                  display: ['flex', 'none', null],
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  marginRight: 3,
                }}
              />
            </Box>
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
