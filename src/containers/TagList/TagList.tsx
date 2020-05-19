import React from 'react'
import { Link } from 'gatsby'
import { SitePageContextTags, TagListQuery } from '../../graphql-types'
import { BlogEntryList } from '../../components/BlogEntryList/BlogEntryList'
import { Tags } from '../../components/Tags/Tags'
import * as styles from './TagList.module.scss'

interface Props {
  data: TagListQuery
  tags: readonly SitePageContextTags[]
  currentTag: string
}

export const TagList: React.FC<Props> = ({ data, tags, currentTag }) => {
  const filteredTags = tags.filter((tag) => tag.fieldValue !== currentTag)

  return (
    <div>
      <p>
        You are viewing all the {currentTag} blog entries.{' '}
        <Link to="/blog">Go back to Blog page</Link> to see all the posts.
      </p>
      {filteredTags.length > 0 && (
        <div className={styles.filters}>
          <span>View Other Tags:</span>
          <Tags asLinks={true} tags={filteredTags} />
        </div>
      )}
      <BlogEntryList blogList={data.blogList} />
    </div>
  )
}
