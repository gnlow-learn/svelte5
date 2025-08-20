import {
    Tserve,
    handleTsLike,
} from "https://deno.land/x/tserve@0.1.7/mod.ts"

import { compile } from "svelte/compiler"

new Tserve([
    handleTsLike(
        "svelte",
        async path => compile(
            await Deno.readTextFile(path),
            { dev: true },
        ).js.code.replaceAll("'svelte", "'https://esm.sh/svelte@5.38.2"),
    ),
]).serve()
