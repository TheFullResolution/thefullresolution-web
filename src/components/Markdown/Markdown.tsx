import React from 'react'
import MarkdownToJsx from 'markdown-to-jsx'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import { IconType } from 'react-icons'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'

const TypedFaIcons = FaIcons as Record<string, IconType>
const TypedGoIcons = GoIcons as Record<string, IconType>

interface Props {
  className?: string
  excerpt?: boolean
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
  )
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

const ItagWrapper: React.FC<{ children: string }> = ({ children }) => {
  const Icon = TypedFaIcons[children] ?? TypedGoIcons[children]
  if (!Icon) return null
  // console.log(JSON.stringify(ReactIcons, null, 2))
  return <Icon />
}

const SkipTag: React.FC = () => null

export const Markdown: React.FC<Props> = ({
  className,
  children,
  excerpt = false,
}) => {
  const overrides = excerpt
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
      }

  return (
    <div className={className}>
      <MarkdownToJsx
        options={{
          overrides,
        }}
      >
        {children}
      </MarkdownToJsx>
    </div>
  )
}
