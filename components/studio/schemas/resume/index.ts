import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "experiences",
      title: "experiences",
      type: "array",
      of: [{ type: "experience" }],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    }),
  ],
});
