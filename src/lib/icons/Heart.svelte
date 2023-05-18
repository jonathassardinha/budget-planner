<script lang="ts">
	export let color = '#FAFAFA';
	let className = '';

	export { className as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	width="24"
	height="24"
	class={className}
	{color}
>
	<g id="heartrate">
		<path
			class="line"
			d="M14.86,13h-.95l-1-1.91-1.9,3.82L9.14,10.11,7.23,13H3.41l-.33-.33A5.4,5.4,0,1,1,10.72,5L12,6.3,13.28,5a5.4,5.4,0,1,1,7.64,7.63l-.33.33L12,21.57,6.07,15.64"
		/>
		<line class="line" x1="15.82" y1="12.98" x2="17.73" y2="12.98" />
	</g>
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
