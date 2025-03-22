import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json({ limit: "50mb" }));

app.use("/products");
app.use("/supplier");

app.use(handleErrors);

export default app;
