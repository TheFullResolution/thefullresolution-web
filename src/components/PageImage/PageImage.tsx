import cls from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './PageImage.module.scss';

export interface PageImageProps {
  ratioWidth: number;
  ratioHeight: number;
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
}

export const PageImage: React.FC<PageImageProps> = ({
  src,
  ratioHeight,
  ratioWidth,
  alt,
  className,
  objectPosition,
  priority,
}) => {
  return (
    <div
      className={cls(styles.container, className)}
      style={{ paddingTop: `calc(${ratioHeight} / ${ratioWidth} * 100%)` }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        priority={priority}
      />
    </div>
  );
};
