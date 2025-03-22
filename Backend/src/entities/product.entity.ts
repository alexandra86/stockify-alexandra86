import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Category {
  ALIMENTOS = "Alimentos",
  BEBIDAS = "Bebidas",
  ELETRONICOS = "Eletrônicos",
  OUTROS = "Outros",
  PRESENTES = "Presentes",
  SUPLEMENTOS = "Suplementos",
  VESTUARIO = "Vestuário",
  DEFAULT = "Selecione",
}

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text" })
  nameproduct: string;

  @Column({ type: "text" })
  codbarras: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  qdestoque: string;

  @Column({
    type: "enum",
    enum: Category,
    default: Category.DEFAULT,
  })
  category: string;

  @Column({ type: "text", nullable: true })
  datavalidade?: string | undefined | null;

  @Column({ type: "text", nullable: true })
  imgproduct?: string | undefined | null;
}
