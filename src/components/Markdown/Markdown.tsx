import React from 'react'
import MarkdownToJsx from 'markdown-to-jsx'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'

interface Props {
  className?: string
}

const ImageWrapper: React.FC<{ alt: string; title: string; src: string }> = ({
  alt,
  title,
  src,
}) => {
  return <ResponsiveImg className="markdown-image" image={src} alt={alt} title={title} />
}

const PWrapper: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assertedChildren = children as any

  if (
    assertedChildren &&
    assertedChildren.length === 1 &&
    assertedChildren[0].props &&
    assertedChildren[0].props.src
  ) {
    // rendering media without p wrapper

    return <>{children}</>
  } else return <p>{children}</p>
}

export const Markdown: React.FC<Props> = ({ className, children }) => {
  return (
    <MarkdownToJsx
      className={className}
      options={{
        overrides: {
          img: ImageWrapper,
          p: PWrapper,
        },
      }}
    >
      {children}
    </MarkdownToJsx>
  )
}
