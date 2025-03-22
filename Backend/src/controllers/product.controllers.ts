import { Request, Response } from "express";
import { ICreateProduct } from "../interfaces/product.interface";
import { createProductService } from "../services/products/createProduct.service";

export const createProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const productData: ICreateProduct = request.body;

  const newProduct = await createProductService(productData);

  return response.status(201).json(newProduct);
};

//   export const listProductController = async (
//     request: Request,
//     response: Response
//   ) => {
//     const products = await listProductService();

//     return response.json(products);
//   };

//   export const retrieveProductController = async (
//     request: Request,
//     response: Response
//   ) => {
//     const productId: string = request.params.productId;

//     const product = await retrieveProductService(productId);

//     return response.json(product);
//   };
