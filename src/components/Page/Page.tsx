import * as React from 'react';
import { Header } from '../Header/Header';
import * as styles from './Page.module.scss';

export const Page: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.wrapper}>{children}</main>
  </div>
);
