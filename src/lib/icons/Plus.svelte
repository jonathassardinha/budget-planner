<script lang="ts">
	export let color = '#FAFAFA';
	let className = '';

	export { className as class };
</script>

<svg
	id="Layer_1"
	data-name="Layer 1"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	width="24"
	height="24"
	{color}
	class={className}
>
	<!-- <circle class="line" cx="12" cy="12" r="10.5" /> -->
	<line class="line" x1="2" y1="12" x2="22" y2="12" />
	<line class="line" x1="12" y1="2" x2="12" y2="22" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
