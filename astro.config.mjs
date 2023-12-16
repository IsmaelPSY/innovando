import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server" // activate server-side rendering
  ,
  adapter: netlify()
});