<script>
	import { page } from '$app/stores'
	import { useAudio } from '../stores/store.js'
	// import Skeleton from '$lib/components/Buttons/Skeleton.svelte'
	import Button from '$lib/components/Buttons/Button.svelte'
	import Card from '$lib/components/Card/Wrapper.svelte'
	import CardHeader from '$lib/components/Card/Header.svelte'
	import CardActions from '$lib/components/Card/Footer.svelte'

	const video = {
		src: $page?.data?.data?.[0]?.video,
		// poster: "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2-300x200.png",
		// width: '600',
		autoPlay: true,
		loop: true,
	}

	$: muted = !$useAudio || !!$page?.data?.data?.[0]?.audio
	$: console.log(muted)
	// $: showSkeleton = true
	// $: if(!$page?.data?.data?.isLoading) {
	// 	setTimeout(() => {
	// 		showSkeleton = false
	// 	}, 1500)
	// }
</script>

<svelte:head>
	<title>Videos</title>
</svelte:head>

<Card>
	<!-- {#if showSkeleton}
		<Skeleton />
	{:else} -->
	<CardHeader
		><video id="video" {...video} bind:muted style="width:100%;">
			<track kind="captions" /> Your browser does not support HTML5 video.
		</video>

		{#if !!$page?.data?.data?.[0]?.audio && $useAudio}
			<audio width="400" autoPlay loop>
				<source src={$page?.data?.data?.[0]?.audio} type="audio/mpeg" />
			</audio>
		{/if}
	</CardHeader>
	<CardActions>
		<Button route="/1" disabled={$page?.data?.isLoading}>Begin</Button>
	</CardActions>
	<!-- {/if} -->
</Card>

<style>
	/* video {
		object-fit: cover;
		height: 400px;
	} */
</style>
