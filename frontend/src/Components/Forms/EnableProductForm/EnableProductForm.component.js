import React, { useContext } from "react";
import { MainContext } from "../../../Context/MainContext.context";
import Button from "../../Button/Button.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function EnableProductForm() {
  const { setModalVisible, enable, productToUpdate } = useContext(MainContext);

  const onSubmit = async (event) => {
    if (await enable(productToUpdate._id)) {
      setModalVisible(null);
    }
  };

  const onCancel = (event) => {
    setModalVisible(null);
  };

  return (
    <div className="form-contain" id="enableProduct">
      <div className="form-title">Habilitar Producto</div>
      <form>
        <div className="form-inputs">
          <div className="form-description">
            ¿Está seguro de habilitar Producto: <b>{productToUpdate.name},</b>
            <br />
            con código de barras: <b>{productToUpdate.barcode}</b>?
          </div>
        </div>
        <div className="form-buttons">
          <Button onClick={onSubmit} text="Aceptar" />
          <Button onClick={onCancel} text="Cancelar" />
        </div>
      </form>
    </div>
  );
}
