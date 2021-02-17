import React from 'react';
import { BlogList } from '../containers/BlogList/BlogList';
import { Page } from '../containers/Page/Page';

interface Props {
  data: any;
  pageContext: any;
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
