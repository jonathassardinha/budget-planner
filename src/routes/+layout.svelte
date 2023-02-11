<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { HomeIcon, PieChartIcon } from "../lib/icons";
  import "../app.css";
</script>

<div
  class="max-w-sceen flex h-screen max-h-screen w-screen flex-col justify-between overflow-hidden bg-theme-bg"
>
  <div class="overflow-auto p-10"><slot /></div>
  <div class="flex justify-between bg-theme-paperBg p-6 px-20">
    <HomeIcon active={$page.route.id === "/"} onClick={() => goto("/")} />
    <PieChartIcon
      active={$page.route.id === "/bills"}
      onClick={() => goto("/bills")}
    />
  </div>
</div>
