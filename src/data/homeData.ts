import { marked } from 'marked';

export const homeData = {
  title: 'Personal Page',
  banner: '/images/06.jpg',
  banner_source: marked.parse('Photo by me on [AnalogPics](https://analogpics.com/)'),
};

export type HomeData = typeof homeData;
