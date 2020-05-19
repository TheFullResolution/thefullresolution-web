import React from 'react'
import { BlogListQuery, SitePageContextTags } from '../../graphql-types'
import { Markdown } from '../../components/Markdown/Markdown'
import { Tags } from '../../components/Tags/Tags'
import { BlogEntryList } from '../../components/BlogEntryList/BlogEntryList'
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

      <BlogEntryList blogList={blogList} />
    </>
  )
}
