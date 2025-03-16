import { useContext } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledContainerModal } from "./style";
import GeralContext from "../../contexts/GeralContext";
import uploadImage from "../../Img/icon_upload.png";
import addProductSchema from "./addProductSchema";

const AddProductModal = () => {
  const { loading, handleAddProductModal } = useContext(GeralContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      nameproduct: "",
      codbarras: "",
      description: "",
      qdestoque: "",
      category: "",
      datavalidade: "",
      imgproduct: "",
    },
    resolver: zodResolver(addProductSchema),
  });

  const submit = async () => {
    // const information = { ...data };

    reset();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1]; // Remove o cabeçalho do base64
        setValue("imgproduct", base64String); // Define o valor do campo 'imgproduct' como a string base64 do arquivo
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Cadastro de Produto</h2>
          <button
            onClick={() => handleAddProductModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="nameproduct" className="labelModal">
            Nome do Produto
          </label>
          <input
            type="text"
            name="nameproduct"
            placeholder="Insira o nome do produto"
            className="inputModal"
            {...register("nameproduct")}
          />
          {errors.nameproduct && (
            <p className="areaError">{errors.nameproduct.message}</p>
          )}

          <label htmlFor="codbarras" className="labelModal">
            Código de Barras
          </label>
          <input
            type="number"
            name="codbarras"
            placeholder="Insira o código de barras"
            className="inputModal"
            {...register("codbarras")}
          />
          {errors.codbarras && (
            <p className="areaError">{errors.codbarras.message}</p>
          )}

          <label htmlFor="description" className="labelModal">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder="Descreva brevemente o produto"
            className="textAreaModal"
          ></textarea>
          {errors.description && (
            <p className="areaError">{errors.description.message}</p>
          )}

          <label htmlFor="qdestoque" className="labelModal">
            Quantidade em Estoque
          </label>
          <input
            type="number"
            name="qdestoque"
            placeholder="Quantidade disponível"
            className="inputModal"
            {...register("qdestoque")}
          />
          {errors.qdestoque && (
            <p className="areaError">{errors.qdestoque.message}</p>
          )}

          <label htmlFor="category" className="labelModal">
            Categoria
          </label>
          <select
            name="category"
            id="category"
            className="selectModal"
            {...register("category")}
          >
            <option value="">Selecione</option>
            <option value="alimentos">Alimentos</option>
            <option value="bebidas">Bebidas</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="outros">Outros</option>
            <option value="presentes">Presentes</option>
            <option value="suplementos">Suplementos</option>
            <option value="vestuario">Vestuário</option>
          </select>
          {errors.category && (
            <p className="areaError">{errors.category.message}</p>
          )}

          <label htmlFor="datavalidade" className="labelModal">
            Data de Validade
          </label>
          <input
            type="date"
            name="datavalidade"
            placeholder="Selecione a data de validade"
            className="inputModal"
            {...register("datavalidade")}
          />
          {errors.datavalidade && (
            <p className="areaError">{errors.datavalidade.message}</p>
          )}

          <label htmlFor="imgproduct" className="fileUploadLabel">
            Imagem do Produto
            <img src={uploadImage} alt="Upload" className="imageFileUpload" />
          </label>
          <input
            id="imgproduct"
            name="imgproduct"
            type="file"
            style={{ display: "none" }}
            {...register("imgproduct")}
            onChange={handleFileChange}
          />

          <button type="submit" className="btRegisterModal">
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalContent,
    document.getElementById("modalAddProduct-root")
  );
};
export default AddProductModal;
