import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import * as React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.links}>
        <a href={''} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          Linkedin
        </a>
        <a href={''} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
        </a>
      </div>
    </footer>
  );
};
