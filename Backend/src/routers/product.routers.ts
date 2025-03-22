import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createProductSchema } from "../schemas/product.schema";
import { createProductController } from "../controllers/product.controllers";
import upload from "../multer/multerConfig";

export const productRouters: Router = Router();

productRouters.post(
  "",
  upload.single("imgproduct"),
  ensureDataIsValidMiddleware(createProductSchema),
  createProductController
);
