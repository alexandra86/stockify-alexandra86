import { useContext } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledContainerModal } from "./style";
import editProductSchema from "./editProductSchema";
import GeralContext from "../../contexts/GeralContext";
import uploadImage from "../../Img/icon_upload.png";

const EditProductModal = () => {
  const {
    loading,
    setLoading,
    handleEditProductModal,
    handleDateMask,
    handleCodBarrasMask,
    editProduct,
    selectProduct,
  } = useContext(GeralContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      nameproduct: selectProduct.nameproduct,
      codbarras: selectProduct.codbarras,
      description: selectProduct.description,
      qdestoque: selectProduct.qdestoque,
      category: selectProduct.category,
      datavalidade: selectProduct.datavalidade,
      imgproduct: selectProduct.imgproduct,
    },
    resolver: zodResolver(editProductSchema),
  });

  console.log(selectProduct);

  const submit = async (data) => {
    const information = { ...data };
    try {
      setLoading(true);
      editProduct(information);
      reset();
    } catch (error) {
      console.error("Erro ao criar Produto:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setValue("imgproduct", base64String);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Editar de Produto</h2>
          <button
            onClick={() => handleEditProductModal()}
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
            type="text"
            name="codbarras"
            placeholder="Insira o código de barras"
            className="inputModal"
            {...register("codbarras")}
            onInput={handleCodBarrasMask}
            maxLength={14}
          />
          {errors.codbarras && (
            <p className="areaError">{errors.codbarras.message}</p>
          )}

          <label htmlFor="description" className="labelModal">
            Descrição
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            placeholder="Descreva brevemente o produto"
            className="textAreaModal"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <p className="areaError">{errors.description.message}</p>
          )}

          <label htmlFor="qdestoque" className="labelModal">
            Quantidade em Estoque
          </label>
          <input
            type="text"
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
            <option value="Alimentos">Alimentos</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Eletronicos">Eletrônicos</option>
            <option value="Outros">Outros</option>
            <option value="Presentes">Presentes</option>
            <option value="Suplementos">Suplementos</option>
            <option value="Vestuario">Vestuário</option>
          </select>
          {errors.category && (
            <p className="areaError">{errors.category.message}</p>
          )}

          <label htmlFor="datavalidade" className="labelModal">
            Data de Validade
          </label>
          <input
            type="text"
            name="datavalidade"
            placeholder="Selecione a data de validade"
            className="inputModal"
            {...register("datavalidade")}
            onInput={handleDateMask}
            maxLength={10}
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
            className="inputFileUpload"
          />

          <button type="submit" className="btRegisterModal">
            {loading ? "Eitando..." : "Editar"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalContent,
    document.getElementById("modalEditProduct-root")
  );
};
export default EditProductModal;
