import { GoGitCompare } from '@react-icons/all-files/go/GoGitCompare';
import cls from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { SiteData } from '../../data/siteData';
import { PageImage } from '../PageImage/PageImage';
import styles from './Header.module.scss';

interface Props {
  globalData: SiteData;
  title: string;
  banner?: string;
  banner_source?: string;
  banner_position?: string;
}

export const Header: React.FC<Props> = ({
  banner,
  title,
  banner_source,
  banner_position,
  globalData,
}) => {
  return (
    <header className={styles.container}>
      {banner && (
        <>
          <PageImage
            src={banner}
            alt="banner"
            ratioHeight={4}
            ratioWidth={16}
            className={styles.image}
            objectPosition={banner_position}
          />
          {banner_source && <p className={styles.source}>{banner_source}</p>}
        </>
      )}
      <div className={cls(styles.wrapper, { [styles.noBanner]: !banner })}>
        <h1>
          {globalData.metaData.title} - {title}
        </h1>
        <nav>
          <GoGitCompare />
          {globalData.menuLinks.map((link) => (
            <Link key={link.name} href={link.link}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
