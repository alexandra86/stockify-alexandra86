import cors from "cors";
import path from "path";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { productRouters } from "./routers/product.routers";
import { supplierRouters } from "./routers/supplier.routers";

const app: Application = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use("/uploads", express.static(path.join("uploads")));

app.use("/products", productRouters);
app.use("/supplier", supplierRouters);

app.use(handleErrors);

export default app;
