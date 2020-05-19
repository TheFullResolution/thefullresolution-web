/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogEntries = result.data.postsRemark.edges.filter(
    ({ node }) => node.frontmatter.contentKey === 'blog',
  )

  blogEntries.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const postsPerPage = 5
  const numPages = Math.ceil(blogEntries.length / postsPerPage)

  const tags = result.data.tagsGroup.group.map((tag) => ({
    ...tag,
    url: `/tags/${encodeURI(tag.fieldValue)}/`,
  }))

  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-list.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        tags
      },
    })
  }

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: tag.url,
      component: path.resolve('./src/templates/tag-list.tsx'),
      context: {
        tags,
        tag: tag.fieldValue,
        count: tag.totalCount,
      },
    })
  })
}
