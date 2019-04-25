import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { GoGitCompare } from 'react-icons/go'

import { SiteLinksDataQuery } from '../../graphql-types'
import * as styles from './Header.module.scss'

interface Props {
  page: string
}

export const Header: React.FC<Props> = ({page}) => {
  const { site, metaData }: SiteLinksDataQuery = useStaticQuery(graphql`
    query SiteLinksData {
      metaData {
        title
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
    <header className={styles.wrapper}>
      <img src="https://res.cloudinary.com/thefullresolution/image/upload/c_scale,f_auto,fl_progressive,q_auto,w_850/v1556198596/personal_website/97440005.jpg" alt="Banner"/>
      <h1>{metaData.title} - {page}</h1>
      <nav>
        <GoGitCompare />
        {site.siteMetadata.menuLinks.map(link => (
          <Link key={link.name} to={link.link} activeClassName={styles.active}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
