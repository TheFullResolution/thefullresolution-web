import React from 'react';
import { BlogEntry } from '../containers/BlogEntry/BlogEntry';
import { Page } from '../containers/Page/Page';

interface Props {
  data: any;
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Page page={data.markdownRemark.frontmatter.title} hideBanner={true}>
      <BlogEntry data={data} />
    </Page>
  );
};

export default BlogTemplate;
