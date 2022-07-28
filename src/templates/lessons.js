/** @jsx jsx */

import { useCallback, useState, useEffect, useRef } from 'react'
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

import Warning from '../components/textbook/warning'
import OtherInfo from '../components/textbook/otherInfo'
import TipBox from '../components/textbook/tipBox'
import DirectorBox from '../components/textbook/director'

const mdxComponents = { Warning, OtherInfo, TipBox, DirectorBox }

const LessonPage = ({ data: { mdx: post } }) => {
  const {
    frontmatter: { title },
    body,
    tableOfContents: { items: toc }
  } = post

  /* Change sidebar height depending on whether or not the header is visible */

  const headerRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(() => {
    if (window.screen.width > 640) {
      const sidebar = document.getElementById('sidebar')
      const header = document.getElementById('header') // Use getElementByID as the Ref occasionally breaks when scrolling to the bottom of the page?
      sidebar.style.maxHeight = `calc(100vh - ${header.offsetHeight - window.scrollY}px)`
      sidebar.style.minHeight = `calc(100vh - ${header.offsetHeight - window.scrollY}px)`
      document.addEventListener('scroll', _ => {
        // console.log(window.scrollY)
        // console.log(header.offsetHeight)
        if (window.scrollY < header.offsetHeight) {
          sidebar.style.maxHeight = `calc(100vh - ${header.offsetHeight - window.scrollY}px)`
          sidebar.style.minHeight = `calc(100vh - ${header.offsetHeight - window.scrollY}px)`
        }
        else {
          sidebar.style.maxHeight = '100vh'
          sidebar.style.minHeight = '100vh'
        }
      })
    }
  })

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Seo />
      <Box ref={headerRef}>
        <Header />
      </Box>
      <Global
        styles={{
          '.gatsby-highlight': {
            //overflow: 'auto',
            padding: '1rem',
            backgroundColor: '#f2f2f2',
            display: 'flex',
            marginBottom: '0.5rem',
            '*': {
              scrollbarColor: '#c1c1c0 #f2f2f2',
              scrollbarWidth: '16px',
              '::-webkit-scrollbar': {
                background: '#f2f2f2',
                width: '16px',
              },
              '::-webkit-scrollbar-track': {
                background: '#f2f2f2',
              },
              '::-webkit-scrollbar-thumb': {
                background: '#c1c1c0',
                borderRadius: '16px',
                border: '4px solid #f2f2f2',
              },
              '::-webkit-scrollbar-button': {
                display: 'none',
              },
            }
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
            pt: 2,
            pb: 3,
            width: ['80%', '33%', '21%'],
            // flexDirection: 'row',
            height: '100%',
            minHeight: '100vh',
            maxHeight: '100vh',
            alignSelf: 'flex-start',
            bg: 'sidebar',
            display: ['block', 'block', 'block'],
            position: ['fixed', 'sticky', null],
            overflowY: 'auto',
            top: 0,
            bottom: 0,
            transform: isOpen ? 'translateX(0)' : ['translateX(-100%)', 'translateX(0)', null],
            transition: 'transform 0.2s linear',
            // height: ['100vh', 'auto', null],
            zIndex: 1,
          }}
          id='sidebar'
          ref={sidebarRef}
        >
          <Box
            sx={{
              top: 0,
              width: '100%',
              // position: ['sticky', 'sticky', null],
            }}
          >
            <TableOfContents items={toc} lessonTitle={title} />
          </Box>
        </Box>
        <Flex
          sx={{
            width: ['100%', '67%', '79%'],
            marginTop: [3, '40px', null],
            marginLeft: [3, '50px', null],
            marginRight: [3, '50px', null],
            // justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              // maxWidth: '960px',
            }}
          >
            <Box // Mobile only
              sx={{
                position: 'fixed',
                left: isOpen ? '80%' : 0,
                transition: 'left 200ms linear',
                bottom: '2rem',
                py: 2,
                width: '24px',
                pr: 2,
                bg: 'sidebar',
                borderRadius: '0px 4px 4px 0px',
                border: '1px solid black',
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
