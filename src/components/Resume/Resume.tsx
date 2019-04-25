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
  const { resume } = data
  if (!resume || !resume.section) {
    return <p>No data at the moment</p>
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.notInPrint}>Resume</h1>
      <div className={styles.onlyPrint}>
        <h1>{resume.name}</h1>
        <div className={styles.contact}>
          <ul>
            <li>
              <span>Phone:</span>
              <span>{resume.phone}</span>
            </li>
            <li>
              <span>Email:</span> <span>{resume.email}</span>
            </li>
          </ul>
          <ul>
            {resume.links.map(link => (
              <li key={link.url}>
                <span>{link.label}:</span>
                <span>{link.url}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {resume.section.map(({ title, content, date_display }) => (
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
            }) => {
              const nameWithLink = url ? <a href={url}>{name}</a> : name
              return (
                <div key={`${name}${position}`} className={styles.position}>
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
                  {(technologies || accomplishments) && (
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
                  )}
                </div>
              )
            },
          )}
        </div>
      ))}
    </div>
  )
}
