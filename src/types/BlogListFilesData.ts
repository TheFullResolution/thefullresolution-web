export interface BlogListFilesData {
  meta: ParsedMeta;
  url: string;
}

export interface Meta {
  title: string;
  description: string;
  date: Date;
}

export interface ParsedMeta extends Omit<Meta, 'date'> {
  date: string;
}
