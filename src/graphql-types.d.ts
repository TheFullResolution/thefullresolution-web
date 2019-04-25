export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
}

export type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>
  readonly ne: Maybe<Scalars['Boolean']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>
  readonly ne: Maybe<Scalars['Date']>
  readonly gt: Maybe<Scalars['Date']>
  readonly gte: Maybe<Scalars['Date']>
  readonly lt: Maybe<Scalars['Date']>
  readonly lte: Maybe<Scalars['Date']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  readonly birthtime: Maybe<Scalars['Date']>
}

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<DirectoryEdge>
  readonly nodes: ReadonlyArray<Directory>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  readonly next: Maybe<Directory>
  readonly node: Directory
  readonly previous: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type DirectoryFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
  readonly absolutePath: Maybe<StringQueryOperatorInput>
  readonly relativePath: Maybe<StringQueryOperatorInput>
  readonly extension: Maybe<StringQueryOperatorInput>
  readonly size: Maybe<IntQueryOperatorInput>
  readonly prettySize: Maybe<StringQueryOperatorInput>
  readonly modifiedTime: Maybe<DateQueryOperatorInput>
  readonly accessTime: Maybe<DateQueryOperatorInput>
  readonly changeTime: Maybe<DateQueryOperatorInput>
  readonly birthTime: Maybe<DateQueryOperatorInput>
  readonly root: Maybe<StringQueryOperatorInput>
  readonly dir: Maybe<StringQueryOperatorInput>
  readonly base: Maybe<StringQueryOperatorInput>
  readonly ext: Maybe<StringQueryOperatorInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>
  readonly dev: Maybe<IntQueryOperatorInput>
  readonly mode: Maybe<IntQueryOperatorInput>
  readonly nlink: Maybe<IntQueryOperatorInput>
  readonly uid: Maybe<IntQueryOperatorInput>
  readonly gid: Maybe<IntQueryOperatorInput>
  readonly rdev: Maybe<IntQueryOperatorInput>
  readonly blksize: Maybe<IntQueryOperatorInput>
  readonly ino: Maybe<IntQueryOperatorInput>
  readonly blocks: Maybe<IntQueryOperatorInput>
  readonly atimeMs: Maybe<FloatQueryOperatorInput>
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
  readonly atime: Maybe<DateQueryOperatorInput>
  readonly mtime: Maybe<DateQueryOperatorInput>
  readonly ctime: Maybe<DateQueryOperatorInput>
  readonly birthtime: Maybe<DateQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<DirectoryEdge>
  readonly nodes: ReadonlyArray<Directory>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  readonly birthtime: Maybe<Scalars['Date']>
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>
  readonly childResume: Maybe<Resume>
  readonly childSiteMetaData: Maybe<SiteMetaData>
}

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<FileEdge>
  readonly nodes: ReadonlyArray<File>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  readonly next: Maybe<File>
  readonly node: File
  readonly previous: Maybe<File>
}

export enum FileFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export type FileFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
  readonly absolutePath: Maybe<StringQueryOperatorInput>
  readonly relativePath: Maybe<StringQueryOperatorInput>
  readonly extension: Maybe<StringQueryOperatorInput>
  readonly size: Maybe<IntQueryOperatorInput>
  readonly prettySize: Maybe<StringQueryOperatorInput>
  readonly modifiedTime: Maybe<DateQueryOperatorInput>
  readonly accessTime: Maybe<DateQueryOperatorInput>
  readonly changeTime: Maybe<DateQueryOperatorInput>
  readonly birthTime: Maybe<DateQueryOperatorInput>
  readonly root: Maybe<StringQueryOperatorInput>
  readonly dir: Maybe<StringQueryOperatorInput>
  readonly base: Maybe<StringQueryOperatorInput>
  readonly ext: Maybe<StringQueryOperatorInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>
  readonly dev: Maybe<IntQueryOperatorInput>
  readonly mode: Maybe<IntQueryOperatorInput>
  readonly nlink: Maybe<IntQueryOperatorInput>
  readonly uid: Maybe<IntQueryOperatorInput>
  readonly gid: Maybe<IntQueryOperatorInput>
  readonly rdev: Maybe<IntQueryOperatorInput>
  readonly blksize: Maybe<IntQueryOperatorInput>
  readonly ino: Maybe<IntQueryOperatorInput>
  readonly blocks: Maybe<IntQueryOperatorInput>
  readonly atimeMs: Maybe<FloatQueryOperatorInput>
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
  readonly atime: Maybe<DateQueryOperatorInput>
  readonly mtime: Maybe<DateQueryOperatorInput>
  readonly ctime: Maybe<DateQueryOperatorInput>
  readonly birthtime: Maybe<DateQueryOperatorInput>
  readonly publicURL: Maybe<StringQueryOperatorInput>
}

export type FileGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<FileEdge>
  readonly nodes: ReadonlyArray<File>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>
  readonly ne: Maybe<Scalars['Float']>
  readonly gt: Maybe<Scalars['Float']>
  readonly gte: Maybe<Scalars['Float']>
  readonly lt: Maybe<Scalars['Float']>
  readonly lte: Maybe<Scalars['Float']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
}

export type Internal = {
  readonly content: Maybe<Scalars['String']>
  readonly contentDigest: Scalars['String']
  readonly description: Maybe<Scalars['String']>
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ignoreType: Maybe<Scalars['Boolean']>
  readonly mediaType: Maybe<Scalars['String']>
  readonly owner: Scalars['String']
  readonly type: Scalars['String']
}

export type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>
  readonly contentDigest: Maybe<StringQueryOperatorInput>
  readonly description: Maybe<StringQueryOperatorInput>
  readonly fieldOwners: Maybe<StringQueryOperatorInput>
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>
  readonly mediaType: Maybe<StringQueryOperatorInput>
  readonly owner: Maybe<StringQueryOperatorInput>
  readonly type: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>
  readonly ne: Maybe<Scalars['Int']>
  readonly gt: Maybe<Scalars['Int']>
  readonly gte: Maybe<Scalars['Int']>
  readonly lt: Maybe<Scalars['Int']>
  readonly lte: Maybe<Scalars['Int']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type Node = {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
}

export type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>
}

export type PageInfo = {
  readonly hasNextPage: Scalars['Boolean']
}

export type Query = {
  readonly file: Maybe<File>
  readonly allFile: Maybe<FileConnection>
  readonly sitePage: Maybe<SitePage>
  readonly allSitePage: Maybe<SitePageConnection>
  readonly sitePlugin: Maybe<SitePlugin>
  readonly allSitePlugin: Maybe<SitePluginConnection>
  readonly site: Maybe<Site>
  readonly allSite: Maybe<SiteConnection>
  readonly directory: Maybe<Directory>
  readonly allDirectory: Maybe<DirectoryConnection>
  readonly resume: Maybe<Resume>
  readonly allResume: Maybe<ResumeConnection>
  readonly siteMetaData: Maybe<SiteMetaData>
  readonly allSiteMetaData: Maybe<SiteMetaDataConnection>
}

export type QueryFileArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  ino: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  publicURL: Maybe<StringQueryOperatorInput>
}

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>
  sort: Maybe<FileSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  path: Maybe<StringQueryOperatorInput>
  jsonName: Maybe<StringQueryOperatorInput>
  internalComponentName: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  componentChunkName: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  pluginCreator: Maybe<SitePluginFilterInput>
  pluginCreatorId: Maybe<StringQueryOperatorInput>
  componentPath: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>
  sort: Maybe<SitePageSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  resolve: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<StringQueryOperatorInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  ssrAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>
  sort: Maybe<SitePluginSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  port: Maybe<IntQueryOperatorInput>
  host: Maybe<StringQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  polyfill: Maybe<BooleanQueryOperatorInput>
  buildTime: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>
  sort: Maybe<SiteSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  ino: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
}

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>
  sort: Maybe<DirectorySortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryResumeArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  name: Maybe<StringQueryOperatorInput>
  phone: Maybe<StringQueryOperatorInput>
  email: Maybe<StringQueryOperatorInput>
  links: Maybe<ResumeLinksFilterListInput>
  section: Maybe<ResumeSectionFilterListInput>
}

export type QueryAllResumeArgs = {
  filter: Maybe<ResumeFilterInput>
  sort: Maybe<ResumeSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteMetaDataArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  title: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
}

export type QueryAllSiteMetaDataArgs = {
  filter: Maybe<SiteMetaDataFilterInput>
  sort: Maybe<SiteMetaDataSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type Resume = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly name: Maybe<Scalars['String']>
  readonly phone: Maybe<Scalars['String']>
  readonly email: Maybe<Scalars['String']>
  readonly links: Maybe<ReadonlyArray<Maybe<ResumeLinks>>>
  readonly section: Maybe<ReadonlyArray<Maybe<ResumeSection>>>
}

export type ResumeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ResumeEdge>
  readonly nodes: ReadonlyArray<Resume>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ResumeGroupConnection>
}

export type ResumeConnectionDistinctArgs = {
  field: ResumeFieldsEnum
}

export type ResumeConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: ResumeFieldsEnum
}

export type ResumeEdge = {
  readonly next: Maybe<Resume>
  readonly node: Resume
  readonly previous: Maybe<Resume>
}

export enum ResumeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Phone = 'phone',
  Email = 'email',
  Links = 'links',
  LinksName = 'links___name',
  LinksLabel = 'links___label',
  LinksUrl = 'links___url',
  Section = 'section',
  SectionTitle = 'section___title',
  SectionDateDisplay = 'section___date_display',
  SectionContent = 'section___content',
  SectionContentStarted = 'section___content___started',
  SectionContentPosition = 'section___content___position',
  SectionContentTechnologies = 'section___content___technologies',
  SectionContentName = 'section___content___name',
  SectionContentUrl = 'section___content___url',
  SectionContentFinished = 'section___content___finished',
  SectionContentLocation = 'section___content___location',
  SectionContentPresent = 'section___content___present',
  SectionContentDescription = 'section___content___description',
  SectionContentAccomplishments = 'section___content___accomplishments',
}

export type ResumeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly phone: Maybe<StringQueryOperatorInput>
  readonly email: Maybe<StringQueryOperatorInput>
  readonly links: Maybe<ResumeLinksFilterListInput>
  readonly section: Maybe<ResumeSectionFilterListInput>
}

export type ResumeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ResumeEdge>
  readonly nodes: ReadonlyArray<Resume>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type ResumeLinks = {
  readonly name: Maybe<Scalars['String']>
  readonly label: Maybe<Scalars['String']>
  readonly url: Maybe<Scalars['String']>
}

export type ResumeLinksFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly label: Maybe<StringQueryOperatorInput>
  readonly url: Maybe<StringQueryOperatorInput>
}

export type ResumeLinksFilterListInput = {
  readonly elemMatch: Maybe<ResumeLinksFilterInput>
}

export type ResumeSection = {
  readonly title: Maybe<Scalars['String']>
  readonly date_display: Maybe<Scalars['String']>
  readonly content: Maybe<ReadonlyArray<Maybe<ResumeSectionContent>>>
}

export type ResumeSectionContent = {
  readonly started: Maybe<Scalars['Date']>
  readonly position: Maybe<Scalars['String']>
  readonly technologies: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly url: Maybe<Scalars['String']>
  readonly finished: Maybe<Scalars['Date']>
  readonly location: Maybe<Scalars['String']>
  readonly present: Maybe<Scalars['Boolean']>
  readonly description: Maybe<Scalars['String']>
  readonly accomplishments: Maybe<Scalars['String']>
}

export type ResumeSectionContentStartedArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type ResumeSectionContentFinishedArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type ResumeSectionContentFilterInput = {
  readonly started: Maybe<DateQueryOperatorInput>
  readonly position: Maybe<StringQueryOperatorInput>
  readonly technologies: Maybe<StringQueryOperatorInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly url: Maybe<StringQueryOperatorInput>
  readonly finished: Maybe<DateQueryOperatorInput>
  readonly location: Maybe<StringQueryOperatorInput>
  readonly present: Maybe<BooleanQueryOperatorInput>
  readonly description: Maybe<StringQueryOperatorInput>
  readonly accomplishments: Maybe<StringQueryOperatorInput>
}

export type ResumeSectionContentFilterListInput = {
  readonly elemMatch: Maybe<ResumeSectionContentFilterInput>
}

export type ResumeSectionFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>
  readonly date_display: Maybe<StringQueryOperatorInput>
  readonly content: Maybe<ResumeSectionContentFilterListInput>
}

export type ResumeSectionFilterListInput = {
  readonly elemMatch: Maybe<ResumeSectionFilterInput>
}

export type ResumeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ResumeFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type Site = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly siteMetadata: Maybe<SiteSiteMetadata>
  readonly port: Maybe<Scalars['Int']>
  readonly host: Maybe<Scalars['String']>
  readonly pathPrefix: Maybe<Scalars['String']>
  readonly polyfill: Maybe<Scalars['Boolean']>
  readonly buildTime: Maybe<Scalars['Date']>
}

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type SiteConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteEdge>
  readonly nodes: ReadonlyArray<Site>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  readonly next: Maybe<Site>
  readonly node: Site
  readonly previous: Maybe<Site>
}

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  readonly port: Maybe<IntQueryOperatorInput>
  readonly host: Maybe<StringQueryOperatorInput>
  readonly pathPrefix: Maybe<StringQueryOperatorInput>
  readonly polyfill: Maybe<BooleanQueryOperatorInput>
  readonly buildTime: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteEdge>
  readonly nodes: ReadonlyArray<Site>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type SiteMetaData = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly title: Maybe<Scalars['String']>
  readonly description: Maybe<Scalars['String']>
}

export type SiteMetaDataConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteMetaDataEdge>
  readonly nodes: ReadonlyArray<SiteMetaData>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SiteMetaDataGroupConnection>
}

export type SiteMetaDataConnectionDistinctArgs = {
  field: SiteMetaDataFieldsEnum
}

export type SiteMetaDataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteMetaDataFieldsEnum
}

export type SiteMetaDataEdge = {
  readonly next: Maybe<SiteMetaData>
  readonly node: SiteMetaData
  readonly previous: Maybe<SiteMetaData>
}

export enum SiteMetaDataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
}

export type SiteMetaDataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly title: Maybe<StringQueryOperatorInput>
  readonly description: Maybe<StringQueryOperatorInput>
}

export type SiteMetaDataGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteMetaDataEdge>
  readonly nodes: ReadonlyArray<SiteMetaData>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type SiteMetaDataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteMetaDataFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SitePage = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly path: Maybe<Scalars['String']>
  readonly jsonName: Maybe<Scalars['String']>
  readonly internalComponentName: Maybe<Scalars['String']>
  readonly component: Maybe<Scalars['String']>
  readonly componentChunkName: Maybe<Scalars['String']>
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
  readonly pluginCreator: Maybe<SitePlugin>
  readonly pluginCreatorId: Maybe<Scalars['String']>
  readonly componentPath: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePageEdge>
  readonly nodes: ReadonlyArray<SitePage>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  readonly next: Maybe<SitePage>
  readonly node: SitePage
  readonly previous: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsImplementationInfo = 'pluginCreator___pluginOptions___implementation___info',
  PluginCreatorPluginOptionsData = 'pluginCreator___pluginOptions___data',
  PluginCreatorPluginOptionsIncludePaths = 'pluginCreator___pluginOptions___includePaths',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
  PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
  PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly path: Maybe<StringQueryOperatorInput>
  readonly jsonName: Maybe<StringQueryOperatorInput>
  readonly internalComponentName: Maybe<StringQueryOperatorInput>
  readonly component: Maybe<StringQueryOperatorInput>
  readonly componentChunkName: Maybe<StringQueryOperatorInput>
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  readonly pluginCreator: Maybe<SitePluginFilterInput>
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>
  readonly componentPath: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePageEdge>
  readonly nodes: ReadonlyArray<SitePage>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  readonly id: Scalars['ID']
  readonly parent: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly resolve: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly pluginOptions: Maybe<SitePluginPluginOptions>
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pluginFilepath: Maybe<Scalars['String']>
  readonly packageJson: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePluginEdge>
  readonly nodes: ReadonlyArray<SitePlugin>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>
  readonly node: SitePlugin
  readonly previous: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsImplementationInfo = 'pluginOptions___implementation___info',
  PluginOptionsData = 'pluginOptions___data',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsStages = 'pluginOptions___stages',
  PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
  PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>
  readonly parent: Maybe<NodeFilterInput>
  readonly children: Maybe<NodeFilterListInput>
  readonly internal: Maybe<InternalFilterInput>
  readonly resolve: Maybe<StringQueryOperatorInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly version: Maybe<StringQueryOperatorInput>
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>
  readonly browserAPIs: Maybe<StringQueryOperatorInput>
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePluginEdge>
  readonly nodes: ReadonlyArray<SitePlugin>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>
  readonly description: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly main: Maybe<Scalars['String']>
  readonly license: Maybe<Scalars['String']>
  readonly dependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
  >
  readonly devDependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
  >
  readonly peerDependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
  >
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly description: Maybe<StringQueryOperatorInput>
  readonly version: Maybe<StringQueryOperatorInput>
  readonly main: Maybe<StringQueryOperatorInput>
  readonly license: Maybe<StringQueryOperatorInput>
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  readonly devDependencies: Maybe<
    SitePluginPackageJsonDevDependenciesFilterListInput
  >
  readonly peerDependencies: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >
  readonly keywords: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  readonly implementation: Maybe<SitePluginPluginOptionsImplementation>
  readonly data: Maybe<Scalars['String']>
  readonly includePaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pathToConfigModule: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly path: Maybe<Scalars['String']>
  readonly stages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly options: Maybe<SitePluginPluginOptionsOptions>
  readonly pathCheck: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  readonly implementation: Maybe<
    SitePluginPluginOptionsImplementationFilterInput
  >
  readonly data: Maybe<StringQueryOperatorInput>
  readonly includePaths: Maybe<StringQueryOperatorInput>
  readonly pathToConfigModule: Maybe<StringQueryOperatorInput>
  readonly name: Maybe<StringQueryOperatorInput>
  readonly path: Maybe<StringQueryOperatorInput>
  readonly stages: Maybe<StringQueryOperatorInput>
  readonly options: Maybe<SitePluginPluginOptionsOptionsFilterInput>
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsImplementation = {
  readonly info: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsImplementationFilterInput = {
  readonly info: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsOptions = {
  readonly emitWarning: Maybe<Scalars['Boolean']>
  readonly failOnError: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsOptionsFilterInput = {
  readonly emitWarning: Maybe<BooleanQueryOperatorInput>
  readonly failOnError: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  readonly menuLinks: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataMenuLinks>>>
}

export type SiteSiteMetadataFilterInput = {
  readonly menuLinks: Maybe<SiteSiteMetadataMenuLinksFilterListInput>
}

export type SiteSiteMetadataMenuLinks = {
  readonly name: Maybe<Scalars['String']>
  readonly link: Maybe<Scalars['String']>
}

export type SiteSiteMetadataMenuLinksFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>
  readonly link: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataMenuLinksFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataMenuLinksFilterInput>
}

export type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>
  readonly ne: Maybe<Scalars['String']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly regex: Maybe<Scalars['String']>
  readonly glob: Maybe<Scalars['String']>
}
export type SiteLinksDataQueryVariables = {}

export type SiteLinksDataQuery = { readonly __typename?: 'Query' } & {
  readonly siteMetaData: Maybe<
    { readonly __typename?: 'siteMetaData' } & Pick<SiteMetaData, 'title'>
  >
  readonly site: Maybe<
    { readonly __typename?: 'Site' } & {
      readonly siteMetadata: Maybe<
        { readonly __typename?: 'SiteSiteMetadata' } & {
          readonly menuLinks: Maybe<
            ReadonlyArray<
              Maybe<
                { readonly __typename?: 'SiteSiteMetadataMenuLinks' } & Pick<
                  SiteSiteMetadataMenuLinks,
                  'name' | 'link'
                >
              >
            >
          >
        }
      >
    }
  >
}

export type HelmetDataQueryVariables = {}

export type HelmetDataQuery = { readonly __typename?: 'Query' } & {
  readonly siteMetaData: Maybe<
    { readonly __typename?: 'siteMetaData' } & Pick<
      SiteMetaData,
      'title' | 'description'
    >
  >
}

export type ResumeDataQueryVariables = {}

export type ResumeDataQuery = { readonly __typename?: 'Query' } & {
  readonly resume: Maybe<
    { readonly __typename?: 'resume' } & Pick<
      Resume,
      'name' | 'phone' | 'email'
    > & {
        readonly links: Maybe<
          ReadonlyArray<
            Maybe<
              { readonly __typename?: 'resumeLinks' } & Pick<
                ResumeLinks,
                'name' | 'url'
              >
            >
          >
        >
        readonly section: Maybe<
          ReadonlyArray<
            Maybe<
              { readonly __typename?: 'resumeSection' } & Pick<
                ResumeSection,
                'title' | 'date_display'
              > & {
                  readonly content: Maybe<
                    ReadonlyArray<
                      Maybe<
                        { readonly __typename?: 'resumeSectionContent' } & Pick<
                          ResumeSectionContent,
                          | 'name'
                          | 'position'
                          | 'location'
                          | 'url'
                          | 'description'
                          | 'started'
                          | 'present'
                          | 'finished'
                          | 'technologies'
                          | 'accomplishments'
                        >
                      >
                    >
                  >
                }
            >
          >
        >
      }
  >
}
