import { Request, Response } from "express";
import {
  ICreateProduct,
  IUpdateProduct,
} from "../interfaces/product.interface";
import { createProductService } from "../services/products/createProduct.service";
import { listProductService } from "../services/products/listProducts.service";
import { updateProductService } from "../services/products/updateProduct.service";
import { retrieveProductService } from "../services/products/retrieveProduct.service";
import { deleteProductService } from "../services/products/deleteProduct.service";

export const createProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const productData: ICreateProduct = request.body;

  const newProduct = await createProductService(productData);

  return response.status(201).json(newProduct);
};

export const listProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const products = await listProductService();

  return response.json(products);
};

export const retrieveProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const productId: string = request.params.productId;

  const product = await retrieveProductService(productId);

  return response.json(product);
};

export const updateProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const newProductData: IUpdateProduct = request.body;
  const productId: string = request.params.productId;

  const updateProduct = await updateProductService(newProductData, productId);

  return response.json(updateProduct);
};

export const deleteProductController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const productId: string = request.params.productId;
  await deleteProductService(productId);

  return response.status(204).send();
};
