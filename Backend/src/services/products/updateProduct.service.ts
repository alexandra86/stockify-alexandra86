import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { AppError } from "../../errors";
import {
  IProductRepo,
  IReturnProduct,
  IUpdateProduct,
} from "../../interfaces/product.interface";
import { returnProductSchema } from "../../schemas/product.schema";

export const updateProductService = async (
  newProductData: IUpdateProduct,
  productId: string
): Promise<IReturnProduct> => {
  if (Object.keys(newProductData).length === 0) {
    throw new AppError("Dados inválidos!", 400);
  }

  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const oldProductData = await productRepository.findOneBy({
    id: parseInt(productId),
  });

  const product = productRepository.create({
    ...oldProductData,
    ...newProductData,
  });

  await productRepository.save(product);

  return returnProductSchema.parse(product);
};
