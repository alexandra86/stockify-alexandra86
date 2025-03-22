import { AppDataSource } from "../../data-source";
import { Supplier } from "../../entities";
import { ISupplierRepo } from "../../interfaces/supplier.interface";

export const deleteSupplierService = async (
  supplierId: string
): Promise<void> => {
  const supplierRepository: ISupplierRepo =
    AppDataSource.getRepository(Supplier);

  const supplier = await supplierRepository.findOne({
    where: {
      id: parseInt(supplierId),
    },
  });

  await supplierRepository.remove(supplier!);
};
