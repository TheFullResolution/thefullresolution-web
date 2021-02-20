import { GetStaticProps } from 'next';
import * as React from 'react';
import Home from '../containers/Home/Home.mdx';
import { Page } from '../containers/Page/Page';
import { homeData, HomeData } from '../data/homeData';
import { siteData } from '../data/siteData';

interface Props {
  data: HomeData;
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Page
      title={`${siteData.metaData.title} - ${data.title}`}
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
    },
  };
};
