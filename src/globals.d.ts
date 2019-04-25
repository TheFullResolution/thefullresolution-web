declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module 'typography-theme-noriega' {

  import { TypographyOptions } from 'typography';
  const Theme: TypographyOptions;

  export = Theme;
}