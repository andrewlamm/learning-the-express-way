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
    >
      <Box
        sx={{
          fontSize: 6,
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
          position: 'relative',
          flexGrow: '1',
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
            fontSize: 5,
            color: 'dark',
            fontFamily: 'body',
            background: '#000000',
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={ () => setDropdown(!dropdown) }
        >
          Lessons
          {!dropdown && <FaCaretDown size='1.2rem' sx={{paddingLeft: 2}} />}
          {dropdown && <FaCaretUp size='1.2rem' sx={{paddingLeft: 2}} />}
        </Button>
        <Box
          sx={{
            visibility: (dropdown && focused) ? 'visible' : 'hidden',
            opacity: (dropdown && focused) ? 100 : 0,
            position: 'absolute',
            top: 'calc(100% + 10px)',
            bg: 'dark',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            paddingTop: 0,
            paddingBottom: 0,
            zIndex: 999,
            transition: '0.2 linear'
          }}
        >
          {lessons.map((lesson, i) => (
            <Box
              key={i}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: '#000000',
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
                paddingRight: 2,
                '&:hover, &:focus': {
                  bg: 'secondarydark',
                },
                fontSize: 3,
              }}
            >
              <Link
                to={titleToLink[lesson.title]}
                sx={{
                  textDecoration: 'none',
                  color: '#000000',
                }}
              >
                Lesson {lesson.extraLessson ? 'EX' : lessonNumber++}: {lesson.title}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
