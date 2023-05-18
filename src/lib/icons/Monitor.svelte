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
	<line class="line" x1="8.18" y1="22.5" x2="9.14" y2="17.73" />
	<line class="line" x1="5.32" y1="22.5" x2="18.68" y2="22.5" />
	<rect class="line" x="1.5" y="1.5" width="21" height="16.23" rx="1.91" />
	<line class="line" x1="15.75" y1="22.5" x2="14.8" y2="17.73" />
	<line class="line" x1="1.5" y1="13.91" x2="22.5" y2="13.91" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
