const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const lessonTemplate = path.resolve('./src/templates/lessons.js')

  const lessons = await graphql(`
    query Lessons {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (lessons.errors) {
    reporter.panicOnBuild('Error querying for lessons')
    return
  }

  lessons.data.allMdx.nodes.forEach(({ frontmatter }) => {
    createPage({
      path: frontmatter.slug,
      component: lessonTemplate,
    })
  })
}
