import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Supplier } from "../entities";
import {
  createSupplierSchema,
  returnAllSupplierSchema,
  returnSupplierSchema,
} from "../schemas/supplier.schema";

export type ISupplierRepo = Repository<Supplier>;
export type ICreateSupplier = z.infer<typeof createSupplierSchema>;
export type IReturnSupplier = z.infer<typeof returnSupplierSchema>;
export type IAllReturnSupplieres = DeepPartial<
  z.infer<typeof returnAllSupplierSchema>
>;
export type IUpdateSupplier = DeepPartial<ICreateSupplier>;
