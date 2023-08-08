<script>
	import { goto } from '$app/navigation'
	import steps from './video-key'
	import Button from '../../lib/components/Buttons/Button.svelte'
	import Card from '../../lib/components/Card/Wrapper.svelte'
	import CardBody from '../../lib/components/Card/Content.svelte'
	import CardActions from '../../lib/components/Card/Footer.svelte'
</script>

<Card>
	<CardBody>
		<ul>
			{#each steps as step, i}
				<li on:click={() => goto(`/home/${i+1}`)}>
					<span>
						{step.name}
					</span>
				</li>
			{/each}
		</ul>
	</CardBody>
	<CardActions>
		<Button style="primary with-icon svg chevron" route="/home"
			>Home<svg
				xmlns="http://www.w3.org/2000/svg"
				style="margin-left:2px;bottom:1px;position:relative;"
				width="16"
				height="16"
				fill="currentColor"
				class="chevron"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
				/>
				<path
					fill-rule="evenodd"
					d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
				/>
			</svg></Button
		>
	</CardActions>
</Card>

<style>
	span {
		text-decoration: none;
		user-select: none;
	}

	ul {
		background: darkorange;
		list-style: none;
		margin: 0;
		padding-left: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-items: stretch;
		justify-content: space-evenly;
		min-width: 400px;
	}

	li {
		font-family: sans-serif;
		font-size: 16px;
		color: #383838;
		background: darkorange;
		display: block;
		float: left;
		padding: 1rem;
		position: relative;
		text-decoration: none;
		transition-duration: 0.2s;
		font-weight: bold;
	}

	li span {
		color: #383838;
	}

	li:hover {
		background: #e63b2e;
		cursor: pointer;
	}

	li:hover > span {
		transition: all 0.5s ease;
		margin-left: 0.5rem;
		color: #921a11;
	}
</style>