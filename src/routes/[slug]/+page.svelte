<script>
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { useAudio } from '../../stores/store.js'
	import Button from '../../lib/components/Buttons/Button.svelte'
	import Card from '../../lib/components/Card/Wrapper.svelte'
	import CardHeader from '../../lib/components/Card/Header.svelte'
	import CardActions from '../../lib/components/Card/Footer.svelte'

	const controls = {
		src: $page?.data?.data?.video,
		// src: '/video/37.webm',
		// width: '600',
		autoPlay: true,
		loop: true,
	}
	$: muted = !$useAudio || !!$page?.data?.data?.audio

	$: step = Number($page?.data?.data?.id)
	let video
	let audio
	let action = false
	// TODO: duration might work better as undefined
	let duration = 0
	let currentTime = 100000
	let currentAudioTime = 100000

	onMount(() => {
		video = document.getElementById('video')
		audio = document.getElementById('audio')
		video.currentTime = $page?.data?.data?.startLoop

		if (!!audio) {
			audio.currentAudioTime = $page?.data?.data?.startLoop
		}
	})

	const trackCurrentTime = async () => {
		if (currentTime >= duration - 0.09 && action) {
			console.log('Full Video End Time: ', currentTime)
			await audio?.play()
			await video?.play()
			currentAudioTime = 0
			currentTime = 0
			// currentAudioTime = $page?.data?.data?.startLoop
			// currentTime = $page?.data?.data?.startLoop
			action = false
		}
		if (currentTime > $page?.data?.data?.endLoop && !action) {
			console.log('Short Loop End Time: ', currentTime)
			await audio?.play()
			await video?.play()
			currentAudioTime = $page?.data?.data?.startLoop
			currentTime = $page?.data?.data?.startLoop
		}
		return
	}

	$: currentTime, trackCurrentTime()
	$: console.log(action, duration)
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
	<CardActions>
		<Button
			click={() => (step === 1 ? goto('/') : goto(`/${step - 1}`))}
			disabled={action}
			style="primary with-icon svg chevron"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				style="margin-right:2px;bottom:1px;position:relative;"
				width="16"
				height="16"
				fill="currentColor"
				class="chevron"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
				/>
			</svg>Back</Button
		>
		<Button click={() => (action = !action)} disabled={action} style="primary with-icon svg">
			<svg viewBox="0 0 24 24">
				<path
					style=" stroke:none;fill-rule:nonzero;fill:#383838;fill-opacity:1;"
					d="M 12.007812 0 C 5.375 0 0 5.375 0 12.007812 C 0 18.636719 5.375 24.011719 12.007812 24.011719 C 18.636719 24.011719 24.011719 18.636719 24.011719 12.007812 C 24.011719 5.375 18.636719 0 12.007812 0 Z M 16.855469 13.527344 L 9.421875 17.789062 C 8.421875 18.363281 7.613281 17.894531 7.613281 16.742188 L 7.613281 8.234375 C 7.613281 7.082031 8.421875 6.613281 9.421875 7.1875 L 16.855469 11.449219 C 17.855469 12.023438 17.855469 12.953125 16.855469 13.527344 Z M 16.855469 13.527344 "
				/>
			</svg>
		</Button>
		<Button
			click={() => (step >= 10 ? goto('/') : goto(`/${step + 1}`))}
			disabled={action}
			style="primary with-icon svg chevron"
		>
			{step >= 10 ? 'Home' : 'Next'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style="margin-left:2px;bottom:1px;position:relative;"
				width="16"
				height="16"
				fill="currentColor"
				class="chevron"
				viewBox="0 0 16 16"
			>
				{#if step >= 10}
					<path
						fill-rule="evenodd"
						d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
					/>
				{:else}
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				{/if}
			</svg>
		</Button>
	</CardActions>
	<!-- <CardActions>
		<Button route="/home">Home</Button>
	</CardActions> -->
</Card>
