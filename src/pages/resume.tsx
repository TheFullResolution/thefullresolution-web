import * as React from 'react';
import { Page } from '../containers/Page/Page';
import { Resume } from '../containers/Resume/Resume';

interface Props {
  data: any;
}

const ResumePage: React.FC<Props> = ({ data }) => {
  return (
    <Page
      page="Resume"
      banner={data.resume.banner}
      banner_position={data.resume.banner_position}
      banner_source={data.resume.banner_source}
    >
      <Resume data={data} />
    </Page>
  );
};

export default ResumePage;
