export const blogAuthors = {
  storm: {
    slug: "storm",
    name: "Storm Hoogervorst",
    role: "Oprichter / Recruiter",
    bio: "Bouwde ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Zet AI in voor de processen eromheen, zodat er meer tijd is voor wat telt: in gesprek met mensen.",
    image: "/foto-storm.webp",
    linkedin: "https://www.linkedin.com/in/storm-hoogervorst-a35066290/",
  },
  max: {
    slug: "max",
    name: "Max Endrizzi",
    role: "Oprichter / Operations",
    bio: "Richtte Legal Talents tijdens zijn studie op, met een idee: recruitment in de juridische sector kan scherper. Minder schuiven met cv's, meer focus op matches die ook over drie jaar nog kloppen.",
    image: "/foto-max.webp",
    linkedin: "https://www.linkedin.com/in/max-endrizzi-135610305/",
  },
} as const;

export type BlogAuthorSlug = keyof typeof blogAuthors;
export type BlogAuthor = (typeof blogAuthors)[BlogAuthorSlug];

export const blogAuthorSlugs = Object.keys(blogAuthors) as [
  BlogAuthorSlug,
  ...BlogAuthorSlug[],
];

export function getBlogAuthor(slug: string): BlogAuthor {
  if (slug in blogAuthors) {
    return blogAuthors[slug as BlogAuthorSlug];
  }

  throw new Error(`Onbekende blog-auteur: ${slug}`);
}
