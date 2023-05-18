export interface Project {
  title: string;
  description: string;
  _id: string;
  slug: string;
  mainImage: string;
  technologies: string[];
  releasedAt: string;
  body: any[];
}
export interface ProjectList {
  title: string;
  projects: Project[];
  _id: string;
  _type: "projects";
}
export interface Experience {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string[];
  _id: string;
}

export interface TestimonialData {
  _id: string;
  title: string;
  experiences: Experience[];
  projects: Project[];
}
