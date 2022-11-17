export default interface ExperienceInterface {
  year: number;
  works: WorkInterface[];
}

export interface WorkInterface {
  name: string;
  company: string;
  desc: string[];
}