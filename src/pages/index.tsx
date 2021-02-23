import { GetStaticProps } from 'next';
import * as React from 'react';
import Home from '../containers/Home/Home.mdx';
import { Page } from '../containers/Page/Page';
import { homeData, HomeData } from '../data/homeData';
import { SiteData, siteData } from '../data/siteData';

interface Props {
  data: HomeData;
  globalData: SiteData;
}

const HomePage: React.FC<Props> = ({ data, globalData }) => {
  return (
    <Page
      globalData={globalData}
      title={data.title}
      banner={data.banner}
      banner_source={data.banner_source}
    >
      <Home />
    </Page>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      data: homeData,
      globalData: siteData,
    },
  };
};
