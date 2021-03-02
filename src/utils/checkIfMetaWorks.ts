import { Meta } from '../types/BlogListFilesData';

export function checkIfMetaWorks(data: unknown): data is Meta {
  return typeof data === 'object' && (data as Meta)?.title !== undefined;
}
