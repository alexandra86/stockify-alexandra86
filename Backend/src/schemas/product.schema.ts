import { z } from "zod";
import { Category } from "../entities/product.entity";

export const createProductSchema = z.object({
  nameproduct: z.string(),
  codbarras: z.string(),
  description: z.string().min(10),
  qdestoque: z.string(),
  category: z.nativeEnum(Category),
  datavalidade: z.string().optional().nullable(),
  imgproduct: z.string().optional().nullable(),
});

export const returnProductSchema = createProductSchema.extend({
  id: z.number(),
});

export const returnAllProductSchema = returnProductSchema.partial().array();

export const updateProductSchema = createProductSchema.partial();
