import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import {
  IAllReturnProducts,
  IProductRepo,
} from "../../interfaces/product.interface";
import { returnAllProductSchema } from "../../schemas/product.schema";

export const listProductService = async (): Promise<IAllReturnProducts> => {
  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const findProducts: Array<Product> = await productRepository.find();

  return returnAllProductSchema.parse(findProducts);
};
