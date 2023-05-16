import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
          { type: "testimonial" },
          { type: "projects" }
      ],
    }),
  ],
});
