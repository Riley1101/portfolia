<script lang="ts">
  import { setAppContext } from "$lib/states/context";
  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import StatusBar from "$lib/components/StatusBar.svelte";
  import { cn } from "$lib/utils";

  const { children, app } = $props();
  setAppContext(app);
  const activePanel = $derived(app.getCurrentPanel());
</script>

<svelte:window on:keydown|preventDefault={(e) => app.onKeyPress(e)} />

<div class="app_shell">
  <div class="app_status">
    <StatusBar />
  </div>
  <div class="app_body text-foreground">
    <Sidebar />
    <div
      id="body"
      class={cn(
        "p-4",
        activePanel === "main" && "bg-card text-card-foreground",
      )}
    >
      {@render children()}
    </div>
  </div>
  <div class="app_footer">
    <Footer />
  </div>
</div>
