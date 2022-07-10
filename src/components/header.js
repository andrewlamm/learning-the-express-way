/** @jsx jsx */

import { useCallback, useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box, Flex, Button } from 'theme-ui'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import Hamburger from 'react-hamburger-menu'

const Header = ({ ...props }) => {
  const {
    allLessonListYaml: { nodes: lessons },
    allMdx: { edges: lessonslug }
  } = useStaticQuery(
    graphql`
      query LessonList {
        allLessonListYaml {
          nodes {
            title
            extraLessson
          }
        }
        allMdx {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  const [dropdown, setDropdown] = useState(false)
  const [focused, setFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let lessonNumber = 1

  const titleToLink = {}

  lessonslug.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  return (
    <Flex
      {...props}
      sx={{
          width: '100%',
          background: '#000000',
          paddingLeft: 3,
          paddingTop: 2,
          paddingBottom: 2,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative'
      }}
      id="header"
    >
      <Box
        sx={{
          fontSize: [3, 5, 5],
          color: 'primary',
          marginRight: 4,
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        <Link
          to='/'
          sx={{
            color: 'primary',
            textDecoration: 'none',
          }}
        >
          Learning the Express Way
        </Link>
      </Box>
      <Hamburger
        isOpen={isOpen}
        menuClicked={useCallback(() => {
          setIsOpen((open) => !open)
        }, [])}
        width={20}
        height={16}
        strokeWidth={2}
        animationDuration={0.25}
        color='#ffffff'
        sx={{
          display: ['flex', 'none', null],
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: 3,
        }}
      />
      <Flex
        sx={{
          flexDirection: ['column', 'row', null],
          display: [isOpen ? 'flex' : 'none', 'flex', 'flex'],
          position: ['absolute', 'static', null],
          left: 0,
          top: '100%',
          width: ['100%', 'auto', null],
          px: [3, 0, null],
          background: ['#000000', 'initial', null],
          py: [2, 0, null],
          borderTop: ['1px solid', 'none', null],
          borderColor: '#ffffff'
        }}
      >
        <Box
          sx={{
            fontSize: 3,
            color: 'dark',
            fontFamily: 'body',
            marginRight: 4,
            textDecoration: 'none',
          }}
        >
          <Link
            to='/guide'
            sx={{
              color: 'dark',
              textDecoration: 'none',
            }}
          >
            Guide
          </Link>
        </Box>
        <Box
          sx={{
            position: 'relative',
            marginRight: 4,
          }}
          onFocus={ () => setFocused(true) }
          onBlur={ (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocused(false)
              setDropdown(false)
            }
          } }
        >
          <Button
            sx={{
              fontSize: 3,
              color: 'dark',
              fontFamily: 'body',
              background: '#000000',
              padding: 0,
              cursor: 'pointer',
            }}
            onClick={ () => setDropdown(!dropdown) }
            id="lessonDropdown"
          >
            Lessons
            {!dropdown && <FaCaretDown size='1rem' sx={{paddingLeft: 2}} />}
            {dropdown && <FaCaretUp size='1rem' sx={{paddingLeft: 2}} />}
          </Button>
          <Box
            sx={{
              visibility: (dropdown) ? 'visible' : 'hidden',
              opacity: (dropdown) ? 100 : 0,
              display: (dropdown) ? 'inherit' : 'none',
              position: ['static', 'absolute', null],
              top: 'calc(100% + 13.5px)',
              bg: ['#000000', 'dark', null],
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              paddingTop: 0,
              paddingBottom: 0,
              zIndex: 999,
              transition: '0.2 linear',
              width: ['auto', 'max-content', null],
              filter: 'drop-shadow(0 0 0.75rem rgba(0,0,0,0.5))',
              // height: '200px',
              // overflowY: 'scroll',
            }}
            id="lessonDropdownList"
          >
            {lessons.map((lesson, i) => (
              <Link
                key={i}
                to={titleToLink[lesson.title]}
                sx={{
                  paddingTop: 1,
                  paddingBottom: 1,
                  paddingLeft: [0, 2, null],
                  paddingRight: 2,
                  textDecoration: 'none',
                  display: 'block',
                  color: ['dark', '#000000', null],
                  '&:hover': {
                    bg: 'secondarydark',
                  },
                  fontSize: 2,
                }}
              >
                Lesson {lesson.extraLessson ? 'EX' : lessonNumber++}: {lesson.title}
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: 3,
            color: 'dark',
            fontFamily: 'body',
            marginRight: 4,
            textDecoration: 'none',
          }}
        >
          <Link
            to='/contributing'
            sx={{
              color: 'dark',
              textDecoration: 'none',
            }}
          >
            Contributing
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
