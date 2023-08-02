import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "releasedAt",
      title: "Release At",
      type: "date",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
        name: "language",
        title: "Language",
        type: "string",
        options: {
            list: [
                'TypeScript',
                'JavaScript',
                'Rust',
                'Python',
                'Svelte',
                'React',
                'AWS',
                'Docker',
                'Next.js',
                'Solid',
            ]
        },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
