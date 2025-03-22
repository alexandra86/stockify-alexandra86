import { AppDataSource } from "../../data-source";
import { Supplier } from "../../entities";
import {
  IReturnSupplier,
  ISupplierRepo,
} from "../../interfaces/supplier.interface";
import { returnSupplierSchema } from "../../schemas/supplier.schema";

export const retrieveSupplierService = async (
  supplierId: string
): Promise<IReturnSupplier> => {
  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const findSupplier = await supplierRepository.findOne({
    where: {
      id: parseInt(supplierId),
    },
  });

  return returnSupplierSchema.parse(findSupplier!);
};
