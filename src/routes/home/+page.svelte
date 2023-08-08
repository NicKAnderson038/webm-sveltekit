<script>
	import { page } from '$app/stores'
	import { useAudio } from '../../stores/store.js'
	import Button from '../../lib/components/Buttons/Button.svelte'
	import Card from '../../lib/components/Card/Wrapper.svelte'
	import CardHeader from '../../lib/components/Card/Header.svelte'
	import CardActions from '../../lib/components/Card/Footer.svelte'

	// let poster = "https://sveltejs.github.io/assets/caminandes-llamigos.jpg"

	const video = {
		src: $page?.data?.data?.[0]?.video,
		// src: '/video/37.webm',
		// width: '600',
		autoPlay: true,
		loop: true,
	}
	$: muted = !$useAudio || !!$page?.data?.data?.[0]?.audio
	$: console.log($page?.data)
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<Card>
	<CardHeader
		><video {...video} bind:muted style="width:100%;">
			<track kind="captions" /> Your browser does not support HTML5 video.
		</video>

		{#if !!$page?.data?.data?.[0]?.audio && $useAudio}
			<audio width="400" autoPlay loop>
				<source src={$page?.data?.data?.[0]?.audio} type="audio/mpeg" />
			</audio>
		{/if}
	</CardHeader>
	<CardActions>
		<Button route="/home/1" disabled={$page?.data?.isLoading}>Begin</Button>
	</CardActions>
</Card>
