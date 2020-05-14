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
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogEntries = result.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.contentKey === 'blog',
  )

  blogEntries.forEach(({ node }) => {
    console.log('-------------------------------------------------------------')
    console.log({ slug: node.fields.slug })
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

  console.log({ numPages })
  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-list.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  }
}
