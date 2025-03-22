import { Request, Response } from "express";
import { ICreateSupplier } from "../interfaces/supplier.interface";

// export const createSupplierController = async (
//     request: Request,
//     response: Response
//   ) => {
//     const supplierData: ICreateSupplier = request.body;

//     const newSupplier = await createSupplierService(supplierData);

//     return response.status(201).json(newSupplier);
//   };

//   export const listSupplierController = async (
//     request: Request,
//     response: Response
//   ) => {
//     const suppliers = await listSupplierService();

//     return response.json(suppliers);
//   };

//   export const retrieveSupplierController = async (
//     request: Request,
//     response: Response
//   ) => {
//     const supplierId: string = request.params.supplierId;

//     const supplier = await retrieveSupplierService(supplierId);

//     return response.json(supplier);
//   };
