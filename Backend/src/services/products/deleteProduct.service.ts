import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { IProductRepo } from "../../interfaces/product.interface";

export const deleteProductService = async (
  productId: string
): Promise<void> => {
  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const product = await productRepository.findOne({
    where: {
      id: parseInt(productId),
    },
  });

  await productRepository.remove(product!);
};
