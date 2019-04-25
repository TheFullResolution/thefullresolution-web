import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'

import { SiteLinksDataQuery } from '../../graphql-types'
import * as styles from './Header.module.scss'

export const Header: React.FC = () => {
  const { site }: SiteLinksDataQuery = useStaticQuery(graphql`
    query SiteLinksData {
      site {
        siteMetadata {
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
      {/* <h1>{site.siteMetadata}</h1> */}
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
