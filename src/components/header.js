/** @jsx jsx */

import { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx, Box, Flex, Button } from 'theme-ui'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const Header = ({ ...props }) => {
  const {
    allLessonListYaml: { nodes: lessons }
  } = useStaticQuery(
    graphql`
      query LessonList {
        allLessonListYaml(sort: { fields: title }) {
          nodes {
            title
            link
          }
        }
      }
    `
  )

  const [dropdown, setDropdown] = useState(false)
  const [focused, setFocused] = useState(false)

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
        as='a'
        href='/'
        sx={{
          fontSize: 6,
          color: 'primary',
          marginRight: 6,
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        Learning the Express Way
      </Box>
      <Box
        sx={{
          position: 'relative',
          flexGrow: '1',
        }}
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
          onFocus={ () => setFocused(true) }
          onBlur={ () => { setFocused(false); setDropdown(false) } }
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
              as='a'
              href={lesson.link}
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
              {lesson.title}
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
