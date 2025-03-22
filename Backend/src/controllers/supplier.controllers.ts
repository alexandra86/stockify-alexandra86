import { Request, Response } from "express";
import {
  ICreateSupplier,
  IUpdateSupplier,
} from "../interfaces/supplier.interface";
import { createSupplierService } from "../services/suppliers/createSupplier.service";
import { listSupplierService } from "../services/suppliers/listSuppliers.service";
import { retrieveSupplierService } from "../services/suppliers/retrieveSupplier.service";
import { updateSupplierService } from "../services/suppliers/updateSupplier.service";
import { deleteSupplierService } from "../services/suppliers/deleteSupplier.service";

export const createSupplierController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const supplierData: ICreateSupplier = request.body;

  const newSupplier = await createSupplierService(supplierData);

  return response.status(201).json(newSupplier);
};

export const listSupplierController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const suppliers = await listSupplierService();

  return response.json(suppliers);
};

export const retrieveSupplierController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const supplierId: string = request.params.supplierId;

  const supplier = await retrieveSupplierService(supplierId);

  return response.json(supplier);
};

export const updateSupplierController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const newSupplierData: IUpdateSupplier = request.body;
  const supplierId: string = request.params.supplierId;

  const updateSupplier = await updateSupplierService(
    newSupplierData,
    supplierId
  );

  return response.json(updateSupplier);
};

export const deleteSupplierController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const supplierId: string = request.params.supplierId;
  await deleteSupplierService(supplierId);

  return response.status(204).send();
};
