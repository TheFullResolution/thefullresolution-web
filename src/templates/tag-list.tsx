import React from 'react'
import { graphql } from 'gatsby'

const TagListTemplate: React.FC<any> = ({ data }) => {
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

export default TagListTemplate

export const query = graphql`
  query TagList($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { contentKey: { eq: "blog" }, tags: { in: [$tag] } }
      }
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
