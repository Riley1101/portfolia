<script lang="ts">
  import { preloadData, preloadCode } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";
  const { path, children } = $props();

  let root: HTMLElement;

  function preload() {
    preloadData(path);
    preloadCode(path);
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          preload();
          observer.disconnect();
        }
      }
    });

    observer.observe(root);
    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this={root}>
  {@render children()}
</div>

