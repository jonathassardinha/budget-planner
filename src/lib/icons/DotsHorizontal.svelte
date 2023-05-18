<script lang="ts">
	export let color = '#333';
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
	class={className}
	{color}
>
	<circle class="circle" cx="3.41" cy="12" r="1.91" />
	<circle class="circle" cx="12" cy="12" r="1.91" />
	<circle class="circle" cx="20.59" cy="12" r="1.91" />
</svg>

<style>
	.circle {
		fill: currentColor;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
