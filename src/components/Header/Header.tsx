import { GoGitCompare } from '@react-icons/all-files/go/GoGitCompare';
import cls from 'classnames';
import * as React from 'react';
import { Markdown } from '../Markdown/Markdown';
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg';
import styles from './Header.module.scss';

interface Props {
  page: string;
  hideBanner?: boolean;
  banner?: string;
  banner_source?: string;
  banner_position?: string;
}

export const Header: React.FC<Props> = ({
  page,
  hideBanner,
  banner,
  banner_source,
  banner_position,
}) => {
  return (
    <header className={styles.container}>
      {/*{!hideBanner && (*/}
      {/*  <>*/}
      {/*    <ResponsiveImg*/}
      {/*      image={banner ?? metaData.banner}*/}
      {/*      alt="banner"*/}
      {/*      className={styles.image}*/}
      {/*      imgStyle={{ objectPosition: banner_position ?? '' }}*/}
      {/*    />*/}
      {/*    {(banner_source || metaData.banner_source) && (*/}
      {/*      <Markdown className={styles.source}>*/}
      {/*        {banner_source ?? metaData.banner_source}*/}
      {/*      </Markdown>*/}
      {/*    )}*/}
      {/*  </>*/}
      {/*)}*/}
      {/*<div className={cls(styles.wrapper, { [styles.noBanner]: hideBanner })}>*/}
      {/*<h1>*/}
      {/*  {metaData.title} - {page}*/}
      {/*</h1>*/}
      {/*<nav>*/}
      {/*  <GoGitCompare />*/}
      {/*  {site.siteMetadata.menuLinks.map((link) => (*/}
      {/*    <Link*/}
      {/*      key={link.name}*/}
      {/*      to={link.link}*/}
      {/*      activeClassName={styles.active}*/}
      {/*    >*/}
      {/*      {link.name}*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</nav>*/}
      {/*</div>*/}
    </header>
  );
};
