<script lang="ts">
  import { setAppContext } from "$lib/states/context";
  import Footer from "$lib/components/Footer.svelte";
  import StatusBar from "$lib/components/StatusBar.svelte";

  const { children, app } = $props();
  setAppContext(app);
</script>

<svelte:window on:keydown|preventDefault={(e) => app.onKeyPress(e)} />

<div class="app_shell">
  <div class="app_status">
    <StatusBar />
  </div>
  <div class="app_body text-foreground">
    {@render children()}
  </div>
  <div class="app_footer">
    <Footer />
  </div>
</div>
