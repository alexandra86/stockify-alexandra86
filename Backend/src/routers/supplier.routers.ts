import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createSupplierSchema,
  updateSupplierSchema,
} from "../schemas/supplier.schema";
import {
  createSupplierController,
  deleteSupplierController,
  listSupplierController,
  retrieveSupplierController,
  updateSupplierController,
} from "../controllers/supplier.controllers";
import { ensureSupplierExistsMiddleware } from "../middlewares/ensureSupplierExistis.middleware";

export const supplierRouters: Router = Router();

supplierRouters.post(
  "",
  ensureDataIsValidMiddleware(createSupplierSchema),
  createSupplierController
);

supplierRouters.get("", listSupplierController);

supplierRouters.get(
  "/:supplierId",
  ensureSupplierExistsMiddleware,
  retrieveSupplierController
);

supplierRouters.put(
  "/:supplierId",
  ensureSupplierExistsMiddleware,
  ensureDataIsValidMiddleware(updateSupplierSchema),
  updateSupplierController
);

supplierRouters.delete(
  "/:supplierId",
  ensureSupplierExistsMiddleware,
  deleteSupplierController
);
