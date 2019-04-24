import * as React from 'react';
import { Header } from '../Header/Header';
import * as styles from './Page.module.scss';
import { MetaData } from '../MetaData/MetaData';

export const Page: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <MetaData />
    <main className={styles.wrapper}>{children}</main>
  </div>
);
