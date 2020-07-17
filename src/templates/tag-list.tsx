import React from 'react'
import { graphql } from 'gatsby'
import { SitePageContext, TagListQuery } from '../graphql-types'
import { Page } from '../containers/Page/Page'
import { TagList } from '../containers/TagList/TagList'

interface Props {
  data: TagListQuery
  pageContext: SitePageContext
}

const TagListTemplate: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <Page page={`${pageContext.tag} Blog Entries`}>
      <TagList
        data={data}
        tags={pageContext.tags}
        currentTag={pageContext.tag}
      />
    </Page>
  )
}

export default TagListTemplate

export const query = graphql`
  query TagList($tag: String!) {
    blogList: allMarkdownRemark(
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
            tags
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt(format: MARKDOWN)
        }
      }
    }
  }
`
