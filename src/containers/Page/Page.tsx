import Head from 'next/head';
import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { getGoogleFontLink, typography } from '../../utils/typography';
import styles from './Page.module.scss';

interface Props {
  title: string;
  banner: string;
  banner_source: string;
  banner_position?: string;
  hideBanner?: boolean;
}

const googleFonts = getGoogleFontLink(typography);
const globalStyles = typography.toString();

export const Page: React.FC<Props> = ({
  children,
  title,
  hideBanner,
  banner,
  banner_position,
  banner_source,
}) => (
  <div className={styles.container}>
    <Header
      title={title}
      hideBanner={hideBanner}
      banner={banner}
      banner_position={banner_position}
      banner_source={banner_source}
    />
    <Head>
      <title>{title}</title>
      <style>{globalStyles}</style>
      <link
        href={`//fonts.googleapis.com/css?family=${googleFonts}&display=swap`}
        rel={'stylesheet'}
        type={'text/css'}
      />
    </Head>
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
