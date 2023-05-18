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
	<circle class="line" cx="6.27" cy="15.84" r="1.91" />
	<circle class="line" cx="17.73" cy="15.84" r="1.91" />
	<line class="line" x1="15.82" y1="15.84" x2="8.18" y2="15.84" />
	<path
		class="line"
		d="M4.36,15.84H1.5V13a1.9,1.9,0,0,1,1.91-1.91h1L5.48,8.83A2.87,2.87,0,0,1,8,7.25h7.3A2.84,2.84,0,0,1,17.63,8.4l2,2.67h.95A1.9,1.9,0,0,1,22.5,13v2.86H19.64"
	/>
	<line class="line" x1="4.36" y1="11.07" x2="19.64" y2="11.07" />
	<line class="line" x1="11.05" y1="7.25" x2="11.05" y2="11.07" />
</svg>

<style>
	.line {
		fill: none;
		stroke: currentColor;
		stroke-miterlimit: 10;
	}
</style>
