import { graphql } from 'gatsby'
import * as React from 'react'
import { Page } from '../components/Page/Page'
import { ResumeDataQuery } from '../graphql-types.d.ts'

interface Props {
  data: ResumeDataQuery;
}

const Resume: React.FC<Props> = ({ data }) => {
  const { contentJson } = data

  if (!contentJson) {
    return <p>No data at the moment</p>
  }
  return (
    <Page>
      <h1>{contentJson.name}</h1>
    </Page>
  )
}

export default Resume

export const query = graphql`
  query ResumeData {
    contentJson {
      name
      phone
      email
      links {
        name
        url
      }
      section {
        title
        date_display
        content {
          name
          position
          location
          url
          description
          started
          present
          finished
          technologies
          accomplishments
        }
      }
    }
  }
`
