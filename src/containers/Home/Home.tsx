import React from 'react'
import * as styles from './Home.module.scss'
import { Markdown } from '../../components/Markdown/Markdown'

export const Home: React.FC = ({ children }) => {
  return <Markdown className={styles.container}>{children}</Markdown>
}
