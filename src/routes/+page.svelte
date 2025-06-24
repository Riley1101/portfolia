<script lang="ts">
  import { cn } from "$lib/utils";
  import { getAppContext } from "$lib/states/context";
  const app = getAppContext();
  const activePanel = $derived(app.getCurrentPanel());
</script>

<nav id="sidebar" class={cn("border-r", activePanel === "nav" && "bg-card text-card-foreground")}>
  sidebar
</nav>

<div id="body" class={cn(activePanel === "main" && "bg-card text-card-foreground")}>body</div>
