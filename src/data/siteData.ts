export type SiteData = typeof siteData;

export const siteData = {
  menuLinks: [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'blog',
      link: '/blog',
    },
    {
      name: 'resume',
      link: '/resume',
    },
  ],
  metaData: {
    title: 'Jedrzej (Andrew) Lewandowski',
    description:
      'This is a personal page of Jedrzej Lewandowski, Front-End Developer passionate about learning and building awesome websites.',
    contact: {
      phone: '+31 631 044 555',
      phoneLabel: 'Phone: +31 631 044 555',
      email: 'lewandowski.jedrzej@gmail.com',
      emailLabel: 'Email: lewandowski.jedrzej@gmail.com',
      github: 'https://github.com/TheFullResolution',
      githubLabel: 'GitHub: github.com/TheFullResolution',
      linkedin: 'https://www.linkedin.com/in/lewandowskijedrzej',
      linkedinLabel: 'LinkedIn: linkedin.com/in/lewandowskijedrzej/',
      webLabel: 'Web: thefullresolution.com',
      location: 'Location: Amsterdam, the Netherlands',
    },
  },
};
