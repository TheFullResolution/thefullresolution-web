import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { IconType } from 'react-icons';
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg';
import * as Icons from './icons'

const TypedIcons = Icons as Record<string, IconType>;

interface Props {
  className?: string;
  excerpt?: boolean;
  children: string;
}

const ImageWrapper: React.FC<{ alt: string; title: string; src: string }> = ({
  alt,
  title,
  src,
}) => {
  return (
    <ResponsiveImg
      className="markdown-image"
      image={src}
      alt={alt}
      title={title}
    />
  );
};

const PWrapper: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assertedChildren = children as any;

  if (
    assertedChildren &&
    assertedChildren.length === 1 &&
    assertedChildren[0].props &&
    assertedChildren[0].props.src
  ) {
    // rendering media without p wrapper

    return <>{children}</>;
  } else return <p>{children}</p>;
};

const ItagWrapper: React.FC<{ children: string }> = ({ children }) => {
  const Icon = TypedIcons[children];
  if (!Icon) return null;
  // console.log(JSON.stringify(ReactIcons, null, 2))
  return <Icon />;
};

const SkipTag: React.FC = () => null;

export const Markdown: React.FC<Props> = ({
  className,
  children,
  excerpt = false,
}) => {
  return (
    <div className={className}>
      <MarkdownToJsx
        options={{
          overrides: excerpt
            ? {
                img: SkipTag,
                i: ItagWrapper,
                h1: SkipTag,
                h2: SkipTag,
              }
            : {
                img: ImageWrapper,
                p: PWrapper,
                i: ItagWrapper,
              },
        }}
      >
        {children}
      </MarkdownToJsx>
    </div>
  );
};
