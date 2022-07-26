/** @jsx jsx */

import { useCallback, useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box, Flex, Button } from 'theme-ui'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import Hamburger from 'react-hamburger-menu'

const Header = ({ ...props }) => {

  /* Obtain data */
  const {
    allLessonListYaml: { nodes: lessons },
    allMdx: { edges: lessonslug }
  } = useStaticQuery(
    graphql`
      query LessonList {
        allLessonListYaml {
          nodes {
            title
            extraLesson
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

  /* Drop down menu */
  const [dropdown, setDropdown] = useState(false)
  const [focused, setFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let lessonNumber = 1 // Used for incrementation

  /* Link lesson title to URL */
  const titleToLink = {}
  lessonslug.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  return (
    <Flex // Header
      {...props}
      sx={{
          width: '100%',
          background: '#000000',
          paddingLeft: 3,
          paddingTop: '10px',
          paddingBottom: '10px',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          zIndex: 0,
          fontFamily: 'heading',
      }}
      id="header"
    >
      <Box
        sx={{
          fontSize: [3, '21px', null],
          color: 'primary',
          bg: '#000000',
          marginRight: '48px',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        <Link
          to='/'
          sx={{
            color: 'primary',
            textDecoration: 'none',
            bg: '#000000',
          }}
        >
          Learning the Express Way
        </Link>
      </Box>
      <Hamburger // Mobile only
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
      <Flex // Links in header
        sx={{
          flexDirection: ['column', 'row', null],
          position: ['absolute', 'static', null],
          left: 0,
          top: '100%',
          width: ['100%', 'auto', null],
          px: [3, 0, null],
          background: ['#000000', 'initial', null],
          py: [2, 0, null],
          borderTop: ['1px solid', 'none', null],
          borderColor: '#ffffff',
          transform: isOpen ? 'translateY(0)' : ['translateY(-200%)', 'translateY(0)', null],
          transition: 'transform 0.2s linear',
          zIndex: -1,
          fontFamily: 'heading',
        }}
      >
        <Box
          sx={{
            fontSize: 3,
            color: '#ffffff',
            marginRight: '40px',
            textDecoration: 'none',
          }}
        >
          <Link
            to='/guide'
            sx={{
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            Guide
          </Link>
        </Box>
        <Box
          sx={{
            position: 'relative',
            marginRight: '40px',
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
              color: '#ffffff',
              background: '#000000',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'heading',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
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
              bg: ['#000000', '#ffffff', null],
              borderRadius: '5px',
              paddingTop: '7px',
              paddingBottom: '7px',
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
                  py: '3.5px',
                  // ':last-child': {
                  //   paddingBottom: '12px',
                  // },
                  // ':first-child': {
                  //   paddingTop: '12px',
                  // },
                  paddingLeft: [0, '15px', null],
                  paddingRight: '20px',
                  textDecoration: 'none',
                  display: 'block',
                  color: ['dark', '#000000', null],
                  '&:hover': {
                    bg: 'highlight',
                  },
                  fontSize: 2,
                }}
              >
                {lesson.extraLesson ? 'EX' : lessonNumber++}: {lesson.title}
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: 3,
            color: '#ffffff',
            marginRight: 4,
            textDecoration: 'none',
          }}
        >
          <Link
            to='/contributing'
            sx={{
              color: '#ffffff',
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
