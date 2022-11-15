export default interface ExperienceInterface {
  year: number;
  works: WorkInterface[];
}

export interface WorkInterface {
  name: string;
  conpany: string;
  desc: string[];
}