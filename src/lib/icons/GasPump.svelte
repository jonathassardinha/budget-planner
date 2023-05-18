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
	<rect class="line" x="1.48" y="1.5" width="13.36" height="8.59" />
	<rect class="line" x="2.43" y="10.09" width="11.45" height="12.41" />
	<line class="line" x1="15.8" y1="22.5" x2="0.52" y2="22.5" />
	<path
		class="line"
		d="M10.24,17.56a2.08,2.08,0,0,1-4.16,0c0-1.78,2.08-3.86,2.08-3.86S10.24,15.78,10.24,17.56Z"
	/>
	<line class="line" x1="5.3" y1="4.36" x2="5.3" y2="7.23" />
	<line class="line" x1="8.16" y1="4.36" x2="8.16" y2="7.23" />
	<line class="line" x1="11.02" y1="4.36" x2="11.02" y2="7.23" />
	<path
		class="line"
		d="M13.89,10.09h2.86A1.92,1.92,0,0,1,18.66,12v7.64a1.91,1.91,0,0,0,1.91,1.91h0a1.92,1.92,0,0,0,1.91-1.91V6.27L18.66,2.45"
	/>
	<path class="line" d="M21.13,4.93a1.87,1.87,0,0,0-.56,1.34,1.92,1.92,0,0,0,1.91,1.91" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
