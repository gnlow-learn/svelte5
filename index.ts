import { mount } from "https://esm.sh/svelte@5.25.6"

import App from "./src/App.svelte"

console.log("hi")

mount(App, { target: document.body })
