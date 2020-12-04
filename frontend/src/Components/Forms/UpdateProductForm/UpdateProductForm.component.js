import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../../Context/MainContext.context";
import Button from "../../Button/Button.component";
import FormControl from "../FormControl/FormControl.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function UpdateProductForm() {
  const { modalVisible, setModalVisible, updateProduct, isDuplicatedForUpdate, productToUpdate } = useContext(
    MainContext
  );
  const [product, setProduct] = useState({
    "updateProduct-barcode": "",
    "updateProduct-name": "",
    "updateProduct-quantity": "",
  });
  const [errorFields, setErrorFields] = useState({
    "updateProduct-barcode": "",
    "updateProduct-duplicated-barcode": false,
    "updateProduct-name": "",
    "updateProduct-quantity": "",
  });

  useEffect(() => {
    if (modalVisible == "updateProduct") {
      setProduct({
        "updateProduct-barcode": productToUpdate.barcode.toString(),
        "updateProduct-name": productToUpdate.name.toString(),
        "updateProduct-quantity": productToUpdate.quantity.toString(),
      });
    }
  }, [modalVisible]);

  const onSubmit = async (event) => {
    let errors = { barcode: "", duplicated: false, name: "", quantity: "" };

    if (!product["updateProduct-barcode"]) {
      errors.barcode = "Campo obligatorio";
    } else if (
      !/\d\d\d\d\d\d\d\d\d\d\d\d\d/.test(product["updateProduct-barcode"]) ||
      product["updateProduct-barcode"].length > 13
    ) {
      errors.barcode = "Formato Incorrecto";
    } else if (await isDuplicatedForUpdate(productToUpdate._id, product["updateProduct-barcode"])) {
      errors.duplicated = true;
      errors.barcode = "Código de barras duplicado";
    }

    if (!product["updateProduct-name"]) {
      errors.name = "Campo obligatorio";
    } else if (!product["updateProduct-name"].trim() || product["updateProduct-name"].length > 25) {
      errors.name = "Formato Incorrecto";
    }

    if (!product["updateProduct-quantity"]) {
      errors.quantity = "Campo obligatorio";
    } else if (
      product["updateProduct-quantity"].includes(".") ||
      product["updateProduct-quantity"].startsWith("0") ||
      !Number(product["updateProduct-quantity"]) ||
      !Number.isInteger(Number(product["updateProduct-quantity"])) ||
      product["updateProduct-quantity"] < 1 ||
      product["updateProduct-quantity"] > 1000
    ) {
      errors.quantity = "Formato Incorrecto";
    }

    setErrorFields({
      "updateProduct-barcode": errors.barcode,
      "updateProduct-duplicated-barcode": errors.duplicated,
      "updateProduct-name": errors.name,
      "updateProduct-quantity": errors.quantity,
    });

    if (!errors.barcode && !errors.duplicated && !errors.name && !errors.quantity) {
      if (
        await updateProduct(
          productToUpdate._id,
          product["updateProduct-barcode"],
          product["updateProduct-name"],
          Number(product["updateProduct-quantity"])
        )
      ) {
        setProduct({
          "updateProduct-barcode": "",
          "updateProduct-name": "",
          "updateProduct-quantity": "",
        });
        setModalVisible(null);
      }
    }
  };

  const onCancel = (event) => {
    setProduct({
      "updateProduct-barcode": "",
      "updateProduct-name": "",
      "updateProduct-quantity": "",
    });
    setErrorFields({
      "updateProduct-barcode": "",
      "updateProduct-duplicated-barcode": "",
      "updateProduct-name": "",
      "updateProduct-quantity": "",
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
    <div className="form-contain" id="updateProduct">
      <div className="form-title">Editar Producto</div>
      <form>
        <div className="form-inputs">
          <div className="form-description">
            Los campos marcados con <span className="required">*</span> son obligatorios
          </div>
          <FormControl
            id="updateProduct-barcode"
            label="Código de barras:"
            required={true}
            message={errorFields["updateProduct-barcode"]}
            value={product["updateProduct-barcode"]}
            onChange={OnChangeText}
            duplicated={errorFields["updateProduct-duplicated-barcode"]}
          />
          <FormControl
            id="updateProduct-name"
            label="Nombre del producto:"
            required={true}
            message={errorFields["updateProduct-name"]}
            value={product["updateProduct-name"]}
            onChange={OnChangeText}
          />
          <FormControl
            id="updateProduct-quantity"
            label="Número de existencia:"
            required={true}
            message={errorFields["updateProduct-quantity"]}
            value={product["updateProduct-quantity"]}
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
