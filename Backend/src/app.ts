import "express-async-errors";
import path from "path";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { productRouters } from "./routers/product.routers";

const app: Application = express();
app.use(express.json({ limit: "50mb" }));

app.use("/uploads", express.static(path.join("uploads")));

app.use("/products", productRouters);
// app.use("/supplier");

app.use(handleErrors);

export default app;
