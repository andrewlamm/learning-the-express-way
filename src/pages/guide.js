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
          width: '100%',
          // mx: 4,
          // fontFamily: 'Arial, sans-serif',
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
                width: '72.5%',
                mb: '10px',
                mt: '20px',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
              <Themed.h1
                sx={{
                  mt: '12px',
                  mb: '13px',
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
                      mt: '3px',
                      mb: '9px',
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
                        <span sx={{fontWeight: 900, fontFamily: 'heading', fontSize: '16.5px'}}>LESSON {lesson.extraLesson ? 'EX' : lessonNumber++}:&nbsp;</span><span sx={{fontWeight: 800, fontFamily: 'heading', fontSize: '17.5px',}}>{lesson.title}</span>
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
