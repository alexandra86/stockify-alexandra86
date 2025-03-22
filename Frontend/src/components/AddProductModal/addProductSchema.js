import { z } from "zod";

const addProductSchema = z.object({
  nameproduct: z.string().min(3, "Nome do produto é obrigatório!"),
  codbarras: z.string().min(3, "Infomorme o código do produto!"),
  description: z.string().min(10, "Mínimo 10 caracteres!"),
  qdestoque: z.string(),
  category: z.string().min(1, "Selecione uma opção!"),
  datavalidade: z.string().optional().nullable(),
  imgproduct: z.string().optional().nullable(),
});

export default addProductSchema;
