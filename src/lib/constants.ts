export const FILE_SIZE = 512

export const positions = {
	blue: { top: 0, left: 0 },
	orange: { top: 0, left: FILE_SIZE },
	yellow: { top: 0, left: FILE_SIZE * 2 },
	green: { top: FILE_SIZE, left: 0 },
	white: { top: FILE_SIZE, left: FILE_SIZE },
	red: { top: FILE_SIZE, left: FILE_SIZE * 2 }
}

export const colors = ['blue', 'orange', 'yellow', 'green', 'white', 'red'] as const

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

export const colorPositions: Record<Color, [x: number, y: number]> = {
	blue: [1, 0],
	orange: [1, 1],
	green: [1, 2],
	yellow: [0, 1],
	white: [2, 1],
	red: [3, 1]
}

export const isColor = (str: string): str is Color => colors.includes(str as any)
