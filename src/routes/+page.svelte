<script lang="ts">
  import FocusBox from "$lib/components/FocusBox.svelte";
  import { getAppContext } from "$lib/states/context";
  import { LinkIcon } from "@lucide/svelte";
  import { cn } from "$lib/utils";
  const articles = [
    {
      id: 1,
      title: "Composition in React",
      href: "/articles/1",
      _createdAt: "2025-06-26",
    },
    {
      id: 2,
      title: "Higher-Order Components in React",
      href: "/articles/2",
      _createdAt: "2025-06-27",
    },
    {
      id: 3,
      title: "React Context API",
      href: "/articles/3",
      _createdAt: "2025-06-28",
    },
    {
      id: 4,
      title: "Redux in React",
      href: "/articles/3",
      _createdAt: "2025-06-29",
    },
  ];

  const projects = [
    {
      id: 5,
      title: "Composition in React",
      href: "/articles/1",
      _createdAt: "2025-06-26",
    },
    {
      id: 6,
      title: "Higher-Order Components in React",
      href: "/articles/2",
      _createdAt: "2025-06-27",
    },
    {
      id: 7,
      title: "React Context API",
      href: "/articles/3",
      _createdAt: "2025-06-28",
    },
    {
      id: 8,
      title: "Redux in React",
      href: "/articles/3",
      _createdAt: "2025-06-29",
    },
  ];

  const app = getAppContext();
  app.setMaxCursor(8);
  const currentCursor = $derived(app.getCursor());
</script>

<span class="block text-left align-bottom text-base text-cyan-600">
  ╔════ HELLO! ════╗
</span>
<hr class="h-2 mt-2 mb-4">

<div class="font-mono">
  <FocusBox id={0} cursor={currentCursor}>
    <div class="border border-double p-4">
      <div class="flex flex-col gap-4">
        <h1 class="content font-semibold text-2xl text-primary">
          I'm Arkar Myat
        </h1>
        <p class="leading-loose text-muted-foreground">
          An inspiring software engineer <a
            href="https://artian.ai"
            class="text-[#ff0046]"
            target="_blank"
          >
            @Artian
          </a> <br />
          Coding with a strong passion for design and computer science, <br /> I
          enjoy creating amazing things and building blazingly-fast websites.
        </p>
      </div>
    </div>
  </FocusBox>

  <fieldset
    class={cn(
      "block p-4 border-2 border-double mt-4",
      currentCursor > 0 && currentCursor < projects.length && "border-cyan-600",
    )}
  >
    <legend class="px-4"> Latest Articles : </legend>
    <h2 class="hidden text-muted-foreground">Latest Articles:</h2>
    <p class="text-base mb-2 text-muted-foreground">
      Some of my latest articles
    </p>
    <ul
      class="list-inside list-disc text-sm leading-loose text-muted-foreground"
    >
      {#each articles as article}
        <li>
          <FocusBox
            id={article.id}
            cursor={currentCursor}
            href={String(article.href)}
          >
            <a href={article.href} class="hover:ring-1 ring-cyan-600">
              {article.title}
              <LinkIcon class="inline w-3 h-3 lg:hidden" />
            </a>
          </FocusBox>
        </li>
      {/each}
    </ul>
  </fieldset>

  <fieldset
    class={cn(
      "block p-4 border-2 border-double mt-4",
      currentCursor > articles.length && "border-cyan-600",
    )}
  >
    <legend class="px-4"> Projects : </legend>
    <h2 class="hidden text-muted-foreground">Latest Projects:</h2>
    <p class="text-base mb-2 text-muted-foreground">
      Some of my latest projects
    </p>
    <ul
      class="list-inside list-disc text-sm leading-loose text-muted-foreground"
    >
      {#each projects as project}
        <li>
          <FocusBox
            id={project.id}
            cursor={currentCursor}
            href={String(project.href)}
          >
            <a href={project.href} class="hover:ring-1 ring-cyan-600">
              {project.title}
              <LinkIcon class="inline w-3 h-3 lg:hidden" />
            </a>
          </FocusBox>
        </li>
      {/each}
    </ul>
  </fieldset>
</div>
