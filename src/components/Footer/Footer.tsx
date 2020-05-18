import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { FooterDataQuery } from '../../graphql-types'
import * as styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  const { metaData }: FooterDataQuery = useStaticQuery(graphql`
    query FooterData {
      metaData {
        linkedin
        github
      }
    }
  `)

  return (
    <footer className={styles.container}>
      <div className={styles.links}>
        <a href={metaData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          Linkedin
        </a>
        <a href={metaData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
        </a>
      </div>
    </footer>
  )
}
