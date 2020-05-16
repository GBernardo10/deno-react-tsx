/// <reference path="https://deno.land/x/types/react/v16.13.1/react.d.ts" />;

import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import Home from "./components/home/index.tsx";

import { Application } from "https://deno.land/x/abc/mod.ts";
import { Context } from "https://deno.land/x/abc/context.ts";

const app = new Application();
const port = 3000;

app.use((next) => (c: Context) => {
  let e = next(c);
  if (React.isValidElement(e)) {
    e = ReactDOMServer.renderToString(e);
  }
  return e;
});

app
  .get("/", () => {
    return <Home></Home>;
  })
  .start({ port });

console.log(`server listening on http://localhost:${port}`);
