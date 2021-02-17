import React from 'react';
import { Markdown } from '../../components/Markdown/Markdown';
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg';
import { Tags } from '../../components/Tags/Tags';
import { BlogQuery } from '../../graphql-types';
import styles from './BlogEntry.module.scss';

interface Props {
  data: BlogQuery;
}

export const BlogEntry: React.FC<Props> = ({ data }) => {
  const {
    banner,
    banner_position,
    banner_source,
    date,
    tags,
  } = data.markdownRemark.frontmatter;
  return (
    <div className={styles.container}>
      <ResponsiveImg
        image={banner}
        alt="banner"
        className={styles.image}
        imgStyle={{ objectPosition: banner_position }}
      />
      <Markdown className={styles.source}>{banner_source}</Markdown>
      <div className={styles.extraInfo}>
        <Tags tags={tags} />
        <span>{date}</span>
      </div>
      <Markdown>{data.markdownRemark.rawMarkdownBody}</Markdown>
    </div>
  );
};
