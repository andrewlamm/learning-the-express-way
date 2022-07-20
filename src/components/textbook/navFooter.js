/** @jsx jsx */

import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box, Flex } from 'theme-ui'

const NavFooter = ({ lessonTitle, ...props }) => {
  const {
    allLessonListYaml: { nodes: lessons },
    allMdx: { edges: lessonslug }
  } = useStaticQuery(
    graphql`
      query FooterLessonList {
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

  let lessonNumber = 0
  let currentLessonNumber = -1

  const titleToLink = {}

  lessonslug.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  let prevLesson = undefined
  let nextLesson = undefined

  lessons.map((lesson, i) => {
    if (!lesson.extraLesson) {
      lessonNumber++
    }
    if (lesson.title === lessonTitle) {
      currentLessonNumber = lessonNumber
    }
    else {
      if (currentLessonNumber === -1) {
				if (lesson.extraLesson) {
					prevLesson = {number: 'EX', title: lesson.title, link: titleToLink[lesson.title]}
				}
				else {
					prevLesson = {number: lessonNumber, title: lesson.title, link: titleToLink[lesson.title]}
				}
			}
			else if (nextLesson === undefined) {
				if (lesson.extraLesson) {
					nextLesson = {number: 'EX', title: lesson.title, link: titleToLink[lesson.title]}
				}
				else {
					nextLesson = {number: lessonNumber, title: lesson.title, link: titleToLink[lesson.title]}
				}
			}
    }
    return null
  })

  return (
    <Flex
      {...props}
      sx={{
          width: '100%',
          paddingTop: 2,
          paddingBottom: 2,
          py: 3,
          flexDirection: 'row',
      }}
    >
			<Flex
				sx={{
					width: '50%',
					flexDirection: 'column',
				}}
			>
				{prevLesson &&
					<>
            <Link
              to={titleToLink[prevLesson.title]}
              sx={{
                textDecoration: 'none',
                color: '#000000',
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                }}
              >
                Previous Lesson
              </Box>
              <Box>
                  Lesson {prevLesson.number}: {prevLesson.title}
              </Box>
            </Link>
					</>
				}
			</Flex>
			<Flex
				sx={{
					width: '50%',
					flexDirection: 'column',
					textAlign: 'right',
				}}
			>
				{nextLesson &&
					<>
            <Link
              to={titleToLink[nextLesson.title]}
              sx={{
                textDecoration: 'none',
                color: '#000000',
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                }}
              >
                Next Lesson
              </Box>
              <Box>
                  Lesson {nextLesson.number}: {nextLesson.title}
              </Box>
            </Link>
					</>
				}
			</Flex>
    </Flex>
  )
}

export default NavFooter
