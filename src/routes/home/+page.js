/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line no-unused-vars
export async function load({ fetch, params }) {
	// console.log(params)
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	const item = await res.json();
	return {
		...item,
		video: 'https://dl6.webmfiles.org/big-buck-bunny_trailer.webm',
		audio: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3'
	};
}
