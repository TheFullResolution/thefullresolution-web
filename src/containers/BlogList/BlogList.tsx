import { FaReadme } from '@react-icons/all-files/fa/FaReadme';
import Link from 'next/link';
import React from 'react';
import type { BlogData } from '../../data/blogData';
import { BlogListFilesData } from '../../types/BlogListFilesData';
import styles from './BlogList.module.scss';

interface Props {
  data: BlogData;
  blogList?: BlogListFilesData[];
}

export const BlogList: React.FC<Props> = ({ data, blogList = [] }) => {
  return (
    <div>
      <p>{data.intro}</p>
      <ul className={styles.list}>
        {blogList?.map((el) => (
          <li key={el.meta.title}>
            <FaReadme />
            <Link href={el.url} passHref>
              <a>
                <h2 className={styles.heading}>{el.meta.title}</h2>
                <p>{el.meta.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
