import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/seo-silo");

export interface CaseStudyMetadata {
  title: string;
  description: string;
  date: string;
  location: string;
  neighborhood: string;
  issue: string;
  keywords: string[];
  slug: string;
}

export interface CaseStudy extends CaseStudyMetadata {
  content: string;
}

export function getAllCaseStudies(): CaseStudyMetadata[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const files = fs.readdirSync(contentDirectory);
  const caseStudies = files
    .filter((file) => file.endsWith(".md") && file !== "handoff.md" && file !== "README-SOP.md")
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      
      const keywords = typeof data.keywords === "string" 
        ? data.keywords.split(",").map((k: string) => k.trim())
        : data.keywords || [];

      return {
        ...(data as Omit<CaseStudyMetadata, "slug" | "keywords">),
        keywords,
        slug: file.replace(".md", ""),
      };
    });

  return caseStudies.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const keywords = typeof data.keywords === "string" 
    ? data.keywords.split(",").map((k: string) => k.trim())
    : data.keywords || [];

  return {
    ...(data as Omit<CaseStudyMetadata, "slug" | "keywords">),
    keywords,
    slug,
    content,
  };
}
