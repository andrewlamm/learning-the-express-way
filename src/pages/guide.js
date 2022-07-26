/** @jsx jsx */

import { jsx, Flex, Box, Themed } from 'theme-ui'
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
          mx: 4,
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {guides.map((section, i) => (
            <Flex
              key={i}
              sx={{
                width: '80%',
                mb: '30px',
                mt: '20px',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
              <Themed.h1
                sx={{
                  mt: 2,
                  mb: 1,
                  fontSize: [5, 7, null],
                  textAlign: 'center',
                  fontFamily: 'heading',
                }}
              >
                {section.name}
              </Themed.h1>
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
                      mt: 1,
                      mb: 1,
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
            </Flex>
          ))}
        </Flex>
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
