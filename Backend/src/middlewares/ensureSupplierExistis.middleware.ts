import { Request, Response, NextFunction } from "express";
import { ISupplierRepo } from "../interfaces/supplier.interface";
import { AppDataSource } from "../data-source";
import { Supplier } from "../entities";
import { AppError } from "../errors";

export const ensureSupplierExistsMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const findSupplier = await supplierRepository.findOne({
    where: {
      id: parseInt(request.params.supplierId),
    },
  });

  if (!findSupplier) {
    throw new AppError("Fornecedor não encontrado!", 404);
  }
  return next();
};
