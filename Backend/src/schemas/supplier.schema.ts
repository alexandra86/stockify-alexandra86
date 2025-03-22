import { z } from "zod";

export const createSupplierSchema = z.object({
  nameempresa: z.string().min(3),
  cnpj: z.string().max(14),
  address: z.string(),
  telephone: z.string(),
  email: z.string().email().max(256),
  contactprincipal: z.string(),
});

export const returnSupplierSchema = createSupplierSchema.extend({
  id: z.number(),
});

export const returnAllSupplierSchema = returnSupplierSchema.partial().array();

export const updateSupplierSchema = createSupplierSchema.partial();
