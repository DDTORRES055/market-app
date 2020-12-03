import React from "react";
import Button from "../../Button/Button.component";
import FormControl from "../FormControl/FormControl.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function AddProductForm() {
  const onSubmit = (event) => {};

  const onCancel = (event) => {};

  return (
    <div className="form-contain" id="updateProductForm">
      <div className="form-title">Registrar Producto</div>
      <form>
        <div className="form-inputs">
          <div className="form-description">
            Los campos marcados con <span className="required">*</span> son obligatorios
          </div>
          <FormControl
            id="addProduct-barcode"
            label="Código de barras:"
            required={true}
            message="Campo vacio"
            value={"awef"}
          />
          <FormControl
            id="addProduct-name"
            label="Nombre del producto:"
            required={true}
            message="Campo vacio"
            value={"awef"}
          />
          <FormControl
            id="addProduct-quantity"
            label="Número de existencia:"
            required={true}
            message="Campo vacio"
            value={"awef"}
          />
        </div>
        <div className="form-buttons">
          <Button onClick={onSubmit} text="Aceptar" />
          <Button onClick={onCancel} text="Cancelar" />
        </div>
      </form>
    </div>
  );
}
