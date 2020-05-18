import React from 'react'
import { graphql } from 'gatsby'
import { HomeDataQuery } from '../graphql-types'

const BlogTemplate: React.FC<any> = ({ data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
