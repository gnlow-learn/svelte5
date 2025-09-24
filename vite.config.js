import { defineConfig } from "npm:vite@7.1.5"
import { svelte } from "npm:@sveltejs/vite-plugin-svelte@6.1.4"
import { adorableCSS } from "npm:adorable-css@1.6.2/vite"

export default defineConfig({
    plugins: [
        adorableCSS(),
        svelte(),
    ],
})
