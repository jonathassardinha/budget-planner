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
	<g id="bank">
		<polygon class="line" points="22.5 6.27 22.5 9.14 1.5 9.14 1.5 6.27 12 1.5 22.5 6.27" />
		<rect class="line" x="1.5" y="18.68" width="21" height="3.82" />
		<line class="line" x1="3.41" y1="9.14" x2="3.41" y2="18.68" />
		<line class="line" x1="9.14" y1="9.14" x2="9.14" y2="18.68" />
		<line class="line" x1="14.86" y1="9.14" x2="14.86" y2="18.68" />
		<line class="line" x1="20.59" y1="9.14" x2="20.59" y2="18.68" />
	</g>
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-linecap: square;
		stroke-miterlimit: 10;
	}
</style>
