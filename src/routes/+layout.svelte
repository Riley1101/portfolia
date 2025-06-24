<script lang="ts">
  import "../app.css";
  import Layout from "$lib/components/Layout.svelte";
  const { children } = $props();
  import { App } from "$lib/states/app.svelte";
  const app = new App();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="dark w-full h-dvh overflow-hidden bg-background font-mono">
  <Layout {app}>
    {@render children()}
  </Layout>
</main>

<style>
  :global(body) {
    --font-mono: "JetBrains Mono", monospace;
  }
</style>
