import * as React from 'react'
import * as styles from './Header.module.scss'

import { useStaticQuery, Link, graphql } from 'gatsby'
import { SiteLinksDataQuery } from '../../graphql-types.d.ts'

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
  if (site && site.siteMetadata && site.siteMetadata.menuLinks) {
    return (
      <header className={styles.wrapper}>
        <h1>{site.siteMetadata.title}</h1>
        <nav>
          {site.siteMetadata.menuLinks.map(link => {
            if (link && link.name && link.link) {
              return (
                <Link key={link.name} to={link.link}>
                  {link.name}
                </Link>
              )
            }
          })}
        </nav>
      </header>
    )
  } else {
    return null
  }
}
