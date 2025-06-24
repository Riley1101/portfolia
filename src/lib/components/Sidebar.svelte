<script lang="ts">
  import { cn } from "$lib/utils";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/state";
  import { getAppContext } from "$lib/states/context";
  import { NAV } from "$lib/states/constants";
  import Preload from "$lib/components/common/Preload.svelte";
  const app = getAppContext();
  const activePanel = $derived(app.getCurrentPanel());
</script>

<nav
  id="sidebar"
  class={cn(
    "border-r p-2",
    activePanel === "nav" && "bg-card text-card-foreground",
  )}
>
  <ul class="w-full flex gap-2 flex-col">
    {#each NAV as nav}
      <li class="w-full">
        <Preload path={nav.path}>
          <Button
            href={nav.path}
            variant={page.route.id === nav.path ? "outline" : "ghost"}
            class="w-full justify-start"
          >
            [{nav.id}] {nav.name}
          </Button>
        </Preload>
      </li>
    {/each}
  </ul>
</nav>
