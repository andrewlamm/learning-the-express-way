/** @jsx jsx */

import { graphql, useStaticQuery } from 'gatsby'
import { jsx, Box, Flex } from 'theme-ui'

const Heading = ({ lessonTitle, ...props }) => {
  const {
    allLessonListYaml: { nodes: lessons },
  } = useStaticQuery(
    graphql`
      query HeadingLessonList {
        allLessonListYaml {
          nodes {
            title
            extraLessson
          }
        }
      }
    `
  )

  let lessonNumber = 0
  let currentLessonNumber = 0

  lessons.map((lesson, i) => {
    if (!lesson.extraLessson) {
      lessonNumber++
    }
    if (lesson.title === lessonTitle) {
      currentLessonNumber = lesson.extraLessson ? 'EX' : lessonNumber
    }
    return null
  })

  return (
    <Flex
      {...props}
      sx={{
          width: '100%',
          bg: 'heading',
          px: 3,
          paddingTop: 2,
          paddingBottom: 2,
          py: 3,
          borderLeft: '4px solid',
          borderColor: '#000000',
          flexDirection: 'column',
          // width: '900px'
      }}
    >
      <Box
        sx={{
            fontSize: 4,
            fontWeight: 900,
        }}
      >
        LESSON {currentLessonNumber}
      </Box>
      <Box
				sx={{
					marginTop: 1,
					fontSize: [7, 8, null],
					color: 'primary',
					fontWeight: 100,
				}}
    	>
        {lessonTitle}
      </Box>
    </Flex>
  )
}

export default Heading
