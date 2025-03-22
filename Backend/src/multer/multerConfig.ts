import { Request } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { AppError } from "../errors";
import { ensureUploadsDir } from "../services/products/createProduct.service";

// Configuração do multer para uploads
const storage = multer.diskStorage({
  destination: (request: Request, file: Express.Multer.File, cb) => {
    ensureUploadsDir();
    const uploadsDir = path.join(__dirname, "uploads");
    cb(null, uploadsDir);
  },
  filename: (request: Request, file: Express.Multer.File, cb) => {
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Limite de 50 MB

  fileFilter: (req: Request, file: Express.Multer.File, cb) => {
    // Filtrar tipos de arquivo permitidos
    const filetypes = /png|jpg|jpeg/; // Tipos permitidos
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(
        new AppError(
          `Formato de arquivo inválido: ${file.originalname}. Apenas arquivos PNG e JPG são permitidos.`,
          400
        )
      );
    }
  },
});

export default upload;
