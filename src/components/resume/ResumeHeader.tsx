import * as React from 'react';

interface Props {
  heading: string;
  time: string;
}

const ResumeHeader: React.FC<Props> = ({ heading, time }) => (
  <h2>
    <span>{heading}</span>
    <span>{time}</span>
  </h2>
);

export { ResumeHeader };
