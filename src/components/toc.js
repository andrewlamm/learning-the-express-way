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

  const titleToLink = {}

  lessonslug.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  return (
    <Box {...props}>
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
            fontSize: 3,
            borderLeft: lesson.title === lessonTitle ? '3px solid' : '0px solid',
            borderLeftColor: 'primary',
          }}
        >
          <Link
            to={titleToLink[lesson.title]}
            sx={{
              textDecoration: 'none',
              color: '#000000',
            }}
          >
            Lesson {lesson.extraLessson ? 'EX' : i+1}: {lesson.title}
          </Link>
          {lesson.title === lessonTitle && <TableOfContentsLesson items={items} root={true} /> }
        </Box>
      ))}
    </Box>
  )
}

export default TableOfContents
