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
		d="M11,.5V6.76a3.81,3.81,0,0,1-2.12,3.42h0a3.83,3.83,0,0,1-3.43,0h0A3.83,3.83,0,0,1,3.37,6.76V.5"
	/>
	<line class="line" x1="7.21" y1="0.5" x2="7.21" y2="23.5" />
	<path class="line" d="M14.87,23.5v-22h0a5.74,5.74,0,0,1,5.74,5.75V13l-5.75,2.87" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
