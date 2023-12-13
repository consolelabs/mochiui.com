export interface NPMDataResponse {
  _id?: string
  _rev?: string
  name?: string
  'dist-tags'?: DistTags
  versions?: Record<string, VersionData>
  time?: Record<string, string>
  maintainers?: Maintainer[]
  description?: string
  license?: string
  readme?: string
  readmeFilename?: string
}

export interface DistTags {
  latest: string
}

export interface VersionData {
  name: string
  version: string
  sideEffects: boolean
  main: string
  license: string
  peerDependencies: Record<string, string>
  dependencies: Record<string, string>
  'clean-package': string
  module: string
  types: string
  exports: Exports
  scripts: Record<string, string>
  description: string
  _id: string
  _integrity: string
  _resolved: string
  _from: string
  _nodeVersion: string
  _npmVersion: string
  dist: Dist
  _npmUser: NpmUser
  directories: any
  maintainers: Maintainer[]
  _npmOperationalInternal: NpmOperationalInternal
  _hasShrinkwrap: boolean
}

export interface Exports {
  '.': GeneratedType
  './package.json': string
}

export interface GeneratedType {
  types: string
  import: string
  require: string
}

export interface Dist {
  integrity: string
  shasum: string
  tarball: string
  fileCount: number
  unpackedSize: number
  signatures: Signature[]
}

export interface Signature {
  keyid: string
  sig: string
}

export interface NpmUser {
  name: string
  email: string
}

export interface Maintainer {
  name: string
  email: string
}

export interface NpmOperationalInternal {
  host: string
  tmp: string
}
