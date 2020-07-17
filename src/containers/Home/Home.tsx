import React from 'react'
import { Markdown } from '../../components/Markdown/Markdown'
import { HomeDataQuery } from '../../graphql-types'
import * as styles from './Home.module.scss'

interface Props {
  data: HomeDataQuery
}

export const Home: React.FC<Props> = ({ data }) => {
  if (!data?.home) {
    return <p>No data at the moment</p>
  }

  const { home } = data
  return (
    <>
      <Markdown className={styles.about}>{home?.about}</Markdown>
      <Markdown className={styles.techStack}>{home?.techStack}</Markdown>
    </>
  )
}
