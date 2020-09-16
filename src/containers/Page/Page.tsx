import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { MetaData } from '../../components/MetaData/MetaData';
import { Footer } from '../../components/Footer/Footer';
import * as styles from './Page.module.scss';

interface Props {
  page: string;
  banner?: string;
  banner_source?: string;
  banner_position?: string;
  hideBanner?: boolean;
}

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
    <MetaData page={page} />
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
