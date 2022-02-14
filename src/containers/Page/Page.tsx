import Head from 'next/head';
import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { SiteData } from '../../data/siteData';
import { getGoogleFontLink, typography } from '../../utils/typography';
import styles from './Page.module.scss';

interface Props {
  title: string;
  globalData: SiteData;
  banner?: string;
  banner_source?: string;
  banner_position?: string;
}

const googleFonts = getGoogleFontLink(typography);
const globalStyles = typography.toString();

export const Page: React.FC<Props> = ({
  children,
  title,
  banner,
  banner_position,
  banner_source,
  globalData,
}) => (
  <div className={styles.container}>
    <Header
      title={title}
      globalData={globalData}
      banner={banner}
      banner_position={banner_position}
      banner_source={banner_source}
    />
    <Head>
      <title>
        {globalData.metaData.title} - {title}
      </title>
      <style>{globalStyles}</style>
      <link
        href={`//fonts.googleapis.com/css?family=${googleFonts}&display=optional`}
        rel={'stylesheet'}
        type={'text/css'}
      />
    </Head>
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
