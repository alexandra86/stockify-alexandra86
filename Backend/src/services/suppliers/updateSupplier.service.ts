import { AppDataSource } from "../../data-source";
import { Supplier } from "../../entities";
import { AppError } from "../../errors";
import {
  IReturnSupplier,
  ISupplierRepo,
  IUpdateSupplier,
} from "../../interfaces/supplier.interface";
import { returnSupplierSchema } from "../../schemas/supplier.schema";

export const updateSupplierService = async (
  newSupplierData: IUpdateSupplier,
  supplierId: string
): Promise<IReturnSupplier> => {
  if (Object.keys(newSupplierData).length === 0) {
    throw new AppError("Dados inválidos!", 400);
  }

  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const oldSupplierData = await supplierRepository.findOneBy({
    id: parseInt(supplierId),
  });

  const supplier = supplierRepository.create({
    ...oldSupplierData,
    ...newSupplierData,
  });

  await supplierRepository.save(supplier);

  return returnSupplierSchema.parse(supplier);
};
