<script lang="ts">
  export let active = false;
  export let onClick: (() => void) | undefined = undefined;

  $: primaryColor = active ? "theme-secondary" : "gray-200";
  $: secondaryColor = active ? "theme-secondaryLight" : "gray-200";
</script>

<svg
  id="Layer_1"
  data-name="Layer 1"
  viewBox="0 0 24 24"
  stroke-width="1"
  width="24"
  height="24"
  color="#000000"
  version="1.1"
  on:click={onClick}
  on:keydown={onClick}
>
  <defs id="defs4">
    <style id="style2">
      .baseSvg {
        stroke: transparent;
        stroke-miterlimit: 10;
      }
    </style>
  </defs>
  <path
    class="baseSvg fill-{secondaryColor}"
    d="M22.5,11.05H13V1.5A9.54,9.54,0,0,1,22.5,11.05Z"
    id="path6"
  />
  <path
    class="baseSvg fill-{primaryColor}"
    d="m 11.05,13.91 h 7.63 c 0,7.653405 -9.2526202,11.484857 -14.6637387,6.073739 C -1.3948572,14.57262 2.4365951,5.32 10.09,5.32 v 8.59 h 0.96"
    id="path8"
  />
</svg>
