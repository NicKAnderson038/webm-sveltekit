<script>
	import { goto } from '$app/navigation'
	export let route
	export let click
	export let style = 'primary'
	export let disabled = false
	const handleClick = () => {
		if (click) {
			click()
		}
		if (route) {
			goto(route)
		}
	}
</script>

<button on:click={handleClick} class={style} {disabled}>
	<slot />
</button>

<style>
	/* https://codepen.io/decent_descent/pen/wvdOaPq */
	@keyframes no-no {
		0% {
			transform: translateX(0);
		}
		14% {
			transform: translateX(-3px);
		}
		28% {
			transform: translateX(0);
		}
		42% {
			transform: translateX(3px);
		}
		56% {
			transform: translateX(0);
		}
		84% {
			transform: translateX(-3px);
		}
		100% {
			transform: translateX(0);
		}
	}
	button {
		appearance: none;
		margin: 4px 2px;
		border: none;
		font-size: 16px;
		font-weight: bold;
		/* padding: 10px 16px; */
		padding: 6px 10px;
		/* min-width: 140px; */
		min-width: 60px;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.14s;
		outline: none;
	}
	button:active {
		transform: translateY(3px);
	}
	button:disabled {
		cursor: not-allowed;
	}
	button:disabled:hover {
		animation: no-no 0.24s forwards;
	}

	.primary {
		box-shadow: 0 3px 0 0 #b89300;
		background: #ffd633;
		color: #383838;
	}
	.primary svg {
		fill: #383838;
	}
	.primary:hover {
		background: #ffe785;
	}
	.primary:active {
		box-shadow: 0 0 0 0 #b89300;
	}
	.primary:disabled {
		background: #ffefad;
		box-shadow: 0 3px 0 0 #ffde5c;
		color: #ffd633;
	}
	.primary:disabled svg {
		fill: #ffd633;
	}

	.secondary {
		box-shadow: 0 3px 0 0 #40454f;
		background: #70798c;
		color: #ffffff;
	}
	.secondary svg {
		fill: #ffffff;
	}
	.secondary:hover {
		background: #8e95a4;
	}
	.secondary:active {
		box-shadow: 0 0 0 0 #40454f;
	}
	.secondary:disabled {
		background: #d2d5db;
		box-shadow: 0 3px 0 0 #bbbfc9;
		color: #a4aab6;
	}
	.secondary:disabled svg {
		fill: #a4aab6;
	}

	.danger {
		box-shadow: 0 3px 0 0 #921a11;
		background: #e63b2e;
		color: #fff;
	}
	.danger svg {
		fill: #fff;
	}
	.danger:hover {
		background: #ec645b;
	}
	.danger:active {
		box-shadow: 0 0 0 0 #921a11;
	}
	.danger:disabled {
		background: #f9cbcb;
		box-shadow: 0 3px 0 0 #f0877f;
		color: #f4a9a4;
	}
	.danger:disabled svg {
		fill: #f4a9a4;
	}

	.with-icon {
		/* padding: 7px 8px; */
		min-width: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	.with-icon svg {
		width: 24px;
	}

	.chevron {
		stroke: #383838;
	}
</style>