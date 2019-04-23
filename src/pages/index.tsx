import * as React from 'react';
import Resume from '../content/resume/Resume.mdx';
import * as styles from './Index.module.scss';

export default class IndexPage extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.Container}>
        <Resume />
      </div>
    );
  }
}
