import Head from 'next/head';
import React from 'react';

interface Props {
  page: string;
  title?: string;
  styles?: string;
}

export const PageHead: React.FC<Props> = ({
  page,
  title = 'My Page',
  styles,
}) => {
  return (
    <Head>
      <title>{`${title} - ${page}`}</title>
      <style>{styles}</style>
    </Head>
  );
};
