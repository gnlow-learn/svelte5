import { Hono } from "https://esm.sh/hono@4.9.2"
import { createMiddleware } from "https://esm.sh/hono@4.9.2/factory"
import { serveStatic } from "https://esm.sh/hono@4.9.2/deno"
import { compile } from "svelte/compiler"

const svelte = createMiddleware(async (c, next) => {
    await next()

    const compiled = compile(
        await c.res.clone().text(),
        { dev: true },
    ).js.code.replaceAll("'svelte", "'https://esm.sh/svelte@5.38.2")

    c.res = new Response(compiled)
    c.header("content-type", "application/javascript; charset=utf-8")
})

const app = new Hono()

app.use("/**/*.svelte", svelte)
app.use("/**/*", serveStatic({ root: "./" }))

Deno.serve(app.fetch)
