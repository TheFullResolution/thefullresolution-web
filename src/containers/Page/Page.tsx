import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { MetaData } from '../../components/MetaData/MetaData';
import { Footer } from '../../components/Footer/Footer';
import * as styles from './Page.module.scss';

interface Props {
  page: string
}

export const Page: React.FC<Props> = ({ children, page }) => (
  <div className={styles.container}>
    <Header page={page}/>
    <MetaData page={page}/>
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
