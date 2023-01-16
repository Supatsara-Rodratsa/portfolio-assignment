import { Education, WorkExperience, Certificate } from "../library/interfaces";

export const WORKS: WorkExperience[] = [
  {
    company: "HARBOUR.SPACE",
    location: "Barcelona, Spain",
    position: {
      role: "Internship",
      duration: "Jan 2023 - Present",
      description: ["Implementing Website by using React and Framer"],
    },
    hideName: false,
    hideDash: false,
    externalLink: "https://harbour.space/",
  },
  {
    company: "IBM THAILAND",
    location: "Bangkok, Thailand",
    position: {
      role: "Application Consultant",
      duration: "Oct 2021 - Present",
      description: [
        "Creating and implementing new software programs and applications based on business requirements in order to meet specific business goals and customer needs",
        "Working on a banking industry project such as Juristic Onboarding by understanding the as-is process of customer onboarding and any product subscription flows",
        "Experiences in using different tools for tracking process of works",
        "Experiences in proactively finding, preventing, and solving issues across the platform",
      ],
    },
    hideName: false,
    hideDash: true,
    externalLink: "https://www.ibm.com/th-en",
  },
  {
    company: "IBM THAILAND",
    location: "Bangkok, Thailand",
    position: {
      role: "Associate Full-Stack Developer",
      duration: "Oct 2020 - Oct 2021",
      description: [
        "Completed induction program with my fellow Batch #13",
        "Collaborating with the professional team to deliver the services based on business requirements",
        "Experience in the Front-End part by using the Angular framework to implement the product",
      ],
    },
    hideName: true,
    hideDash: true,
    externalLink: "https://www.ibm.com/th-en",
  },
];

export const EDUCATIONS: Education[] = [
  {
    school: "HARBOUR.SPACE",
    location: "Barcelona, Spain",
    program: "Master of Frontend Development",
    grade: null,
    isFirstClassHonour: false,
    duration: "Sep 2022 - Present",
    module: [
      "Programing Interactivity",
      "Foundations of Programming: JAVA",
      "Introduction to Vue.js",
      "Web Tooling and Modern Setup",
      "Design System",
      "The Vue Ecosystem",
      "React Web",
    ],
    externalLink: "https://harbour.space/",
  },
  {
    school: "MAHIDOL UNIVERSITY",
    location: "Bangkok, Thailand",
    program: "Bachelor of Science in Information and Communication Technology",
    grade: "3.73 / 4.00",
    isFirstClassHonour: true,
    duration: "Feb 2016 - May 2019",
    module: [
      "Web Programming including HTML, CSS and JavaScript",
      "Computer Programming including C, Java and Python",
      "Data Structure and Algorithm Analysis",
      "Database Management (MySQL administration)",
      "Artificial Intelligence",
    ],
    externalLink: "https://www.ict.mahidol.ac.th/",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "AWS Certified Cloud Practitioner (Scores: 882 / 1,000 )",
    year: "2021",
  },
  {
    name: "Database Administration Fundamentals (MTA)",
    year: "2019",
  },
  {
    name: "Summer Student-Training Certification Program at National Central University, Taiwan",
    year: "2019",
  },
];
