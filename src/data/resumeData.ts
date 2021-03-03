import marked from 'marked';

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
  started: string;
  position: string;
  technologies?: string[];
  name: string;
  url?: string;
  finished: string;
  accomplishments?: string[];
  location?: string;
  present?: boolean;
  description?: string;
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
        'NodeJS, Express, GraphQL',
        'React, Angular',
        'CSS, Sass, CSSinJS',
        'Redux, RxJS, NextJS, GatsbyJS',
        'C++ (learning)',
      ],
    },
  ],
  section: [
    {
      title: 'Work Experience - Developer',
      date_display: 'month',
      content: [
        {
          started: '2020-08-01',
          position: 'Senior Frontend Engineer',
          technologies: [
            'Typescript',
            'React, NextJS, Angular',
            'Sass, Styled Components',
            'Jest, Cypress',
          ],
          name: 'Swapfiets',
          url: 'https://swapfiets.nl/en/',
          finished: '',
          accomplishments: [
            'Planning and rewrite of Angular Websites to React/NextJS',
            'Successful implementation of best SEO/Accessibility practices',
          ],
          location: 'Amsterdam, NL',
          present: true,
          description:
            'Swapfiets offers hassle-free urban mobility solutions, in a form of a fixed price a month subscription for a bike, an electric scooter, or an electric bike.',
        },
        {
          started: '2018-12-01',
          position: 'Front-End Developer',
          technologies: [
            'Typescript, React, Redux',
            'Node.js, Express.js',
            'Jest, Testcafe',
          ],
          name: 'Zoover Media B.V.',
          url: 'https://greatplacefortalent.nl/about-zoover/',
          finished: '2020-07-30T22:00:00.000Z',
          accomplishments: [
            'Complete rewrite of the lister page to decouple frontend and backend filters, improve the performance and maintainability.',
            'Deploying a completely redesigned new accommodation page with improved accessibility, mobile design, and new features.',
          ],
          location: 'Amsterdam, NL',
          present: false,
          description:
            'Zoover.nl a Dutch travel platform, providing information about holiday destinations and offering packages from major tour operators.',
        },
        {
          started: '2018-07-01',
          position: 'Front-End Developer',
          technologies: [
            'JavaScript, React, Redux, Sass',
            'Node.js, Express.js',
            'Jest, BrowserStack, Cypress',
          ],
          name: 'de Bijenkorf',
          url: 'https://www.debijenkorf.nl/over-de-bijenkorf',
          finished: '2018-11-30',
          accomplishments: [
            'Rewrite of search component, introducing keyboard and accessibility support.',
            'Active role in extending the internal component library.',
          ],
          location: 'Amsterdam, NL',
          description:
            'A chain of high-end department stores in the Netherlands, with its flagship store on Dam Square in Amsterdam.',
        },
        {
          started: '2017-05-01',
          position: 'Front-End Developer',
          technologies: [
            'Typescript, React, Angular 1.5, Redux, Sass',
            'Jest, BrowserStack, Cypress',
          ],
          name: 'Bleeve B.V. (GreenHome)',
          url: 'https://greenhome.nl/over-greenhome',
          finished: '2018-06-30',
          accomplishments: [
            'Implementation of end to end testing and integration testing with Cypress and Jest.',
            'Rewrite and transfer of greenhome.nl from Angular 1.5 to React.',
          ],
          location: 'Amsterdam, NL',
          description:
            'An independent marketplace for energy-neutral house improvements, with the competitive advantage of applying e-commerce methods in a traditional industry.',
        },
      ],
    },
    {
      title: 'Education - Developer',
      date_display: 'month',
      content: [
        {
          started: '2017-01-01',
          position: 'Web Development Bootcamp',
          name: 'Codaisseur B.V.',
          url: 'https://codaisseur.com/become-a-developer',
          finished: '2017-03-31',
          location: 'Amsterdam, NL',
          description:
            'Two-month Bootcamp, designed to teach full-stack web development. ',
        },
        {
          name: 'Udacity',
          position: 'Senior Web Developer Nanodegree',
          location: 'Online Education',
          description: 'Course for intermediate front-end developers.',
          started: '2016-03-31',
          finished: '2016-11-29',
        },
        {
          started: '2015-05-31',
          position: 'Front-End Web Developer Nanodegree',
          name: 'Udacity',
          url: '',
          finished: '2015-12-29',
          location: 'Online Education',
          description:
            'A course designed to introduce the basics of front-end development.',
        },
      ],
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
    {
      title: 'Education',
      date_display: 'year',
      content: [
        {
          name: 'University of Gdansk ',
          position: 'Economics',
          started: '2006-12-31',
          finished: '2009-01-30',
        },
      ],
    },
  ],
  name: 'Jedrzej (Andrew) Lewandowski',
  banner: '/images/61310017.jpg',
  banner_source: marked('Photo by me on [AnalogPics](https://analogpics.com/)'),
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
