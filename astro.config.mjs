import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://learnmyog.com/',
  integrations: [mdx(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), svelte(), tailwind()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank",
      rel: "noreferrer"
    }]]
  }
});