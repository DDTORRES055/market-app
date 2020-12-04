import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../../Context/MainContext.context";
import Button from "../../Button/Button.component";
import FormControl from "../FormControl/FormControl.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function AddPriceForm() {
  const { setSuccessMessage, modalVisible, setModalVisible, setPrice, productToUpdate } = useContext(MainContext);
  const [product, setProduct] = useState({
    "addPrice-price": "",
  });
  const [errorFields, setErrorFields] = useState({
    "addPrice-price": "",
  });

  useEffect(() => {
    if (modalVisible === "addPrice") {
      setProduct({
        "addPrice-price": productToUpdate.price ? productToUpdate.price.toString() : "",
      });
    }
  }, [modalVisible]);

  const onSubmit = async (event) => {
    let errors = { price: "" };

    if (!product["addPrice-price"]) {
      if (await setPrice(productToUpdate._id, Number(product["addPrice-price"]))) {
        setProduct({
          "addPrice-price": "",
        });
        setModalVisible(null);
        if (!productToUpdate.price) {
          setSuccessMessage("");
        } else {
          setSuccessMessage("El precio se ha asignado exitosamente.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        }
      }
      return;
    } else if (
      !/^[0-9]+([\.][0-9]{1,2})?$/m.test(product["addPrice-price"]) ||
      product["addPrice-price"].startsWith("0") ||
      !Number(product["addPrice-price"]) ||
      product["addPrice-price"] < 1 ||
      product["addPrice-price"] > 250000
    ) {
      errors.price = "Formato Incorrecto";
    }

    setErrorFields({
      "addPrice-price": errors.price,
    });

    if (!errors.price) {
      if (await setPrice(productToUpdate._id, Number(product["addPrice-price"]))) {
        setProduct({
          "addPrice-price": "",
        });
        setModalVisible(null);
        setSuccessMessage("El precio se ha asignado exitosamente.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      }
    }
  };

  const onCancel = (event) => {
    setProduct({
      "addPrice-price": "",
    });
    setErrorFields({
      "addPrice-price": "",
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
    <div className="form-contain" id="addPrice">
      <div className="form-title">Asignar Precio</div>
      <form>
        <div className="form-inputs">
          <div className="form-description"></div>
          <table className="form-data">
            <tr>
              <td className="property">
                <b>Código de barras: </b>
              </td>
              <td className="value">{productToUpdate.barcode}</td>
            </tr>
            <tr>
              <td className="property">
                <b>Nombre del producto: </b>
              </td>
              <td className="value">{productToUpdate.name}</td>
            </tr>
            <tr>
              <td className="property">
                <b>Número en existencia: </b>
              </td>
              <td className="value">{productToUpdate.quantity}</td>
            </tr>
          </table>
          <FormControl
            id="addPrice-price"
            label="Precio:"
            required={false}
            message={errorFields["addPrice-price"]}
            value={product["addPrice-price"]}
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
