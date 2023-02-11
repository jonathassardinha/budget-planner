<script>
  import { enhance } from "$app/forms";
  import { IconButton } from "../../lib/IconButton";
  import { ChevronLeftIcon } from "../../lib/icons";
  import { TextField } from "../../lib/TextField";
</script>

<div>
  <div>
    <IconButton>
      <ChevronLeftIcon />
    </IconButton>
  </div>

  <h1 class="mt-8 text-2xl">Add a bill</h1>

  <form
    method="post"
    use:enhance={() => {
      return async ({ update }) => {
        await update({ reset: false });
      };
    }}
  >
    <div class="mt-5 flex flex-col gap-2 bg-theme-paperBg px-4 py-8 shadow-lg">
      <TextField name="name" label="Name" />
      <TextField name="name" label="Name" />
      <TextField name="name" label="Name" />
      <TextField name="name" label="Name" />
    </div>
    <button
      class="mt-8 w-full bg-theme-secondary py-4 font-medium text-white"
      type="submit"
    >
      Add Bill
    </button>
  </form>
</div>
