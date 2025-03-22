import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text" })
  nameempresa: string;

  @Column({ type: "varchar", length: 14 })
  cnpj: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text" })
  telephone: string;

  @Column({ type: "varchar", length: 256 })
  email: string;

  @Column({ type: "text" })
  contactprincipal: string;
}
