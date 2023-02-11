<script lang="ts">
  export let active = false;
  export let onClick: (() => void) | undefined = undefined;

  $: primaryColor = active ? "theme-secondary" : "gray-200";
</script>

<svg
  id="Layer_1"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  stroke-width="1"
  width="24"
  height="24"
  color="#000000"
  on:click={onClick}
  on:keydown={onClick}
>
  <rect
    class="strokes stroke-{primaryColor}"
    x="1.48"
    y="3.37"
    width="21.04"
    height="4.78"
  />
  <rect
    class="strokes stroke-{primaryColor}"
    x="1.48"
    y="8.15"
    width="21.04"
    height="14.35"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="5.3"
    y1="12.93"
    x2="7.22"
    y2="12.93"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="9.13"
    y1="12.93"
    x2="11.04"
    y2="12.93"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="12.96"
    y1="12.93"
    x2="14.87"
    y2="12.93"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="16.78"
    y1="12.93"
    x2="18.7"
    y2="12.93"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="16.78"
    y1="17.72"
    x2="18.7"
    y2="17.72"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="5.3"
    y1="17.72"
    x2="7.22"
    y2="17.72"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="9.13"
    y1="17.72"
    x2="11.04"
    y2="17.72"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="12.96"
    y1="17.72"
    x2="14.87"
    y2="17.72"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="6.26"
    y1="0.5"
    x2="6.26"
    y2="5.28"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="12"
    y1="0.5"
    x2="12"
    y2="5.28"
  />
  <line
    class="strokes stroke-{primaryColor}"
    x1="17.74"
    y1="0.5"
    x2="17.74"
    y2="5.28"
  />
</svg>

<style>
  .strokes {
    stroke-width: 2px;
    fill: none;
  }
</style>
