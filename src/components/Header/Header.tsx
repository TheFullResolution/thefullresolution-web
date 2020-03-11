import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GoGitCompare } from 'react-icons/go'

import { SiteLinksDataQuery } from '../../graphql-types'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'
import * as styles from './Header.module.scss'

interface Props {
  page: string
}

export const Header: React.FC<Props> = ({ page }) => {
  const { site, metaData }: SiteLinksDataQuery = useStaticQuery(graphql`
    query SiteLinksData {
      metaData {
        title
        banner
      }
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
    <header className={styles.container}>
      <ResponsiveImg image={metaData.banner} alt="banner" className={styles.image}/>
      <div className={styles.wrapper}>
        <h1>
          {metaData.title} - {page}
        </h1>
        <nav>
          <GoGitCompare />
          {site.siteMetadata.menuLinks.map(link => (
            <Link
              key={link.name}
              to={link.link}
              activeClassName={styles.active}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
