/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { graphql, Link } from 'gatsby'

import Seo from '../components/helmet'
import Header from '../components/header'

const GuidePage = ({ data: { allGuideYaml: { nodes: guides } , allLessonListYaml: { nodes: lessons } , allMdx: { edges: mdxFrontmatter }}}) => {
  let guideSection = 0
  for (let i = 0; i < lessons.length; i++) {
    if (guideSection < guides.length && lessons[i].title === guides[guideSection].firstLesson) {
      guides[guideSection]["lessons"] = []
      guideSection += 1
    }

    guides[guideSection-1]["lessons"].push(lessons[i])
  }

  const titleToLink = {}

  mdxFrontmatter.forEach(lesson => {
    titleToLink[lesson.node.frontmatter.title] = lesson.node.frontmatter.slug
  })

  let lessonNumber = 1

  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
        alignItems: 'center',
      }}
    >
      <Seo />
      <Header />
      <Box
        sx={{
          my: 2,
          maxWidth: '960px',
          mx: 2,
        }}
      >
        <Box>
          {guides.map((section, i) => (
            <Box
              key={i}
              sx={{
                width: '100%',
              }}
            >
              <Box
                sx={{
                  mt: 2,
                  mb: 1,
                  fontSize: [5, 7, null],
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                {section.name}
              </Box>
              <Box>
                {section.description}
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                {section.lessons.map((lesson, j) => (
                  <Box
                    key={j}
                    sx={{
                      my: 1,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: [3, 4, null],
                      }}
                    >
                      <Link
                        to={titleToLink[lesson.title]}
                        sx={{
                          textDecoration: 'none',
                          color: '#000000',
                        }}
                      >
                        <span sx={{fontWeight: 700,}}>Lesson {lesson.extraLesson ? 'EX' : lessonNumber++}:&nbsp;</span>{lesson.title}
                      </Link>
                    </Box>
                    <Box>
                      {lesson.description}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default GuidePage

export const query = graphql`
  query Guide {
    allGuideYaml {
      nodes {
        name
        description
        firstLesson
      }
    }
    allLessonListYaml {
      nodes {
        title
        description
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
