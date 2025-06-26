<script lang="ts">
  import { cn } from "$lib/utils";
  const { id, isFocus = false, children, cursor } = $props();
</script>

<div class={cn("border border-muted", id === cursor && "border-cyan-500")}>
  {@render children()}
</div>
