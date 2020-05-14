import React from 'react'

import {graphql} from 'gatsby'

const BlogListTemplate: React.FC<any> = ({ data, pageContext }) => {
  console.log({pageContext})

  const isFirstPage = pageContext.currentPage === 1
  const isLastPage = pageContext.currentPage === pageContext.numPages
  const previousPage =
    pageContext.currentPage - 1 === 1
      ? '/blog'
      : `/blog/${pageContext.currentPage - 1}`
  const nextPage = `/blog/${pageContext.currentPage + 1}`

  return (
    <div>
      {data?.allMarkdownRemark?.edges.map((entry) => (
        <h1 key={entry.node.frontmatter.title}>
          {entry.node.frontmatter.title}
        </h1>
      ))}
    </div>
  )
}

export default BlogListTemplate

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
