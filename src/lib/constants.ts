export const FILE_SIZE = 512

export const positions = {
  'blue': {top: 0, left: 0},
  'orange': {top: 0, left: FILE_SIZE},
  'yellow': {top: 0, left: FILE_SIZE * 2},
  'green': {top: FILE_SIZE, left: 0},
  'white': {top: FILE_SIZE, left: FILE_SIZE},
  'red': {top: FILE_SIZE, left: FILE_SIZE * 2}
}

export const faceUrlToColor: Record<FaceURL, Color> = {
  '': 'blue',
  'navigation': 'orange',
  'about-me': 'yellow',
  'about-this-page': 'green',
  'projects': 'white',
  'imprint': 'red'
}

export const colorInfos: Record<Color, ColorInfo> = {
  'blue': {
    bg: 'bg-blue-600',
    btn: 'bg-blue-800',
    txt: 'text-zinc-200'
  },
  'orange': {
    bg: 'bg-orange-600',
    btn: 'bg-orange-800',
    txt: 'text-zinc-200'
  },
  'yellow': {
    bg: 'bg-yellow-400',
    btn: 'bg-yellow-600',
    txt: 'text-zinc-900'
  },
  'green': {
    bg: 'bg-green-600',
    btn: 'bg-green-800',
    txt: 'text-zinc-200'
  },
  'white': {
    bg: 'bg-zinc-200',
    btn: 'bg-zinc-500',
    txt: 'text-zinc-900'
  },
  'red': {
    bg: 'bg-red-600',
    btn: 'bg-red-800',
    txt: 'text-zinc-200'
  }
}

export const directionMap: Record<FaceURL, Partial<Record<FaceURL, Direction>>> = {
  '': {
    'navigation': 'down'
  },
  'navigation': {
    '': 'up',
    'projects': 'right',
    'about-this-page': 'down',
    'about-me': 'left'
  },
  'about-me': {
    'navigation': 'right'
  },
  'about-this-page': {
    'navigation': 'up'
  },
  'projects': {
    'navigation': 'left',
    'imprint': 'right'
  },
  'imprint': {
    'projects': 'left'
  }
}