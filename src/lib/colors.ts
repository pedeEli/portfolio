interface Colors {
  bg: string,
  txt: string,
  btn: string,
  name: string,
}

type Faces = 'landing' | 'navigation' | 'about-me' | 'about-this-page' | 'projects' | 'imprint'

export const colors: Record<Faces, Colors> = {
  'landing': {
    bg: 'bg-blue-600',
    btn: 'bg-blue-800',
    txt: 'text-zinc-200',
    name: 'Landing Page'
  },
  'navigation': {
    bg: 'bg-orange-600',
    btn: 'bg-orange-800',
    txt: 'text-zinc-200',
    name: 'Navigation'
  },
  'about-me': {
    bg: 'bg-yellow-400',
    btn: 'bg-yellow-600',
    txt: 'text-zinc-900',
    name: 'About Me'
  },
  'about-this-page': {
    bg: 'bg-green-600',
    btn: 'bg-green-800',
    txt: 'text-zinc-200',
    name: 'About This Page'
  },
  'projects': {
    bg: 'bg-zinc-200',
    btn: 'bg-zinc-500',
    txt: 'text-zinc-900',
    name: 'Projects'
  },
  'imprint': {
    bg: 'bg-red-600',
    btn: 'bg-red-800',
    txt: 'text-zinc-200',
    name: 'Imprint'
  }
}