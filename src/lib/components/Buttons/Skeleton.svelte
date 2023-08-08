<div class="is-loading" />

<style>
	.is-loading {
		width: 650px;
		height: 450px;
		/* margin: 10px 0; */
		max-width: inherit;
		/* border-radius: 5px; */
		background: #eee;
		background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
		background-size: 200% 100%;
		-webkit-animation: 1.5s shine linear infinite;
		animation: 1.5s shine linear infinite;
	}

	@-webkit-keyframes shine {
		to {
			background-position-x: -200%;
		}
	}

	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}
</style>
