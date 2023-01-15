import { Certificate, Education, WorkExperience } from "~~/library/interfaces";
import { CERTIFICATES, EDUCATIONS, WORKS } from "~~/library/mock";

// persistence in DB
let items: Map<String, WorkExperience[] | Education[] | Certificate[]> =
  new Map();

// JS Node
export default defineEventHandler((event) => {
  const key = event.context.params.key;

  if (key === "work" && !items.get("work")) {
    items.set("work", WORKS);
  } else if (key === "education" && !items.get("education")) {
    items.set("education", EDUCATIONS);
  } else if (key === "certificate" && !items.get("certificate")) {
    items.set("certificate", CERTIFICATES);
  }

  return items.get(key);
});
