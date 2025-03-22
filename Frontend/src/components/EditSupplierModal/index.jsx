import { useContext, useEffect } from "react";
import GeralContext from "../../contexts/GeralContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledContainerModal } from "./style";
import { createPortal } from "react-dom";
import editSupplierSchema from "./editSupplierSchema";

const EditSupplierModal = () => {
  const {
    loading,
    handleEditSupplierModal,
    setTipeDocument,
    setLoading,
    handlePhoneMask,
    editSupplier,
    selectSupplier,
  } = useContext(GeralContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      nameempresa: selectSupplier.nameempresa,
      cnpj: selectSupplier.cnpj,
      address: selectSupplier.address,
      telephone: selectSupplier.telephone,
      email: selectSupplier.email,
      contactprincipal: selectSupplier.contactprincipal,
    },
    resolver: zodResolver(editSupplierSchema),
  });

  useEffect(() => {
    const subscription = watch((value) => {
      const cleanedValue = value.cnpj.replace(/\D/g, "");
      setTipeDocument(() => {
        if (cleanedValue.length === 14) {
          return "CNPJ";
        } else {
          return "";
        }
      });
    });

    return () => subscription.unsubscribe();
  }, [setTipeDocument, watch]);

  const submit = async (data) => {
    const information = { ...data };

    try {
      setLoading(true);
      await editSupplier(information);
    } catch (error) {
      console.error("Erro ao editar fornecedor:", error);
    } finally {
      setLoading(false);
    }
    reset();
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Editar Fornecedor</h2>
          <button
            onClick={() => handleEditSupplierModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="nameempresa" className="labelModal">
            Nome da Empresa
          </label>
          <input
            type="text"
            name="nameempresa"
            placeholder="Insira o nome da empresa"
            className="inputModal"
            {...register("nameempresa")}
          />
          {errors.nameempresa && (
            <p className="areaError">{errors.nameempresa.message}</p>
          )}

          <label htmlFor="cnpj" className="labelModal">
            CNPJ
          </label>
          <input
            type="text"
            name="cnpj"
            placeholder="00.000.000/0000-00"
            className="inputModal"
            {...register("cnpj")}
          />
          {errors.cnpj && <p className="areaError">{errors.cnpj.message}</p>}

          <label htmlFor="address" className="labelModal">
            Endereço
          </label>
          <input
            type="text"
            name="address"
            placeholder="Insira o endereço completo da empresa"
            className="inputModal"
            {...register("address")}
          />
          {errors.address && (
            <p className="areaError">{errors.address.message}</p>
          )}

          <label htmlFor="telephone" className="labelModal">
            Telefone
          </label>
          <input
            type="text"
            name="telephone"
            placeholder="(00) 0000-0000"
            className="inputModal"
            {...register("telephone")}
            onInput={handlePhoneMask}
            maxLength={14}
          />
          {errors.telephone && (
            <p className="areaError">{errors.telephone.message}</p>
          )}

          <label htmlFor="email" className="labelModal">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="exemplo@fornecedor.com"
            className="inputModal"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}

          <label htmlFor="contactprincipal" className="labelModal">
            Contato Principal
          </label>
          <input
            type="text"
            name="contactprincipal"
            placeholder="Nome do contato principal"
            className="inputModal"
            {...register("contactprincipal")}
          />
          {errors.contactprincipal && (
            <p className="areaError">{errors.contactprincipal.message}</p>
          )}

          <button type="submit" className="btRegisterModal">
            {loading ? "Editando..." : "Editar"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalContent,
    document.getElementById("modalEditSupplier-root")
  );
};
export default EditSupplierModal;
