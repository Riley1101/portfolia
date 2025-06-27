<script lang="ts">
  import { getAppContext } from "$lib/states/context";
  import { cn } from "$lib/utils";
  const app = getAppContext();

  const { id, children, cursor, classname = "", href = "" } = $props();

  $effect(() => {
    if (id === cursor) {
      app.setHref(href);
    }
  });
</script>

<div
  class={cn(
    "contents",
    id === cursor && "[&>:first-child]:ring-1 [&>:first-child]:ring-cyan-600",
    classname,
  )}
>
  {@render children({ id: 12 })}
</div>
