export interface Project{
    title : string;
    description : string;
    link : string;
    _id : string;
    image : string;
    technologies : string[];
}
export interface ProjectList {
    title : string;
    projects : Project[];
    _id : string;
    _type : "projects"
}
export interface Experience {
  title : string;
  role : string;
  startDate : string;
  endDate : string;
  summary : string[];
  _id : string;
}

export type TestimonialSections  = ProjectList | Testimonial;

export interface Testimonial {
  title : string;
  _id : string;
  _type : "testimonial";
  experiences : Experience[];
}

export interface TestimonialData {
  _id : string;
  title : string;
  sections : TestimonialSections[];
}

