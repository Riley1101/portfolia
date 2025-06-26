<script lang="ts">
  import { cn } from "$lib/utils";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/state";
  import { getAppContext } from "$lib/states/context";
  import { NAV } from "$lib/states/constants";
  import Preload from "$lib/components/common/Preload.svelte";
  const app = getAppContext();
  const activePanel = $derived(app.getCurrentPanel());
</script>

<nav
  id="sidebar_desktop"
  class={cn(
    "border-r p-2 hidden lg:flex",
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

<nav
  id="sidebar_mobile"
  class={cn(
    "w-full border-r p-2 flex lg:hidden overflow-hidden fixed bottom-0 left-0 bg-card/60 backdrop-blur-lg",
    activePanel === "nav" && "lg:bg-card text-card-foreground",
  )}
>
  <ScrollArea
    class="relative w-full rounded-md border p-4"
    orientation="horizontal"
  >
    <ul class="w-full flex gap-2 overflow-x-scroll">
      {#each NAV as nav}
        <li class="w-full max-w-max">
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
  </ScrollArea>
</nav>
