import * as React from 'react';
import { GoIssueOpened } from '@react-icons/all-files/go/GoIssueOpened';
import { Page } from '../containers/Page/Page';

const Page404: React.FC = () => (
  <Page page="404">
    <div style={{ textAlign: 'center' }}>
      <h1>
        <GoIssueOpened /> 404 PAGE <GoIssueOpened />
      </h1>
      <p>{`I am sorry, the page you are looking for doesn't exist.`}</p>
    </div>
  </Page>
);

export default Page404;
