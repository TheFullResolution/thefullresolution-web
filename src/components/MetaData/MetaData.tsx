import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { HelmetDataQuery } from '../../graphql-types'

interface Props {
  page: string
}

export const MetaData: React.FC<Props> = ({page}) => {
  const data: HelmetDataQuery = useStaticQuery(graphql`
    query HelmetData {
      metaData {
          title
          description
        }
    }
  `)
  const { title, description } = data.metaData

  return (
    <Helmet
      title={`${title} - ${page}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: 'developer, front-end, frontend, Jedrzej Lewandowski',
        },
      ]}
    />
  )
}
