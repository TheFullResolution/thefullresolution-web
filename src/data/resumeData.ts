import { marked } from 'marked';

export interface ResumeData {
  skills: Skill[];
  section: Section[];
  name: string;
  banner: string;
  banner_source: string;
  phone: string;
  links: Link[];
  banner_position: string;
  email: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Section {
  title: string;
  date_display: string;
  content: Content[];
}

export interface Content {
  accomplishments?: string[];
  date_display?: string;
  description?: string;
  finished: string;
  location?: string;
  logo?: string;
  name: string;
  position: string;
  present?: boolean;
  started: string;
  technologies?: string[];
  url?: string;
}

export interface Skill {
  title: string;
  technologies: string[];
}

export const resumeData: ResumeData = {
  skills: [
    {
      title: 'Key Skills',
      technologies: [
        'TypeScript, JavaScript',
        'React, Angular',
        'NodeJS, Express, GraphQL',
        'NextJS, Redux, RxJS, GatsbyJS',
        'CSS, Sass, CSSinJS',
        'C++',
      ],
    },
  ],
  section: [
    {
      content: [
        {
          name: 'Swapfiets',
          accomplishments: [
            'Successfully led the pitch for rewriting existing B2C pages from Angular to React/NextJS.',
            'Led architecture design and successfully released localized NextJS B2C page to 9 different markets.',
            'Closely cooperated with back-end developers to improve API logic, performance, and security.',
            'Implemented AB testing, End to End testing, and numerous pipeline and DevOps improvements.',
          ],
          description:
            'Swapfiets offers hassle-free urban mobility solutions in a fixed price-a-month subscription for a bike, an electric scooter, or an electric bike.',
          finished: '',
          location: 'Amsterdam, NL',
          logo: '/logos/Swapfiets.jpg',
          position: 'Senior Frontend Engineer',
          present: true,
          started: '2020-08-01',
          technologies: [
            'Typescript, NextJS',
            'Angular, RXjs',
            'Docker, Azure DevOps',
            'Jest, Cypress',
          ],
          url: 'https://swapfiets.nl/en/',
        },
        {
          name: 'Zoover Media B.V.',
          accomplishments: [
            'Completed rewrite of the lister page to decouple front-end and back-end filters and improve performance and maintainability.',
            'Completed new accommodation page with improved accessibility, mobile design, and new user interfaces.',
          ],
          description:
            'Zoover.nl, a Dutch travel platform, providing information about holiday destinations and offering packages from major tour operators.',
          finished: '2020-07-30T22:00:00.000Z',
          location: 'Amsterdam, NL',
          logo: '/logos/Zoover.jpg',
          position: 'Front-End Developer',
          present: false,
          started: '2018-12-01',
          technologies: [
            'Typescript, React, Redux',
            'Node.js, Express.js',
            'Jest, Testcafe',
          ],
          url: 'https://greatplacefortalent.nl/about-zoover/',
        },
        {
          name: 'de Bijenkorf',
          accomplishments: [
            'Active role in extending the internal component library.',
            'Rewrite of search component, introducing keyboard and accessibility support.',
          ],
          description:
            'A chain of high-end department stores in the Netherlands, with its flagship store on Dam Square in Amsterdam.',
          finished: '2018-11-30',
          location: 'Amsterdam, NL',
          logo: '/logos/deBijenkorf.jpg',
          position: 'Front-End Developer',
          started: '2018-07-01',
          technologies: ['JavaScript, React, Redux'],
          url: 'https://www.debijenkorf.nl/over-de-bijenkorf',
        },

        {
          name: 'Bleeve B.V. (GreenHome)',
          accomplishments: [
            'Implementation of end-to-end testing and integration testing with Cypress and Jest.',
            'Rewrite and transfer greenhome.nl from Angular 1.5 to React.',
          ],
          description:
            'An independent marketplace for energy-neutral house improvements',
          finished: '2018-06-30',
          location: 'Amsterdam, NL',
          logo: '/logos/GreenHome.jpg',
          position: 'Front-End Developer',
          started: '2017-05-01',
          technologies: ['Typescript, React, Angular 1.5'],
          url: 'https://greenhome.nl/over-greenhome',
        },
      ],
      date_display: 'month',
      title: 'Work Experience - Developer',
    },
    {
      content: [
        {
          name: 'University of London',
          description:
            'An online Bachelor of Science (BSc) in Computer Science degree from the University of London.',
          date_display: 'month',
          finished: '',
          logo: '/logos/UniversityofLondon.jpg',
          position: 'Bachelor of Computer Science',
          present: true,
          started: '2021-04-01',
          url: 'https://www.coursera.org/degrees/bachelor-of-science-computer-science-london',
        },
        {
          name: 'Codaisseur B.V.',
          finished: '2017-03-31',
          location: 'Amsterdam, NL',
          logo: '/logos/Codaisseur.jpg',
          position: 'Web Development Bootcamp',
          started: '2017-01-01',
          url: 'https://codaisseur.com/become-a-developer',
        },
        {
          date_display: 'year',
          finished: '2009-01-30',
          name: 'University of Gdansk',
          logo: '/logos/UniversityofGdansk.jpg',
          position: 'Economics',
          description: '',
          started: '2006-12-31',
        },
      ],
      date_display: 'month',
      title: 'Education',
    },
    {
      title: 'Previous Career Work Experience',
      date_display: 'month',
      content: [
        {
          name: 'PVH Europe B.V. ',
          position: 'Stock Allocator, Operations Coordinator',
          location: 'Amsterdam, NL',
          started: '2012-03-03',
          finished: '2017-01-30',
        },
        {
          name: 'ECCO EMEA B.V. ',
          position: 'Customer Service Assistant - Distributors ',
          location: 'Amsterdam, NL',
          url: '',
          started: '2019-11-23',
          finished: '2012-02-28',
        },
        {
          name: 'LPP S.A.',
          position: 'Assortment Selection Specialist ',
          location: 'Gdansk, PL',
          started: '2008-04-30',
          finished: '2010-05-30',
        },
      ],
    },
  ],
  name: 'Jedrzej (Andrew) Lewandowski',
  banner: '/images/61310017.jpg',
  banner_source: marked.parse(
    'Photo by me on [AnalogPics](https://analogpics.com/)',
  ),
  phone: '+31 631 044 555',
  links: [
    {
      label: 'Github',
      url: 'github.com/TheFullResolution',
    },
    {
      label: 'Linkedin',
      url: 'linkedin.com/in/lewandowskijedrzej/',
    },
    {
      label: 'Web',
      url: 'thefullresolution.com',
    },
  ],
  banner_position: '50% 40%',
  email: 'lewandowski.jedrzej@gmail.com',
};
