import { graphql } from 'gatsby'
import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import { Page } from '../components/Page/Page'
import { ResumeDataQuery } from '../graphql-types'
import { formatDate } from '../utils/formatDate'

interface Props {
  data: ResumeDataQuery
}

const Resume: React.FC<Props> = ({ data }) => {
  const { contentJson } = data

  if (!contentJson || !contentJson.section) {
    return <p>No data at the moment</p>
  }
  return (
    <Page>
      <h1>{contentJson.name}</h1>
      {contentJson.section.map(({ title, content, date_display }) => (
        <div key={title}>
          <h2>{title}</h2>
          {content.map(
            ({
              name,
              position,
              location,
              url,
              description,
              started,
              present,
              finished,
              technologies,
              accomplishments,
            }) => (
              <div key={`${name}${position}`}>
                <h3>
                  {name} - {position} ({location}){url && <a href={url}>About Page</a>}
                </h3>
                <p>
                  {formatDate(started, date_display)} -{' '}
                  {present ? 'Present' : formatDate(finished, date_display)}
                </p>
                <p>{description}</p>
                <div>
                  {technologies && (
                    <div>
                      <h4>Technologies</h4>
                      <Markdown>{technologies}</Markdown>
                    </div>
                  )}
                  {accomplishments && (
                    <div>
                      <h4>Accomplishments</h4>
                      <Markdown>{accomplishments}</Markdown>
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      ))}
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
