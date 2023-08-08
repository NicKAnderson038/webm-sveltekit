<script>
	import Sound from '../Buttons/Sound.svelte'
	import Button from '../Buttons/Button.svelte'
</script>

<footer class="card-footer">
	<div class="buttons">
		<slot />
	</div>
	<div>
		<Button style="primary with-icon svg chevron" route="/nav"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="currentColor"
				class="chevron"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</svg></Button
		>
		<Sound />
	</div>
</footer>

<style>
	.card-footer {
		margin-inline: 1rem;
		align-self: end;
		margin-block-start: 0.5rem;
		margin-block-end: 1rem;
		display: flex;
		justify-content: space-between;
	}

	.buttons {
		display: inline-flex;
	}
</style>