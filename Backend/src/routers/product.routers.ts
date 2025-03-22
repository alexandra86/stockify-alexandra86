import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema";
import {
  createProductController,
  deleteProductController,
  listProductController,
  retrieveProductController,
  updateProductController,
} from "../controllers/product.controllers";
import upload from "../multer/multerConfig";
import { ensureProductExistsMiddleware } from "../middlewares/ensureProductExistis.middleware";

export const productRouters: Router = Router();

productRouters.post(
  "",
  upload.single("imgproduct"),
  ensureDataIsValidMiddleware(createProductSchema),
  createProductController
);

productRouters.get("", listProductController);

productRouters.get(
  "/:productId",
  ensureProductExistsMiddleware,
  retrieveProductController
);

productRouters.put(
  "/:productId",
  ensureProductExistsMiddleware,
  ensureDataIsValidMiddleware(updateProductSchema),
  updateProductController
);

productRouters.delete(
  "/:productId",
  ensureProductExistsMiddleware,
  deleteProductController
);
