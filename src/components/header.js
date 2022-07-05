/** @jsx jsx */

import { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box, Flex, Button } from 'theme-ui'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

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
      }}
      id="header"
    >
      <Box
        sx={{
          fontSize: 5,
          color: 'primary',
          marginRight: 6,
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
      <Box
        sx={{
          fontSize: 3,
          color: 'dark',
          fontFamily: 'body',
          marginRight: 6,
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
          marginRight: 6,
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
            visibility: (dropdown && focused) ? 'visible' : 'hidden',
            opacity: (dropdown && focused) ? 100 : 0,
            position: 'absolute',
            top: 'calc(100% + 13.5px)',
            bg: 'dark',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            paddingTop: 0,
            paddingBottom: 0,
            zIndex: 999,
            transition: '0.2 linear',
            width: 'max-content',
            filter: 'drop-shadow(0 0 0.75rem rgba(0,0,0,0.5))',
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
                paddingLeft: 2,
                paddingRight: 2,
                textDecoration: 'none',
                display: 'block',
                textDecoration: 'none',
                color: '#000000',
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
          marginRight: 6,
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
  )
}

export default Header
