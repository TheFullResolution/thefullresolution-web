import marked from 'marked';

export const blogData = {
  title: 'Blog',
  intro:
    'This page is a future compendium of computer science knowledge. For now, a pretty empty list of my pitiful attempts to write about my experience as a developer. ',
  banner: '/images/61310010.jpg',
  banner_source: marked('Photo by me on [AnalogPics](https://analogpics.com/)'),
  banner_position: '50% 50%',
};

export type BlogData = typeof blogData;
