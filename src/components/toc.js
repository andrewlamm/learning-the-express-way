/** @jsx jsx */
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx, Box } from 'theme-ui'

import TableOfContentsLesson from './tocLesson'

const TableOfContents = ({ items, lessonTitle, ...props }) => {
  const {
    allLessonListYaml: { nodes: lessons },
    allMdx: { edges: lessonslug }
  } = useStaticQuery(
    graphql`
      query TableOfContentsLessons {
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

  const titleToLink = {}

  lessonslug.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  let lessonNumber = 1
  let lessonIsExtra = false

  lessons.forEach(lesson => {
    if (lesson.title === lessonTitle) {
      if (lesson.extraLesson)
        lessonIsExtra = true
    }
  })

  const tocLessonList = lessons.filter(lesson => (lesson.extraLesson === lessonIsExtra || (!lessonIsExtra && lesson.extraLesson === null)))

  return (
    <Box {...props}
      sx={{
        marginTop: '10px',
      }}
    >
      {tocLessonList.map((lesson, i) => (
        <Box
          key={i}
          sx={{
            display: 'block',
            textDecoration: 'none',
            color: '#000000',
            marginLeft: '15px',
            // paddingRight: 2,
            paddingLeft: 0,
            fontSize: 2,
            borderLeft: lesson.title === lessonTitle ? '3.2px solid' : '3.2px solid',
            borderLeftColor: lesson.title === lessonTitle ? 'accent' : 'transparent',
            fontFamily: 'heading',
          }}
        >
          <Link
            to={titleToLink[lesson.title]}
            sx={{
              textDecoration: 'none',
              color: '#000000',
              width: '100%',
              display: 'block',
              paddingLeft: '10px',
              paddingTop: 1,
              paddingBottom: 1,
              paddingRight: 2,
              bg: lesson.title === lessonTitle ? 'highlight' : 'transparent',
              '&:hover': {
                bg: 'highlight',
              },
            }}
          >
            {lesson.extraLesson ? 'EX' : lessonNumber++}: {lesson.title}
          </Link>
          {lesson.title === lessonTitle &&
            <TableOfContentsLesson
              items={items}
              root={true}
              depth={0}
              sx={{
                // paddingLeft: '10px',
                bg: 'sidebar',
                paddingBottom: '4px',
              }}
            />
          }
        </Box>
      ))}
    </Box>
  )
}

export default TableOfContents
