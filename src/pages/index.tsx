import * as React from 'react';
import Home from '../containers/Home/Home.mdx';
import { Page } from '../containers/Page/Page';

const HomePage: React.FC = () => {
  return (
    <Page page="Personal Page">
      <Home />
    </Page>
  );
};

export default HomePage;
