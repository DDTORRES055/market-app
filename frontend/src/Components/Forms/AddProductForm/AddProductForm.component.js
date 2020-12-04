import React, { useState, useContext } from "react";
import { MainContext } from "../../../Context/MainContext.context";
import Button from "../../Button/Button.component";
import FormControl from "../FormControl/FormControl.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function AddProductForm() {
  const { setModalVisible, addProduct, isDuplicated } = useContext(MainContext);
  const [product, setProduct] = useState({
    "addProduct-barcode": "",
    "addProduct-name": "",
    "addProduct-quantity": "",
  });
  const [errorFields, setErrorFields] = useState({
    "addProduct-barcode": "",
    "addProduct-duplicated-barcode": false,
    "addProduct-name": "",
    "addProduct-quantity": "",
  });

  const onSubmit = async (event) => {
    let errors = { barcode: "", duplicated: false, name: "", quantity: "" };

    if (!product["addProduct-barcode"]) {
      errors.barcode = "Campo obligatorio";
    } else if (
      !/\d\d\d\d\d\d\d\d\d\d\d\d\d/.test(product["addProduct-barcode"]) ||
      product["addProduct-barcode"].length > 13
    ) {
      errors.barcode = "Formato Incorrecto";
    } else if (await isDuplicated(product["addProduct-barcode"])) {
      errors.duplicated = true;
      errors.barcode = "Código de barras duplicado";
    }

    if (!product["addProduct-name"]) {
      errors.name = "Campo obligatorio";
    } else if (!product["addProduct-name"].trim() || product["addProduct-name"].length > 25) {
      errors.name = "Formato Incorrecto";
    }

    if (!product["addProduct-quantity"]) {
      errors.quantity = "Campo obligatorio";
    } else if (
      product["addProduct-quantity"].includes(".") ||
      product["addProduct-quantity"].startsWith("0") ||
      !Number(product["addProduct-quantity"]) ||
      !Number.isInteger(Number(product["addProduct-quantity"])) ||
      product["addProduct-quantity"] < 1 ||
      product["addProduct-quantity"] > 1000
    ) {
      errors.quantity = "Formato Incorrecto";
    }

    setErrorFields({
      "addProduct-barcode": errors.barcode,
      "addProduct-duplicated-barcode": errors.duplicated,
      "addProduct-name": errors.name,
      "addProduct-quantity": errors.quantity,
    });

    if (!errors.barcode && !errors.duplicated && !errors.name && !errors.quantity) {
      if (
        await addProduct(
          product["addProduct-barcode"],
          product["addProduct-name"],
          Number(product["addProduct-quantity"])
        )
      ) {
        setProduct({
          "addProduct-barcode": "",
          "addProduct-name": "",
          "addProduct-quantity": "",
        });
        setModalVisible(null);
      }
    }
  };

  const onCancel = (event) => {
    setProduct({
      "addProduct-barcode": "",
      "addProduct-name": "",
      "addProduct-quantity": "",
    });
    setErrorFields({
      "addProduct-barcode": "",
      "addProduct-duplicated-barcode": "",
      "addProduct-name": "",
      "addProduct-quantity": "",
    });
    setModalVisible(null);
  };

  const OnChangeText = (event) => {
    const { id, value } = event.target;
    setProduct({
      ...product,
      ...{
        [id]: value,
      },
    });
  };

  return (
    <div className="form-contain" id="addProduct">
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
            message={errorFields["addProduct-barcode"]}
            value={product["addProduct-barcode"]}
            onChange={OnChangeText}
            duplicated={errorFields["addProduct-duplicated-barcode"]}
          />
          <FormControl
            id="addProduct-name"
            label="Nombre del producto:"
            required={true}
            message={errorFields["addProduct-name"]}
            value={product["addProduct-name"]}
            onChange={OnChangeText}
          />
          <FormControl
            id="addProduct-quantity"
            label="Número de existencia:"
            required={true}
            message={errorFields["addProduct-quantity"]}
            value={product["addProduct-quantity"]}
            onChange={OnChangeText}
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
