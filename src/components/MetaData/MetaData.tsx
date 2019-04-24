import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { HelmetDataQuery } from '../../graphql-types.d.ts'

export const MetaData: React.FC = () => {
  const { site }: HelmetDataQuery = useStaticQuery(graphql`
    query HelmetData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { title, description } = site!.siteMetadata!

  return (
    <Helmet
      title={title!}
      meta={[
        {
          name: 'description',
          content: description!,
        },
        {
          name: 'keywords',
          content: 'developer, front-end, frontend, Jedrzej Lewandowski',
        },
      ]}
    />
  )
}
