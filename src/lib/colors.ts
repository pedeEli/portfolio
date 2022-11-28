export interface Colors {
  bg: string,
  txt: string,
  btn: string
}

export type Faces = 'welcome' | 'navigation' | 'aboutMe' | 'aboutThisPage' | 'projects' | 'imprint'

export const colors: Record<Faces, Colors> = {
  'welcome': {
    bg: 'bg-blue-600',
    btn: 'bg-blue-800',
    txt: 'text-zinc-200'
  },
  'navigation': {
    bg: 'bg-orange-600',
    btn: 'bg-orange-800',
    txt: 'text-zinc-200'
  },
  'aboutMe': {
    bg: 'bg-yellow-400',
    btn: 'bg-yellow-600',
    txt: 'text-zinc-900'
  },
  'aboutThisPage': {
    bg: 'bg-green-600',
    btn: 'bg-green-800',
    txt: 'text-zinc-200'
  },
  'projects': {
    bg: 'bg-zinc-200',
    btn: 'bg-zinc-500',
    txt: 'text-zinc-900'
  },
  'imprint': {
    bg: 'bg-red-600',
    btn: 'bg-red-800',
    txt: 'text-zinc-200'
  }
}