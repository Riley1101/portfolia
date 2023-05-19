import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [{ type: "experience" }],
    }),
  ],
});
