import React from 'react'
import { graphql } from 'gatsby'
import { BlogQuery } from '../graphql-types'
import { Page } from '../containers/Page/Page'
import { BlogEntry } from '../containers/BlogEntry/BlogEntry'

interface Props {
  data: BlogQuery
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Page page={data.markdownRemark.frontmatter.title} hideBanner={true}>
      <BlogEntry data={data} />
    </Page>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        tags
        date(formatString: "MMMM D, YYYY")
        banner
      }
    }
  }
`
