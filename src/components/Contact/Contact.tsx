import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaInternetExplorer } from '@react-icons/all-files/fa/FaInternetExplorer';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { GoDeviceMobile } from '@react-icons/all-files/go/GoDeviceMobile';
import { GoMail } from '@react-icons/all-files/go/GoMail';
import React from 'react';
import { SiteData } from '../../data/siteData';

interface Props {
  globalData: SiteData;
}

export const Contact: React.FC<Props> = ({ globalData }) => {
  const contact = globalData.metaData.contact;

  const contactData = [
    <>
      <GoDeviceMobile /> {contact.phoneLabel}
    </>,

    <>
      <GoMail /> {contact.emailLabel}
    </>,

    <>
      <FaGithub /> {contact.githubLabel}
    </>,

    <>
      <FaLinkedin /> {contact.linkedinLabel}
    </>,

    <>
      <FaInternetExplorer /> {contact.webLabel}
    </>,

    <>
      <FaMapMarkerAlt /> {contact.location}
    </>,
  ];

  return (
    <ul>
      {contactData.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
};
