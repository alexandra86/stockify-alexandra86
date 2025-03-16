import { z } from "zod";

const addProductSchema = z.object({
  nameproduct: z.string().min(3, "Nome do produto é obrigatório!"),
  codbarras: z.number(),
  description: z.string().min(10, "Descrição é obrigatória!"),
  qdestoque: z.number(),
  category: z.string().min(1, "Selecione uma opção!"),
  datavalidade: z.string().optional().nullable(),
  imgproduct: z.string().optional().nullable(),
});

export default addProductSchema;
