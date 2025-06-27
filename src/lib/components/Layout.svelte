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

<div class="app_shell w-full relative">
  <div class="app_status hidden lg:flex">
    <StatusBar />
  </div>
  <div class="w-full app_body text-foreground">
    <Sidebar />
    <main
      id="body"
      onmouseenter={() => {
        app.setPanel("main");
      }}
      class={cn(
        "p-2 lg:p-4 overflow-hidden w-full h-full",
        activePanel === "main" && "bg-card/30 text-card-foreground",
      )}
    >
      {@render children()}
    </main>
  </div>
  <div class="app_footer">
    <Footer />
  </div>
</div>
