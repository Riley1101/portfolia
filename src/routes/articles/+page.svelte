<script lang="ts">
  import FocusBox from "$lib/components/FocusBox.svelte";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { getAppContext } from "$lib/states/context";

  const app = getAppContext();
  app.setMaxCursor(2);
  const currentCursor = $derived(app.getCursor());
</script>

<span class="block text-left align-bottom text-base text-cyan-600">
  ╔════ ARTICLES ════╗
</span>

<hr class="h-2 mt-2 mb-4" />
<div class="w-full h-full">
  {#each Array.from({ length: 3 }, (_, i) => i) as item}
    <FocusBox id={item} cursor={currentCursor} href={item}>
      <a
        class="border border-double p-4 block hover:ring hover:ring-cyan-600 mb-4"
        href="/articles/"
      >
        <div class="flex flex-col">
          <div class="flex items-center mb-2">
            <h3 class="text-primary text-base">
              [{item}] My 5 year old setup, I can't live without.
            </h3>
            <date class="text-sm ml-auto text-muted-foreground">
              2025-06-26
            </date>
          </div>
          <p class="leading-loose text-foreground text-sm">
            Coding with a strong passion for design and computer science, <br />
            I enjoy creating amazing things and building blazingly-fast websites.
          </p>
        </div>
        <div class="flex items-center gap-4 mt-2">
          <Badge variant="secondary" class="bg-cyan-500/10 text-cyan-500"
            >Badge</Badge
          >
        </div>
      </a>
    </FocusBox>
  {/each}
</div>
