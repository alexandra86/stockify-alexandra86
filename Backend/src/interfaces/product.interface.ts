import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Product } from "../entities";
import {
  createProductSchema,
  returnAllProductSchema,
  returnProductSchema,
} from "../schemas/product.schema";

export type IProductRepo = Repository<Product>;
export type ICreateProduct = z.infer<typeof createProductSchema>;
export type IReturnProduct = z.infer<typeof returnProductSchema>;
export type IAllReturnProductes = DeepPartial<
  z.infer<typeof returnAllProductSchema>
>;
export type IUpdateProduct = DeepPartial<ICreateProduct>;
