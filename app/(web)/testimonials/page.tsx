export const revalidate = 60;
import client from "@/utils/client";
import { Experiences } from "@/components/pages/testimonials/Experiences";
import { ProjectList } from "@/components/pages/testimonials/ProjectList";
import { ExperienceHero } from "@/components/pages/testimonials/Hero";
import type { TestimonialData } from "@/types/page/testimonials";

const query = `
*[_type == "testimonials"][0]{
  ...,
 'projects': projects[]->{
   "title":title,
   "slug":slug.current,
   description,
   technologies,
 }
}
`;

async function TestimonialPage() {
  const { experiences, projects }: TestimonialData = await client.fetch(query);
  return (
    <div className="page-container mb-24">
      <ExperienceHero />
      <Experiences data={experiences} />
      <ProjectList data={projects} />
    </div>
  );
}
export default TestimonialPage;
