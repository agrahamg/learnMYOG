import type { CollectionEntry } from "astro:content";

export type IndexLinkProps = {
  image: any;
  width?: number;
  class?: string;
  alt?: string;
} & (
  | {
      href: string;
      title: string;
    }
  | {
      article: CollectionEntry<"article">["slug"];
    }
  | {
      pattern: CollectionEntry<"pattern">["slug"];
    }
);
