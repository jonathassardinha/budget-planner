<script lang="ts">
  import { page } from "$app/stores";

  export let name: string;
  export let label: string;
  export let type: string = "text";

  $: error = $page.form?.errors[name];
</script>

<div>
  <label
    for={name}
    class="text-2xs font-medium uppercase tracking-widest text-gray-600"
  >
    {label}
  </label>
  <input
    id={name}
    {name}
    {type}
    class="mt-2 w-full border border-solid border-gray-300 bg-white py-3 px-3 text-sm text-gray-900 transition-border focus:border-gray-600 focus:outline-none
		{error && '!border-red-200 focus:!border-red-600'}"
  />
  {#if !!error}
    <span class="mt-2 inline-block text-xs text-red-500">{error}</span>
  {/if}
</div>
