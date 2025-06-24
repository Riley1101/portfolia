<script>
  import { Terminal } from "@lucide/svelte";
  import { page } from "$app/state";
</script>

<nav class="px-4 border-b w-full h-full flex items-center text-foreground">
  <a href="/" aria-label="Home Page">
    <h1 class="flex items-center text-sm gap-2">
      <Terminal class="text-green-500 w-4 h-4" />
      <span class="text-xs text-foreground"
        >arkar@portfolia:~{page.route.id}</span
      >
    </h1>
  </a>
  <date class="text-xs ml-auto">2025-06-24 </date>
</nav>
