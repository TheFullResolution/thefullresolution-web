import { GoIssueOpened } from '@react-icons/all-files/go/GoIssueOpened';
import { GetStaticProps } from 'next';
import * as React from 'react';
import { Page } from '../containers/Page/Page';
import { Page404Data, page404Data } from '../data/page404Data';
import { siteData, SiteData } from '../data/siteData';

interface Props {
  globalData: SiteData;
  data: Page404Data;
}

const Page404: React.FC<Props> = ({ globalData, data }) => (
  <Page
    title={data.title}
    globalData={globalData}
    banner_source={data.banner_source}
    banner={data.banner}
  >
    <div style={{ textAlign: 'center' }}>
      <h1>
        <GoIssueOpened /> 404 PAGE <GoIssueOpened />
      </h1>
      <p>{`I am sorry, the page you are looking for doesn't exist.`}</p>
    </div>
  </Page>
);

export default Page404;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      globalData: siteData,
      data: page404Data,
    },
  };
};
