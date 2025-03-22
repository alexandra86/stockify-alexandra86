import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import {
  IProductRepo,
  IReturnProduct,
} from "../../interfaces/product.interface";
import { returnProductSchema } from "../../schemas/product.schema";

export const retrieveProductService = async (
  productId: string
): Promise<IReturnProduct> => {
  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOne({
    where: {
      id: parseInt(productId),
    },
  });

  return returnProductSchema.parse(findProduct!);
};
