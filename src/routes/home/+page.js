/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line no-unused-vars
export async function load({ fetch, params }) {
	// console.log(params)
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
		console.log(res)
		const item = await res.json()
		const data = item.reduce((acc, item, i) => {
			acc.push({
				...item,
				video: 'https://dl6.webmfiles.org/big-buck-bunny_trailer.webm',
				audio: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
				endLoop: 2,
				startLoop: 0,
				name: `Good Moring ${i}`,
			})
			return acc
		}, [])
		return {
			data,
			isLoading: false,
		}
	} catch (error) {
		console.error(error)
	}
}
