<script>
  import { cn } from "$lib/utils";
  import { getAppContext } from "$lib/states/context";
  const app = getAppContext();
  const activePanel = $derived(app.getCurrentPanel());
  const navs = ["nav", "main"];
</script>

<footer class="px-4 border-t w-full h-full flex items-center bg-card">
  <ul class="text-xs flex items-center gap-4 text-card-foreground">
    {#each navs as nav}
      <li class="flex items-center gap-2">
        <span
          class={cn(
            "block w-3 h-3 border rounded-full",
            activePanel === nav && "bg-primary",
          )}
        ></span>
        {nav}
      </li>
    {/each}
  </ul>
</footer>
