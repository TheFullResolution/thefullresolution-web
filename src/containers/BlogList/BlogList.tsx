import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { BlogListQuery, SitePageContextTags } from '../../graphql-types'
import { Markdown } from '../../components/Markdown/Markdown'
import { Tags } from '../../components/Tags/Tags'
import * as styles from './BlogList.module.scss'

interface Props {
  data: BlogListQuery
  pagination: {
    isFirstPage: boolean
    isLastPage: boolean
    previousPage: string
    nextPage: string
  }
  tags: readonly SitePageContextTags[]
}

export const BlogList: React.FC<Props> = ({ data, pagination, tags }) => {
  const { blogList, page } = data
  const { isFirstPage } = pagination
  return (
    <>
      {isFirstPage && (
        <Markdown className={styles.intro}>{page.intro}</Markdown>
      )}
      <div className={styles.filters}>
        <span>View By Tags:</span>
        <Tags asLinks={true} tags={tags} />
      </div>

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
    </>
  )
}
