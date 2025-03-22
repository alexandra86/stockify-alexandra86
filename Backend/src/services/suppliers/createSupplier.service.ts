import { AppDataSource } from "../../data-source";
import { Supplier } from "../../entities";
import {
  ICreateSupplier,
  IReturnSupplier,
  ISupplierRepo,
} from "../../interfaces/supplier.interface";
import { returnSupplierSchema } from "../../schemas/supplier.schema";

export const createSupplierService = async (
  supplierData: ICreateSupplier
): Promise<IReturnSupplier> => {
  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const supplier: Supplier = supplierRepository.create({
    ...supplierData,
  });

  await supplierRepository.save(supplier);

  return returnSupplierSchema.parse(supplier);
};
