import { GetStaticProps } from 'next';
import * as React from 'react';
import { Page } from '../containers/Page/Page';
import { Resume } from '../containers/Resume/Resume';
import { resumeData, ResumeData } from '../data/resumeData';
import { SiteData, siteData } from '../data/siteData';

interface Props {
  data: ResumeData;
  globalData: SiteData;
}

const ResumePage: React.FC<Props> = ({ data, globalData }) => {
  return (
    <Page
      title="Resume"
      globalData={globalData}
      banner={data.banner}
      banner_position={data.banner_position}
      banner_source={data.banner_source}
    >
      <Resume data={data} globalData={globalData} />
    </Page>
  );
};

export default ResumePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      data: resumeData,
      globalData: siteData,
    },
  };
};
