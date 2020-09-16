import React from 'react';
import { graphql } from 'gatsby';
import { BlogListQuery, SitePageContext } from '../graphql-types';
import { Page } from '../containers/Page/Page';
import { BlogList } from '../containers/BlogList/BlogList';

interface Props {
  data: BlogListQuery;
  pageContext: SitePageContext;
}

const BlogListTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const isFirstPage = pageContext.currentPage === 1;
  const isLastPage = pageContext.currentPage === pageContext.numPages;
  const previousPage =
    pageContext.currentPage - 1 === 1
      ? '/blog'
      : `/blog/${pageContext.currentPage - 1}`;
  const nextPage = `/blog/${pageContext.currentPage + 1}`;

  return (
    <Page
      page="Blog"
      banner={data.page.banner}
      banner_source={data.page.banner_source}
      banner_position={data.page.banner_position}
    >
      <BlogList
        data={data}
        pagination={{ isFirstPage, isLastPage, previousPage, nextPage }}
        tags={pageContext.tags}
      />
    </Page>
  );
};

export default BlogListTemplate;

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    blogList: allMarkdownRemark(
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
    page: blogList {
      intro
      banner
      banner_position
      banner_source
    }
  }
`;
