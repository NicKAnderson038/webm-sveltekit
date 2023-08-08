<div class="container">
	<main class="card">
		<slot />
	</main>
</div>

<style>
	.container {
		max-width: 60rem;
		margin: auto;
		padding: 1em;
		display: flex;
		justify-content: center;
		/* width: 100%;
		height: 90vh;
		background-color: #ffffff;
		font-family: gothambook;
		position: fixed;
		top: 0;
		bottom: 0; */
	}

	.card {
		/* display: grid;
		grid-template-rows: 1fr auto max-content; */
		/* width: 22.5rem; */
		/* aspect-ratio: 1 / 1.5; */
		background: #fff;
		border-radius: 0.5em;
		overflow: hidden;
		box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.2), 0 2px 4px 0px rgba(0, 0, 0, 0.2),
			0 4px 8px 0px rgba(0, 0, 0, 0.2), 0 8px 16px 0px rgba(0, 0, 0, 0.067),
			0 16px 32px 0px rgba(0, 0, 0, 0.133), 0 32px 48px 0px rgba(0, 0, 0, 0.2);
	}
</style>