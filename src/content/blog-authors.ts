export const blogAuthors = {
  storm: {
    slug: "storm",
    name: "Storm Hoogervorst",
    role: "Eigenaar",
    bio: "Bouwde eerst ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Bouwt slimme processen met AI zodat er meer tijd is voor wat telt: in gesprek met mensen.",
    image: "/storm-v2.jpg",
    linkedin: "https://www.linkedin.com/in/storm-hoogervorst-a35066290/",
  },
  max: {
    slug: "max",
    name: "Max Endrizzi",
    role: "Eigenaar",
    bio: "Richtte Legal Talents op met één overtuiging: recruitment in de juridische sector kan scherper. Minder schuiven met CV's, meer focus op matches die ook over drie jaar nog kloppen.",
    image: "/max-v2.png",
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
