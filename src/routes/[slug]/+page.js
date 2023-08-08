/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line no-unused-vars
export async function load({ fetch, params }) {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
		const item = await res.json()
		return {
			data: {
				...item,
				video: 'https://dl6.webmfiles.org/big-buck-bunny_trailer.webm',
				// audio: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
				endLoop: 8,
				startLoop: 5,
				name: `Good Moring ${params.slug}`,
			},
			isLoading: false,
		}
	} catch (error) {
		console.error(error)
	}
}
