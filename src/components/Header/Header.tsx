import * as React from 'react'
import * as styles from './Header.module.scss'

import { useStaticQuery, Link, graphql } from 'gatsby'
import { SiteLinksDataQuery } from '../../graphql-types'

export const Header: React.FC = () => {
  const { site }: SiteLinksDataQuery = useStaticQuery(graphql`
    query SiteLinksData {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <header className={styles.wrapper}>
      <h1>{site.siteMetadata.title}</h1>
      <nav>
        {site.siteMetadata.menuLinks.map(link => (
          <Link key={link.name} to={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
