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
	<rect class="line" x="2.42" y="6.25" width="3.83" height="11.5" rx="1.92" />
	<rect class="line" x="17.75" y="6.25" width="3.83" height="11.5" rx="1.92" />
	<line class="line" x1="0.5" y1="12" x2="2.42" y2="12" />
	<line class="line" x1="6.25" y1="12" x2="17.75" y2="12" />
	<line class="line" x1="21.58" y1="12" x2="23.5" y2="12" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
