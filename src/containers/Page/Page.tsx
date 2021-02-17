import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { PageHead } from '../../components/PageHead/PageHead';
import { typography } from '../../utils/typography';
import styles from './Page.module.scss';

interface Props {
  page: string;
  banner?: string;
  banner_source?: string;
  banner_position?: string;
  hideBanner?: boolean;
}

const globalStyles = typography.toString();

export const Page: React.FC<Props> = ({
  children,
  page,
  hideBanner,
  banner,
  banner_position,
  banner_source,
}) => (
  <div className={styles.container}>
    <Header
      page={page}
      hideBanner={hideBanner}
      banner={banner}
      banner_position={banner_position}
      banner_source={banner_source}
    />
    <PageHead page={page} styles={globalStyles} />
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
