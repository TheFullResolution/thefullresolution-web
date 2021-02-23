import { GoBriefcase } from '@react-icons/all-files/go/GoBriefcase';
import { GoHistory } from '@react-icons/all-files/go/GoHistory';
import * as React from 'react';
import { Contact } from '../../components/Contact/Contact';
import type { ResumeData } from '../../data/resumeData';
import { SiteData } from '../../data/siteData';
import { formatDate } from '../../utils/formatDate';
import styles from './Resume.module.scss';

interface Props {
  data: ResumeData;
  globalData: SiteData;
}

export const Resume: React.FC<Props> = ({ data, globalData }) => {
  if (!data || !data.section) {
    return <p>No data at the moment</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.onlyPrint}>
        <h1>{data.name}</h1>
        <div className={styles.contact}>
          <Contact globalData={globalData} />
        </div>
      </div>
      {data.skills.map(({ title, technologies }) => (
        <div key={title} className={styles.skills}>
          <h2>{title}</h2>
          <ul>
            {technologies.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      ))}
      {data.section.map(({ title, content, date_display }) => (
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
                          <ul>
                            {technologies.map((el) => (
                              <li key={el}>{el}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {accomplishments && (
                        <div>
                          <h4>Accomplishments</h4>
                          <ul>
                            {accomplishments.map((el) => (
                              <li key={el}>{el}</li>
                            ))}
                          </ul>
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
