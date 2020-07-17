import React from 'react'
import { BlogQuery } from '../../graphql-types'
import { Markdown } from '../../components/Markdown/Markdown'
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg'
import { Tags } from '../../components/Tags/Tags'
import * as styles from './BlogEntry.module.scss'

interface Props {
  data: BlogQuery
}

export const BlogEntry: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <ResponsiveImg
        image={data.markdownRemark.frontmatter.banner}
        alt="banner"
        className={styles.image}
      />
      <div className={styles.extraInfo}>
        <Tags tags={data.markdownRemark.frontmatter.tags} />{' '}
        <span>{data.markdownRemark.frontmatter.date}</span>
      </div>
      <Markdown>{data.markdownRemark.rawMarkdownBody}</Markdown>
    </div>
  )
}
