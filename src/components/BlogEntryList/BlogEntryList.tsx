import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Markdown } from '../Markdown/Markdown'
import { Tags } from '../Tags/Tags'
import { BlogListQuery } from '../../graphql-types'
import * as styles from './BlogEntryList.module.scss'

interface Props {
  blogList: BlogListQuery['blogList']
}

export const BlogEntryList: React.FC<Props> = ({ blogList }) => {
  return (
    <ul className={styles.list}>
      {blogList.edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || slug

        return (
          <Fragment key={slug}>
            <hr />
            <article className={styles.blog}>
              <div className={styles.blogHeader}>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>
                <h3>{node.frontmatter.date}</h3>
              </div>
              <Markdown excerpt={true}>{node.excerpt}</Markdown>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tagLabel}>Tags:</span>
                  <Tags tags={node.frontmatter.tags} />
                </div>
                <Link to={slug} aria-hidden>
                  Read More
                </Link>
              </div>
            </article>
          </Fragment>
        )
      })}
    </ul>
  )
}
