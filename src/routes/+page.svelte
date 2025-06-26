<script lang="ts">
  import FocusBox from "$lib/components/FocusBox.svelte";
  import { getAppContext } from "$lib/states/context";
  const articles = [
    {
      id: 1,
      title: "Composition in React",
      _createdAt: "2025-06-26",
    },
    {
      id: 2,
      title: "Higher-Order Components in React",
      _createdAt: "2025-06-27",
    },
    {
      id: 3,
      title: "React Context API",
      _createdAt: "2025-06-28",
    },
    {
      id: 4,
      title: "Redux in React",
      _createdAt: "2025-06-29",
    },
  ];

  const app = getAppContext();
  app.setMaxCursor(1);
  const currentCursor = $derived(app.getCursor());
  $inspect(currentCursor);
</script>

<div class="container font-mono space-y-4">
  <FocusBox id={0} cursor={currentCursor}>
    <div class="p-4">
      <div class="mt-4 flex flex-col gap-4">
        <span class="text-primary text-left align-bottom text-xl">
          ╔════ HELLO ════╗
        </span>
        <h1 class="font-semibold text-2xl text-yellow-500">I'm Arkar Myat</h1>
        <p class="text-green-500 leading-loose">
          An inspiring software engineer <a
            href="https://artian.ai"
            class="text-[#ff0046]"
          >
            @Artian
          </a> <br />
          Coding with a strong passion for design and computer science, <br /> I
          enjoy creating amazing things and building blazingly-fast websites.
        </p>
      </div>
    </div>
  </FocusBox>

  <FocusBox id={1} cursor={currentCursor}>
    <fieldset class="p-4 border">
      <legend class="px-4"> Latest Articles : </legend>
      <h2 class="invisible text-muted-foreground mb-2">Latest Articles:</h2>
      <ul class="list-inside list-disc text-sm leading-loose">
        {#each articles as article}
          <li>
            <a href="/articles/{article.id}">
              {article.title}
            </a>
          </li>
        {/each}
      </ul>
    </fieldset>
  </FocusBox>
</div>
