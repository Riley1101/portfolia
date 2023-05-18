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
      title: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "string",
    }),
    defineField({
      name: "releasedAt",
      title: "Release At",
      type: "date",
    }),
    defineField({
      name: "slug",
      title: "slug",
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
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
