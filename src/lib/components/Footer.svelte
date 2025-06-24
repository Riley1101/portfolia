<script>
  import { cn } from "$lib/utils";
  import { getAppContext } from "$lib/states/context";
  import { TAB } from "$lib/states/constants";
  import { ChevronRight } from "@lucide/svelte";

  const app = getAppContext();
  const activePanel = $derived(app.getCurrentPanel());
  const buffers = $derived(app.getCurrentBuffer().split(""));
</script>

<footer class="px-4 border-t w-full h-full flex items-center bg-card">
  <ul class="text-xs flex items-center text-card-foreground vertical-center">
    {#each TAB as nav}
      <li class="flex items-center gap-2 mr-4">
        <span
          class={cn(
            "block w-3 h-3 border rounded-full",
            activePanel === nav && "bg-primary",
          )}
        ></span>
        {nav}
      </li>
    {/each}
    <li class="flex items-center border-l px-2">
      <ChevronRight class="w-3 h-3" />
    </li>
    {#each buffers as buffer}
      <li class="flex items-center gap-2">
        {buffer}
      </li>
    {/each}
  </ul>
</footer>
