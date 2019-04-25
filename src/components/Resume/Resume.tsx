import Markdown from 'markdown-to-jsx'
import * as React from 'react'

import { ResumeDataQuery } from '../../graphql-types'
import { formatDate } from '../../utils/formatDate'
import * as styles from './Resume.module.scss'
import { GoBriefcase, GoHistory } from 'react-icons/go'

interface Props {
  data: ResumeDataQuery
}

export const Resume: React.FC<Props> = ({ data }) => {
  const { contentJson } = data
  if (!contentJson || !contentJson.section) {
    return <p>No data at the moment</p>
  }
  return (
    <>
      {contentJson.section.map(({ title, content, date_display }) => (
        <div key={title} className={styles.container}>
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
            }) => {
              const nameWithLink = url ? <a href={url}>{name}</a> : name
              return (
                <div key={`${name}${position}`} className={styles.block}>
                  <div className={styles.positionBlock}>
                    <div className={styles.positionTitle}>
                      <GoBriefcase />
                      <h3>
                        {nameWithLink} - {position}{' '}
                        {location && `(${location})`}
                      </h3>
                      <p>
                        <GoHistory />
                        {formatDate(started, date_display)} -{' '}
                        {present
                          ? 'Present'
                          : formatDate(finished, date_display)}
                      </p>
                    </div>
                    {description && (
                      <p className={styles.description}>{description}</p>
                    )}
                  </div>
                  <div className={styles.details}>
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
              )
            },
          )}
        </div>
      ))}
    </>
  )
}
