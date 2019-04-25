import * as React from 'react';
import { Header } from '../Header/Header';
import * as styles from './Page.module.scss';
import { MetaData } from '../MetaData/MetaData';

interface Props {
  page: string
}

export const Page: React.FC<Props> = ({ children, page }) => (
  <div className={styles.container}>
    <Header page={page}/>
    <MetaData page={page}/>
    <main className={styles.wrapper}>{children}</main>
  </div>
);
