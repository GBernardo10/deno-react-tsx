import { App } from "https://deno.land/x/attain/mod.ts";

import { routes } from "./routes.ts";

const app = new App();

app.use(routes);

app.listen({ port: 3500 });
