import Image from 'next/image';
import React from 'react';
import styles from './PageImage.module.scss';

export interface PageImageProps {
  ratioWidth: number;
  ratioHeight: number;
  src: string;
  alt: string;
}

export const PageImage: React.FC<PageImageProps> = ({
  src,
  ratioHeight,
  ratioWidth,
  alt,
}) => {
  return (
    <div
      className={styles.container}
      style={{ paddingTop: `calc(${ratioHeight} / ${ratioWidth} * 100%)` }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};
