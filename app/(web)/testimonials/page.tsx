export const revalidate = 60;
import client from "@/utils/client";
import { Experiences } from "@/components/pages/testimonials/Experiences";
import { ProjectList } from "@/components/pages/testimonials/ProjectList";
import { ExperienceHero } from "@/components/pages/testimonials/Hero";
import type { TestimonialData } from "@/types/page/testimonials";
const query = `* [_type == "testimonials"][0]`;

async function TestimonialPage() {
  const { sections }: TestimonialData = await client.fetch(query);
  return (
    <div className="page-container mb-24">
      <ExperienceHero />
      {sections.map((section) => {
        switch (section._type) {
          case "testimonial":
            return <Experiences key={section._id} data={section} />;
          case "projects":
            return <ProjectList key={section._id} data={section} />;
        }
      })}
    </div>
  );
}
export default TestimonialPage;
