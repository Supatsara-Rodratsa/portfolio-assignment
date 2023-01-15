export interface WorkExperience {
  company: string;
  location: string;
  position: WorkPosition;
  hideName: boolean;
  hideDash?: boolean;
  externalLink: string;
}

export interface WorkPosition {
  role: string;
  duration: string;
  description: Array<string>;
}

export interface Education {
  school: string;
  location: string;
  program: string;
  grade: string | null;
  module: Array<string>;
  isFirstClassHonour: boolean;
  duration: string;
  externalLink: string;
}

export interface TopicPath {
  name: string;
  path: string;
}

export interface Certificate {
  name: string;
  year: string;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}
