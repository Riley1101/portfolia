import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
