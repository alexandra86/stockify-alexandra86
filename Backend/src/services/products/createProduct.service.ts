import path from "path";
import fs from "fs";
import {
  ICreateProduct,
  IProductRepo,
  IReturnProduct,
} from "../../interfaces/product.interface";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { AppError } from "../../errors";
import { returnProductSchema } from "../../schemas/product.schema";

// Certifique-se de que a pasta de uploads exista
export const ensureUploadsDir = () => {
  const uploadsDir = path.join(__dirname, "../../uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
};

export const createProductService = async (
  productData: ICreateProduct
): Promise<IReturnProduct> => {
  const productRepository: IProductRepo = AppDataSource.getRepository(Product);

  const product: Product = productRepository.create({
    ...productData,
    imgproduct: "",
  });

  ensureUploadsDir();

  if (productData.imgproduct) {
    // Verifica se a string de imgproduct já contém um cabeçalho
    let base64Data;
    if (productData.imgproduct.startsWith("data:")) {
      base64Data = productData.imgproduct.split(",")[1]; // Remove o prefixo da string base64
    } else {
      // Caso não tenha cabeçalho, você pode definir um padrão, por exemplo, para PNG
      const defaultPng = "data:image/png;base64,";
      const defaultJpg = "data:image/jpg;base64,";
      const defaultJpeg = "data:image/jpeg;base64,";
      productData.imgproduct =
        defaultPng || defaultJpg || defaultJpeg + base64Data; // Adiciona o cabeçalho
      base64Data = productData.imgproduct; // Assumindo que a string já é base64
    }

    const fileSizeInBytes = Buffer.byteLength(base64Data, "base64");
    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

    if (fileSizeInBytes > MAX_FILE_SIZE) {
      throw new AppError(
        "O arquivo é muito grande. O tamanho máximo é de 50MB.",
        400
      );
    }

    const fileExtension = path.extname(productData.imgproduct);
    const fileName = `${Date.now()}-${product.id}${fileExtension}`;

    const filePath = path.join(__dirname, "../../uploads", fileName);

    const fileData = Buffer.from(base64Data, "base64");

    fs.writeFileSync(filePath, fileData);

    const imgproductUrl = `https://localhost:3000/uploads/${fileName}`;
    product.imgproduct = imgproductUrl;
  }

  await productRepository.save(product);

  return returnProductSchema.parse(product);
};
