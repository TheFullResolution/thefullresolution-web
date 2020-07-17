import React from 'react'
import { FaJsSquare, FaCuttlefish, FaReact, FaAngular } from 'react-icons/all'
import { Link } from 'gatsby'
import { SitePageContextTags } from '../../graphql-types'
import * as styles from './Tags.module.scss'

interface PropsNoLink {
  tags: readonly string[]
  asLinks?: false
}

interface PropsLink {
  tags: readonly SitePageContextTags[]
  asLinks: true
}

type Props = PropsNoLink | PropsLink

// ["JavaScript", "C++", "React", "Angular"]

const getIcon = (tag: string) => {
  switch (tag) {
    case 'JavaScript':
      return <FaJsSquare />

    case 'C++':
      return <FaCuttlefish />
    case 'React':
      return <FaReact />
    case 'Angular':
      return <FaAngular />
    default:
      return null
  }
}

function tagsAreLinks(
  links: boolean,
  tags: readonly SitePageContextTags[] | readonly string[],
): tags is readonly SitePageContextTags[] {
  return links && !!(tags as readonly SitePageContextTags[])[0].url
}

export const Tags: React.FC<Props> = ({ tags, asLinks }) => {
  if (tagsAreLinks(!!asLinks, tags)) {
    return (
      <nav className={styles.list}>
        {tags.map((tag) => {
          const icon = getIcon(tag.fieldValue)

          return (
            <Link to={tag.url} key={tag.fieldValue} className={styles.tag}>
              {icon}
              <span>
                {tag.fieldValue} ({tag.totalCount})
              </span>
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <ul className={styles.list}>
      {tags.map((tag) => {
        const icon = getIcon(tag)

        return (
          <li key={tag} className={styles.tag}>
            {icon}
            <span>{tag}</span>
          </li>
        )
      })}
    </ul>
  )
}
