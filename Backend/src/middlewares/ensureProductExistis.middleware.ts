import { Request, Response, NextFunction } from "express";
import { IProductRepo } from "../interfaces/product.interface";
import { AppDataSource } from "../data-source";
import { Product } from "../entities";
import { AppError } from "../errors";

export const ensureProductExistsMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOne({
    where: {
      id: parseInt(request.params.productId),
    },
  });

  if (!findProduct) {
    throw new AppError("Produto não encontrado!", 404);
  }
  return next();
};
