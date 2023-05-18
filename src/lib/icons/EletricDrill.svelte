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
		d="M17.7,11.05H12l-1-1V2.45l1-1H17.7a4.78,4.78,0,0,1,4.78,4.77h0A4.78,4.78,0,0,1,17.7,11.05Z"
	/>
	<path
		class="line"
		d="M10.07,2.45h1a0,0,0,0,1,0,0v7.64a0,0,0,0,1,0,0h-1A3.82,3.82,0,0,1,6.25,6.27v0a3.82,3.82,0,0,1,3.82-3.82Z"
	/>
	<line class="line" x1="0.52" y1="6.27" x2="6.25" y2="6.27" />
	<polygon class="line" points="13.89 11.04 18.66 11.04 20.57 18.68 15.79 18.68 13.89 11.04" />
	<path
		class="line"
		d="M14.84,18.68h5.73a1.91,1.91,0,0,1,1.91,1.91V22.5a0,0,0,0,1,0,0H12.93a0,0,0,0,1,0,0V20.59A1.91,1.91,0,0,1,14.84,18.68Z"
	/>
	<line class="line" x1="14.84" y1="2.45" x2="14.84" y2="7.23" />
	<line class="line" x1="18.66" y1="2.45" x2="18.66" y2="7.23" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
