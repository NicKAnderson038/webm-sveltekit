<script>
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { useAudio } from '../../../stores/store.js'
	import Button from '../../../lib/components/Buttons/Button.svelte'
	import Card from '../../../lib/components/Card/Wrapper.svelte'
	import CardHeader from '../../../lib/components/Card/Header.svelte'
	import CardActions from '../../../lib/components/Card/Footer.svelte'

	const controls = {
		src: $page?.data?.data?.video,
		// src: '/video/37.webm',
		// width: '600',
		autoPlay: true,
		loop: true,
	}
	$: muted = !$useAudio || !!$page?.data?.data?.audio
	$: console.log($page?.data?.data?.id)

	let step = $page?.data?.data?.id
	let video
	let audio
	let action = false
	let duration
	let currentTime = 50
	let currentAudioTime = 0

	onMount(() => {
		video = document.getElementById('video')
		audio = document.getElementById('audio')
        video.currentTime = $page?.data?.data?.startLoop
        // audio.currentAudioTime = $page?.data?.data?.startLoop
	})

	const trackCurrentTime = async () => {
        if(currentTime > $page?.data?.data?.endLoop) {
            console.log(currentTime)
            await video?.play()
            // video.currentTime = $page?.data?.data?.startLoop
            currentTime = $page?.data?.data?.startLoop
            action = false
        }
		// if (currentTime > duration - 0.09 && action) {
		// 	console.log('Action: ', currentTime)
		// 	await audio.play()
		// 	await video.play()
		// 	currentAudioTime = $page?.data?.data?.startLoop
		// 	currentTime = $page?.data?.data?.startLoop
		// 	action = false
		// }
		// if (currentTime > $page?.data?.data?.endLoop && !action) {
		// 	console.log('Regular: ', currentTime)
		// 	await audio.play()
		// 	await video.play()
		// 	currentAudioTime = $page?.data?.data?.startLoop
		// 	currentTime = $page?.data?.data?.startLoop
		// 	action = false
		// }
		return
	}

	$: currentTime, trackCurrentTime()
    // $: console.log(currentTime)
</script>
<!-- {`${$page?.data?.data?.video}#t=5,8`} -->
<Card>
	<CardHeader
		><video
			style="width:100%;height:auto;"
			id="video"
			src={$page?.data?.data?.video}
			autoPlay
			loop
			bind:muted
            bind:duration
            bind:currentTime
		>
			<track kind="captions" />
			Your browser does not support HTML5 video.
		</video>
		<!-- {#if !!$page?.data?.data?.audio && $useAudio}
			<audio
				id="audio"
				src={$useAudio ? $page?.data?.data?.audio : ''}
				autoPlay
				loop
				bind:currentTime={currentAudioTime}
			/>
		{/if} -->
	</CardHeader>
	<!-- <CardHeader
		><video {...controls} bind:muted style="width:100%;">
			<track kind="captions" /> Your browser does not support HTML5 video.
		</video>

		{#if !!$page?.data?.data?.audio && $useAudio}
			<audio width="400" autoPlay loop>
				<source src={$page?.data?.data?.audio} type="audio/mpeg" />
			</audio>
		{/if}
	</CardHeader> -->
	<CardActions>
		<Button route="/home">Home</Button>
	</CardActions>
</Card>
