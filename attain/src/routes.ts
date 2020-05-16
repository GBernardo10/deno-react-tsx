import { Router } from "https://deno.land/x/attain/mod.ts";

export const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).send({ status: "Good" });
});
