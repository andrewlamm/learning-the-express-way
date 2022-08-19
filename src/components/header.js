/** @jsx jsx */

import { useCallback, useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box, Flex, Button, Input } from 'theme-ui'
import { FaCaretDown, FaCaretUp, FaBook, FaSearch, FaBookOpen } from 'react-icons/fa'
import { TbMap2 } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import { Global } from '@emotion/core'
import Hamburger from 'react-hamburger-menu'

const Header = ({ ...props }) => {

  /* Obtain data */
  const {
    allLessonListYaml: { nodes: lessons },
    allMdx: { edges: lessonNodes },
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
              rawBody
            }
          }
        }
      }
    `
  )

  /* Drop down menu */
  const [dropdown, setDropdown] = useState(false)
  const [extraDropdown, setExtraDropdown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let lessonNumber = 1 // Used for incrementation

  /* Link lesson title to URL */
  const titleToLink = {}
  lessonNodes.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  const titleToNumber = {}
  lessons.forEach(lesson => {
    titleToNumber[lesson.title] = lesson.extraLesson ? 'EX' : lessonNumber++
  })

  /* Separate extra lessons */
  const extraLessons = lessons.filter(lesson => lesson.extraLesson)
  const normalLessons = lessons.filter(lesson => !lesson.extraLesson)

  /* Search features */
  const [searchQuery, setSearchQuery] = useState({
    filteredData: [],
    query: "",
  })

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      setSearchQuery({
        filteredData: [],
        query: "",
      })
      return
    }

    const searchedData = lessonNodes.filter(lesson => {
      return (
        lesson.node.frontmatter.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        lesson.node.rawBody.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })

    searchedData.sort((a, b) => {
      const aVal = (titleToNumber[a.node.frontmatter.title] === "EX" || titleToNumber[a.node.frontmatter.title] === undefined) ? 999 : titleToNumber[a.node.frontmatter.title]
      const bVal = (titleToNumber[b.node.frontmatter.title] === "EX" || titleToNumber[b.node.frontmatter.title] === undefined) ? 999 : titleToNumber[b.node.frontmatter.title]
      return aVal - bVal
    })

    setSearchQuery({
      filteredData: searchedData,
      query: event.target.value
    })
  }


  const [searchOpen, setSearchOpen] = useState(false)

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
          zIndex: 2,
          fontFamily: 'heading',
      }}
      id="header"
    >
      <Global
        styles={{
          '&, *': {
            scrollbarColor: '#c1c1c0 #ffffff',
            scrollbarWidth: '16px',
            '::-webkit-scrollbar': {
              background: '#ffffff',
              width: '16px',
            },
            '::-webkit-scrollbar-track': {
              background: '#ffffff',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#c1c1c0',
              borderRadius: '16px',
              border: '4px solid #ffffff',
            },
            '::-webkit-scrollbar-button': {
              display: 'none',
            },
          },
        }}
      />
      <Box
        sx={{
          fontSize: [3, '21px', null],
          color: 'primary',
          bg: '#000000',
          marginRight: ['40px', null, '48px'],
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
          Express
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
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            fontSize: 3,
            color: '#ffffff',
            marginRight: ['32px', null, '40px'],
            textDecoration: 'none',
          }}
        >
          <Link
            to='/guide'
            sx={{
              color: '#ffffff',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <StaticImage src={'../images/map.png'} alt={"Icon"} width={20} sx={{mr: '5px',}} /> */}
            <TbMap2 size='26px' sx={{paddingRight: '5px'}} />
            Guide
          </Link>
        </Box>
        <Box
          sx={{
            position: 'relative',
            marginRight: ['32px', null, '40px'],
          }}
          tabIndex="0"
          onBlur={ (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
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
            {/* <StaticImage src={'../images/textbook.png'} alt={"Icon"} width={20} sx={{mr: '3px',}} /> */}
            <FaBook size='20px' sx={{paddingRight: '5px'}} />
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
            {normalLessons.map((lesson, i) => (
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
                  color: ['#ffffff', '#000000', null],
                  '&:hover': {
                    bg: 'highlight',
                  },
                  fontSize: 2,
                }}
              >
                {titleToNumber[lesson.title]}: {lesson.title}
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            marginRight: ['32px', null, '40px'],
          }}
          tabIndex="0"
          onBlur={ (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setExtraDropdown(false)
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
            onClick={ () => setExtraDropdown(!extraDropdown) }
            id="extraLessonDropdown"
          >
            <FaBookOpen size='24px' sx={{paddingRight: '5px'}} />
            Extras
            {!extraDropdown && <FaCaretDown size='1rem' sx={{paddingLeft: 2}} />}
            {extraDropdown && <FaCaretUp size='1rem' sx={{paddingLeft: 2}} />}
          </Button>
          <Box
            sx={{
              visibility: (extraDropdown) ? 'visible' : 'hidden',
              opacity: (extraDropdown) ? 100 : 0,
              display: (extraDropdown) ? 'inherit' : 'none',
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
            id="extraLessonDropdownList"
          >
            {extraLessons.map((lesson, i) => (
              <Link
                key={i}
                to={titleToLink[lesson.title]}
                sx={{
                  py: '3.5px',
                  paddingLeft: [0, '15px', null],
                  paddingRight: '20px',
                  textDecoration: 'none',
                  display: 'block',
                  color: ['#ffffff', '#000000', null],
                  '&:hover': {
                    bg: 'highlight',
                  },
                  fontSize: 2,
                }}
              >
                {titleToNumber[lesson.title]}: {lesson.title}
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: 3,
            color: '#ffffff',
            marginRight: ['32px', null, '40px'],
            textDecoration: 'none',
          }}
        >
          <Link
            to='/contributing'
            sx={{
              color: '#ffffff',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <StaticImage src={'../images/people.png'} alt={"Icon"} width={20} sx={{mr: '4px',}} /> */}
            <BsPeopleFill size='26px' sx={{paddingLeft: '5px', transform: 'scaleX(-1)',}} />
            Contributing
          </Link>
        </Box>
        <Flex
          sx={{
            position: 'relative',
            marginRight: [0, '40px', null],
            flexGrow: 1,
            justifyContent: ['start', 'end', null],
          }}
        >
          <Flex
            sx={{
              fontSize: 3,
              color: '#ffffff',
              textDecoration: 'none',
              flexGrow: 1,
              // flexDirection: 'column',
              justifyContent: ['start', 'end', null],
              width: ['100%', 'auto', null],
            }}
          >
            <Flex
              tabIndex="0"
              onBlur={ (event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setSearchOpen(false)
                }
              } }
              sx={{
                alignItems: 'center',
                width: ['100%', 'auto', null],
              }}
            >
              <Flex
                sx={{
                  flexDirection: ['column-reverse', null, 'row'],
                }}
              >
                <Input
                  placeholder='Search'
                  autoComplete="off"
                  type='search'
                  sx={{
                    fontSize: 2,
                    px: 2,
                    py: '1px',
                    border: 'none',
                    bg: '#a0a0a0',
                    display: searchOpen ? 'block' : ['none', 'block', null],
                    // maxWidth: '400px',
                    width: ['100%', '350px', null],
                    clipPath: searchOpen ? 'inset(0%)' : 'inset(0% 0% 0% 100%)',
                    transition: 'clip-path 0.2s linear',
                    mr: 2,
                    position: ['static', 'absolute', 'static'],
                    top: ['calc(100% + 13.5px)', null, '0'],
                    right: 0,
                    mt: [1, 0, null],
                  }}
                  onChange={handleInputChange}
                  id='searchBar'
                />
                <FaSearch
                  size='24px'
                  sx={{
                    paddingLeft: ['2px', null, '5px'],
                    transform: 'scaleX(-1)',
                    // display: searchOpen ? 'none' : 'block',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setSearchOpen(!searchOpen)
                    document.getElementById('searchBar').focus()
                    document.getElementById('searchBar').value = ""
                    setSearchQuery({
                      filteredData: [],
                      query: "",
                    })
                  }}
                />
              </Flex>
              <Flex
                sx={{
                  display: (searchOpen) ? 'inherit' : 'none',
                  position: 'absolute',
                  top: ['calc(100% + 13.5px)', 'calc(100% + 38px)', 'calc(100% + 13.5px)'],
                  left: ['0', '-324px', 'auto'],
                  bg: '#ffffff',
                  borderRadius: '5px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  zIndex: 999,
                  flexDirection: 'column',
                  width: ['auto', 'max-content', null],
                  filter: 'drop-shadow(0 0 0.75rem rgba(0,0,0,0.5))',
                }}
              >
                {searchQuery.query !== '' && searchQuery.filteredData.map((lesson, i) => (
                  <Link
                    key={i}
                    to={titleToLink[lesson.node.frontmatter.title]}
                    sx={{
                      py: '3.5px',
                      paddingLeft: '15px',
                      paddingRight: '20px',
                      textDecoration: 'none',
                      display: 'block',
                      color: '#000000',
                      '&:hover': {
                        bg: 'highlight',
                      },
                      fontSize: 2,
                    }}
                  >
                    {titleToNumber[lesson.node.frontmatter.title] || "EX"}: {lesson.node.frontmatter.title}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
