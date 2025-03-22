import path from "path";
import fs from "fs";
import { AppDataSource } from "../../data-source";
import {
  ICreateProduct,
  IProductRepo,
  IReturnProduct,
} from "../../interfaces/product.interface";
import { Product } from "../../entities";
import { AppError } from "../../errors";
import { returnProductSchema } from "../../schemas/product.schema";

// Certifique-se de que a pasta de uploads exista
export const ensureUploadsDir = () => {
  const uploadsPath = path.join(__dirname, "uploads");
  if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath, { recursive: true });
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

  await productRepository.save(product);

  ensureUploadsDir();

  if (productData.imgproduct) {
    if (!productData.imgproduct.startsWith("data:")) {
      const baseData = productData.imgproduct;

      const defaultPng = `data:image/png;base64,${baseData}`;
      const defaultJpg = `data:image/jpg;base64,${baseData}`;

      if (baseData.startsWith("iVBORw0KGgo")) {
        // PNG base64 signature
        productData.imgproduct = defaultPng;
      } else if (baseData.startsWith("/9j/")) {
        // JPG/JPEG base64 signature
        productData.imgproduct = defaultJpg;
      } else {
        // Caso não identifique corretamente, lança um erro
        throw new AppError("Anexo Inválido.", 400);
      }
    }

    const mimeType = productData.imgproduct.match(/^data:(.*);base64,/);
    if (!mimeType) throw new AppError("Formato de arquivo inválido.", 400);

    const base64Data = productData.imgproduct.split(",")[1];
    const fileType = mimeType[1].split("/")[1];

    const allowedTypes = ["png", "jpg"];
    if (!allowedTypes.includes(fileType)) {
      throw new AppError("Formato de arquivo não suportado.", 400);
    }

    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
    if (Buffer.byteLength(base64Data, "base64") > MAX_FILE_SIZE) {
      throw new AppError(
        "O arquivo é muito grande. O tamanho máximo é de 50MB.",
        400
      );
    }

    const fileName = `${Date.now()}-${product.id}.${fileType}`;
    const filePath = path.join("uploads", fileName);
    console.log("Caminho do arquivo:", filePath);
    const fileData = Buffer.from(base64Data, "base64");

    fs.writeFileSync(filePath, fileData);

    // const anexoUrl =
    //   process.env.NODE_ENV === "dev"
    //     ? `http://localhost:3000/uploads/${fileName}`
    //     : `https://seu-dominio.com/uploads/${fileName}`;

    const anexoUrl = `http://localhost:3000/uploads/${fileName}`;

    product.imgproduct = anexoUrl;
  }

  await productRepository.save(product);

  return returnProductSchema.parse(product);
};
