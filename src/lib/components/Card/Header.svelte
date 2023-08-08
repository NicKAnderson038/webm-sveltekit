<header class="card-header">
	<slot />
</header>

<style>
	.card-header {
		display: grid;
		position: relative;
		overflow: hidden;
	}
	.card-header::before {
		content: '';
		position: absolute;
		display: flex;
		inset: 0;
		/* background: url(https://cdn.pixabay.com/photo/2017/06/26/08/13/mockup-2443050_960_720.jpg)
			center/cover; */
		transition: transform 300ms ease;
	}

	.card-header:hover::before {
		transform: scale(1.2);
		transition: transform 266ms linear;
	}
</style>
