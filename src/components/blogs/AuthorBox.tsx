import Image from "next/image";
import { SlashPill } from "@/components/home/primitives";
import type { BlogAuthor } from "@/content/blog-authors";

export function AuthorBox({ author }: { author: BlogAuthor }) {
  return (
    <section className="mt-16 rounded-[16px] bg-background-secondary p-6 md:p-8">
      <SlashPill>/ AUTEUR</SlashPill>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src={author.image}
          alt={`Portretfoto van ${author.name}`}
          width={96}
          height={96}
          className="size-20 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-display text-[20px] font-medium leading-[1.3]">
            {author.name}
          </p>
          <p className="mt-1 text-sm leading-[1.5] text-foreground-muted">
            {author.role}
          </p>
          <p className="mt-4 max-w-[42rem] text-[16px] leading-[1.6] text-foreground-secondary">
            {author.bio}
          </p>
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex text-[15px] font-medium leading-none text-foreground transition-colors hover:text-foreground-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
