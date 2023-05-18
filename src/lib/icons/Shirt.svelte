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
	class={className}
	{color}
>
	<path
		class="line"
		d="M20.59,11.05V22.5H3.41V11.05c3.82,0,2.86-5.33,2.86-9.55H17.73C17.73,5.72,17.73,11.05,20.59,11.05Z"
	/>
	<path class="line" d="M14.86,1.5c0,3.69-1.28,6.68-2.86,6.68s-2.86-3-2.86-6.68Z" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
