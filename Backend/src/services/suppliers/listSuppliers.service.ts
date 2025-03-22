import { AppDataSource } from "../../data-source";
import { Supplier } from "../../entities";
import {
  IAllReturnSupplieres,
  ISupplierRepo,
} from "../../interfaces/supplier.interface";
import { returnAllSupplierSchema } from "../../schemas/supplier.schema";

export const listSupplierService = async (): Promise<IAllReturnSupplieres> => {
  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const findSuppliers: Array<Supplier> = await supplierRepository.find();

  return returnAllSupplierSchema.parse(findSuppliers);
};
