import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// El dominio lo define ella. Hasta entonces el canónico y el sitemap usan SITE
// o localhost, para no inventar una URL pública.
const site = process.env.SITE ?? "http://localhost:4321";

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  vite: {
    preview: {
      // Solo el túnel temporal de Cloudflare. No abre el preview a cualquier host.
      allowedHosts: [".trycloudflare.com"],
    },
  },
});
