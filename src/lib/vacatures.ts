import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  getRechtsgebiedBySlug,
  rechtsgebieden,
  type Rechtsgebied,
} from "@/content/rechtsgebieden";

const vacaturesDirectory = path.join(process.cwd(), "content", "vacatures");

type VacatureStatus = "draft" | "open" | "vervuld" | string;

interface VacatureFrontmatter {
  title: string;
  slug: string;
  status: VacatureStatus;
  publishedAt: string;
  validThrough?: string;
  niveau: string;
  plaatsing: string;
  werkuren: string;
  salarisIndicatie?: string;
  plaats: string;
  werkvorm: string;
  opdrachtgeverNaam: string;
  opdrachtgeverVertrouwelijk?: boolean;
  rechtsgebieden?: string[];
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface VacatureListItem
  extends Omit<VacatureFrontmatter, "rechtsgebieden"> {
  _id: string;
  rechtsgebieden?: Rechtsgebied[];
}

export interface Vacature extends VacatureListItem {
  body: string;
  adres?: {
    straat?: string;
    postcode?: string;
    land?: string;
  };
}

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeBoolean(value: unknown): boolean {
  return typeof value === "boolean" ? value : false;
}

function normalizeStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function mapRechtsgebieden(slugs: string[]): Rechtsgebied[] {
  return slugs
    .map((slug) => getRechtsgebiedBySlug(slug))
    .filter((item): item is Rechtsgebied => Boolean(item));
}

function parseVacature(fileContents: string, fallbackSlug: string): Vacature {
  const { data, content } = matter(fileContents);
  const slug = normalizeString(data.slug) || fallbackSlug;
  const frontmatter: VacatureFrontmatter = {
    title: normalizeString(data.title),
    slug,
    status: normalizeString(data.status) || "draft",
    publishedAt: normalizeString(data.publishedAt),
    validThrough: normalizeString(data.validThrough),
    niveau: normalizeString(data.niveau),
    plaatsing: normalizeString(data.plaatsing),
    werkuren: normalizeString(data.werkuren),
    salarisIndicatie: normalizeString(data.salarisIndicatie),
    plaats: normalizeString(data.plaats),
    werkvorm: normalizeString(data.werkvorm),
    opdrachtgeverNaam: normalizeString(data.opdrachtgeverNaam),
    opdrachtgeverVertrouwelijk: normalizeBoolean(data.opdrachtgeverVertrouwelijk),
    rechtsgebieden: normalizeStringArray(data.rechtsgebieden),
    excerpt: normalizeString(data.excerpt),
    metaTitle: normalizeString(data.metaTitle),
    metaDescription: normalizeString(data.metaDescription),
  };

  return {
    ...frontmatter,
    _id: slug,
    rechtsgebieden: mapRechtsgebieden(frontmatter.rechtsgebieden ?? []),
    body: content,
  };
}

function toListItem(vacature: Vacature): VacatureListItem {
  return {
    _id: vacature._id,
    title: vacature.title,
    slug: vacature.slug,
    status: vacature.status,
    publishedAt: vacature.publishedAt,
    validThrough: vacature.validThrough,
    niveau: vacature.niveau,
    plaatsing: vacature.plaatsing,
    werkuren: vacature.werkuren,
    salarisIndicatie: vacature.salarisIndicatie,
    plaats: vacature.plaats,
    werkvorm: vacature.werkvorm,
    opdrachtgeverNaam: vacature.opdrachtgeverNaam,
    opdrachtgeverVertrouwelijk: vacature.opdrachtgeverVertrouwelijk,
    rechtsgebieden: vacature.rechtsgebieden,
    excerpt: vacature.excerpt,
    metaTitle: vacature.metaTitle,
    metaDescription: vacature.metaDescription,
  };
}

async function readVacatureFiles(): Promise<Vacature[]> {
  const fileNames = await readdir(vacaturesDirectory);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  const vacatures = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(vacaturesDirectory, fileName);
      const fileContents = await readFile(filePath, "utf8");

      return parseVacature(fileContents, slug);
    }),
  );

  return vacatures;
}

export async function getAllVacatures(): Promise<VacatureListItem[]> {
  const vacatures = await readVacatureFiles();

  return vacatures
    .filter((vacature) => vacature.status === "open")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(toListItem);
}

export async function getVacatureBySlug(slug: string): Promise<Vacature | null> {
  try {
    const filePath = path.join(vacaturesDirectory, `${slug}.mdx`);
    const fileContents = await readFile(filePath, "utf8");

    return parseVacature(fileContents, slug);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function getAllVacatureSlugs(): Promise<string[]> {
  const vacatures = await getAllVacatures();

  return vacatures.map((vacature) => vacature.slug);
}

export async function getAllRechtsgebieden(): Promise<Rechtsgebied[]> {
  return [...rechtsgebieden].sort((a, b) => a.order - b.order);
}
