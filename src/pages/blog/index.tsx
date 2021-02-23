import path from 'path';
import fs from 'fs-extra';
import { GetStaticProps } from 'next';
import * as React from 'react';
import remark from 'remark';
import mdx from 'remark-mdx';
import { Page } from '../../containers/Page/Page';
import { siteData, SiteData } from '../../data/siteData';

interface Props {
  globalData: SiteData;
}

const BlogList: React.FC<Props> = ({ globalData }) => {
  return (
    <Page title="Blog List" globalData={globalData}>
      YOLO
    </Page>
  );
};

export default BlogList;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPath = './src/pages/blog';
  const items = fs.readdirSync(blogPath);
  const arr = [];
  for (let i = 0; i < items.length; i++) {
    const filePath = path.join(blogPath, items[i]);

    const { ext } = path.parse(filePath);
    // Only process markdown/mdx files that are not index.tsx pages
    if (ext.startsWith('.md') && ext !== 'index') {
      try {
        const file = fs.readFileSync(filePath, 'utf8');

        const contents = await remark().use(mdx).process(file);

        arr.push(contents);
      } catch (e) {
        console.log(`Error reading frontmatter of ${filePath}`, e);
      }
    }
  }

  console.log(arr);

  return {
    props: {
      globalData: siteData,
    },
  };
};
