import path from 'path';
import compareDesc from 'date-fns/compareDesc';
import toDate from 'date-fns/toDate';
import fs from 'fs-extra';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import * as React from 'react';
import { BlogList } from '../../containers/BlogList/BlogList';
import { Page } from '../../containers/Page/Page';
import { blogData, BlogData } from '../../data/blogData';
import { siteData, SiteData } from '../../data/siteData';
import { BlogListFilesData } from '../../types/BlogListFilesData';
import { checkIfMetaWorks } from '../../utils/checkIfMetaWorks';

interface Props {
  globalData: SiteData;
  data: BlogData;
  blogList?: BlogListFilesData[];
}

const BlogListPage: React.FC<Props> = ({ data, globalData, blogList }) => {
  return (
    <Page
      globalData={globalData}
      title={data.title}
      banner={data.banner}
      banner_source={data.banner_source}
    >
      <BlogList data={data} blogList={blogList} />
    </Page>
  );
};

export default BlogListPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPath = './src/pages/blog';

  const items = fs.readdirSync(blogPath);
  const blogList: BlogListFilesData[] = [];
  for (let i = 0; i < items.length; i++) {
    const filePath = path.join(blogPath, items[i]);

    const { ext } = path.parse(filePath);
    // Only process markdown/mdx files that are not index.tsx pages
    if (ext.startsWith('.md') && ext !== 'index') {
      try {
        const file = fs.readFileSync(filePath, 'utf8');

        const { data } = matter(file);
        if (!checkIfMetaWorks(data)) {
          throw Error(`Meta is not correct ${JSON.stringify(data, null, 2)}`);
        }

        blogList.push({
          meta: { ...data, date: toDate(data.date).toISOString() },
          url: filePath
            .replace(/^src\/pages\/blog/, '/blog')
            .replace(/.mdx?$/, '')
            .replace(/.tsx?$/, ''),
        });
      } catch (e) {
        console.log(`Error reading frontmatter of ${filePath}`, e);
      }
    }
  }

  return {
    props: {
      blogList: blogList.sort((a, b) =>
        compareDesc.arguments(a.meta.date, b.meta.date),
      ),
      data: blogData,
      globalData: siteData,
    },
  };
};
