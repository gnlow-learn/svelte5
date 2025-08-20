import { mount } from "https://esm.sh/svelte@5.38.2"

import App from "./src/App.svelte"

console.log("hi")

mount(App, { target: document.body })
