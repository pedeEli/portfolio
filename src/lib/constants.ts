export const FILE_SIZE = 512

export const positions = {
	blue: { top: 0, left: 0 },
	orange: { top: 0, left: FILE_SIZE },
	yellow: { top: 0, left: FILE_SIZE * 2 },
	green: { top: FILE_SIZE, left: 0 },
	white: { top: FILE_SIZE, left: FILE_SIZE },
	red: { top: FILE_SIZE, left: FILE_SIZE * 2 }
}

export const colorToUrl: Record<Color, SideUrl> = {
	blue: '',
	orange: 'navigation',
	yellow: 'about-me',
	green: 'about-this-page',
	white: 'projects',
	red: 'imprint'
}

export const urlToColor: Record<SideUrl, Color> = {
	'': 'blue',
	navigation: 'orange',
	'about-me': 'yellow',
	'about-this-page': 'green',
	projects: 'white',
	imprint: 'red'
}

export const colorInfos: Record<
	Color,
	{
		bg: string
		txt: string
	}
> = {
	blue: {
		bg: 'bg-blue-600',
		txt: 'text-zinc-200'
	},
	orange: {
		bg: 'bg-orange-600',
		txt: 'text-zinc-200'
	},
	yellow: {
		bg: 'bg-yellow-400',
		txt: 'text-zinc-900'
	},
	green: {
		bg: 'bg-green-600',
		txt: 'text-zinc-200'
	},
	white: {
		bg: 'bg-zinc-200',
		txt: 'text-zinc-900'
	},
	red: {
		bg: 'bg-red-600',
		txt: 'text-zinc-200'
	}
}

export const directionMap: Record<SideUrl, [x: number, y: number]> = {
	'': [1, 0],
	navigation: [1, 1],
	'about-this-page': [1, 2],
	'about-me': [0, 1],
	projects: [2, 1],
	imprint: [3, 1]
}

export const isFaceURL = (str: string): str is SideUrl => {
	return str in directionMap
}
