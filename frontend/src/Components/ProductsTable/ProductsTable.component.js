import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext.context";
import "./ProductsTable.styles.css";

export default function ProductsTable(props) {
  const { setModalVisible, setProductToUpdate, getProduct } = useContext(MainContext);
  const products = props.products || [];

  const renderProducts = () => {
    if (products.length < 7) {
      const repetitions = 7 - products.length;
      for (let i = 0; i < repetitions; i++) {
        products.push({});
      }
    }
    return products.map((product, i) => {
      return (
        <tr key={i}>
          <td>{product.barcode}</td>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>{product.price ? product.price.toString() : ""}</td>
          <td>
            <div className="icons-container">
              {product.price ? (
                product.enabled ? (
                  <img
                    src="/images/habx24.png"
                    alt="Deshabilitar"
                    onClick={async () => {
                      setProductToUpdate(await getProduct(product._id));
                      setModalVisible("disableProduct");
                    }}
                  />
                ) : (
                  <img
                    src="/images/deshab.png"
                    alt="Habilitar"
                    onClick={async () => {
                      setProductToUpdate(await getProduct(product._id));
                      setModalVisible("enableProduct");
                    }}
                  />
                )
              ) : (
                <img className="empty-icon" src="/images/nanai.png" alt="Vacio" />
              )}
              {!product.barcode || product.enabled ? (
                <img className="empty-icon" src="/images/nanai.png" alt="Vacio" />
              ) : (
                <img
                  src="/images/editprecio.png"
                  alt="Precio"
                  onClick={async () => {
                    setProductToUpdate(await getProduct(product._id));
                    setModalVisible("addPrice");
                  }}
                />
              )}
              {!product.barcode || product.enabled ? (
                <img className="empty-icon" src="/images/nanai.png" alt="Vacio" />
              ) : (
                <img
                  src="/images/lapizx24.png"
                  alt="Editar"
                  onClick={async () => {
                    setProductToUpdate(await getProduct(product._id));
                    setModalVisible("updateProduct");
                  }}
                />
              )}
              {!product.barcode || product.enabled ? (
                <img className="empty-icon" src="/images/nanai.png" alt="Vacio" />
              ) : (
                <img
                  src="/images/delete.png"
                  alt="Editar"
                  onClick={async () => {
                    setProductToUpdate(await getProduct(product._id));
                    setModalVisible("deleteProduct");
                  }}
                />
              )}
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div id="products-table">
      <table>
        <thead>
          <tr>
            <td>Código de barras</td>
            <td>Nombre del producto</td>
            <td>Existencia</td>
            <td>Precio unitario</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </table>
    </div>
  );
}
