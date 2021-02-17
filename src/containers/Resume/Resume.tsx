import { GoBriefcase } from '@react-icons/all-files/go/GoBriefcase';
import { GoHistory } from '@react-icons/all-files/go/GoHistory';
import * as React from 'react';
import { Markdown } from '../../components/Markdown/Markdown';
import { ResumeDataQuery } from '../../graphql-types';
import { formatDate } from '../../utils/formatDate';
import styles from './Resume.module.scss';

interface Props {
  data: ResumeDataQuery;
}

export const Resume: React.FC<Props> = ({ data }) => {
  const { resume } = data;
  if (!resume || !resume.section) {
    return <p>No data at the moment</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.onlyPrint}>
        <h1>{resume.name}</h1>
        <div className={styles.contact}>
          <ul>
            {resume.contact.map(({ item }, index) => (
              <li key={index}>
                <Markdown className={styles.item}>{item}</Markdown>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {resume.skills.map(({ title, technologies }) => (
        <div key={title}>
          <h2>{title}</h2>
          <Markdown className={styles.skills}>{technologies}</Markdown>
        </div>
      ))}
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
              const nameWithLink = url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              ) : (
                name
              );
              return (
                <div key={`${name}${position}`} className={styles.position}>
                  <div className={styles.positionBlock}>
                    <div className={styles.positionTitle}>
                      <div className={styles.positionHeader}>
                        <GoBriefcase />
                        <h3>
                          {nameWithLink} - {position}{' '}
                          {location && `(${location})`}
                        </h3>
                      </div>
                      <p className={styles.time}>
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
              );
            },
          )}
        </div>
      ))}
    </div>
  );
};
