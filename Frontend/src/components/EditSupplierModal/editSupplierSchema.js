import { z } from "zod";
import isValidCNPJ from ".././AddSupplierModal/validation";

const editSupplierSchema = z.object({
  nameempresa: z.string().min(3, "Nome da empresa é obrigatório!"),
  cnpj: z
    .string()
    .max(14)
    .refine((value) => {
      const cleanedValue = value.trim().replace(/\D/g, "");
      if (typeof cleanedValue === "string") {
        return cleanedValue.length === 14 ? isValidCNPJ(cleanedValue) : false;
      }
      return false;
    }, "CNPJ inválido!"),

  address: z.string().min(3, "Endereço é obrigatório!"),
  telephone: z.string().min(1, "Informe o telefone!"),
  email: z
    .string()
    .min(1, "Email é obrigatório!")
    .email("Digite um e-mail válido.")
    .max(256),
  contactprincipal: z.string().min(3, "Informe o contato principal!"),
});

export default editSupplierSchema;
