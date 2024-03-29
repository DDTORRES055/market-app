import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { MainContext } from "../../Context/MainContext.context";
import "./Main.styles.css";
import ProductsTable from "../ProductsTable/ProductsTable.component";
import Modal from "../Modal/Modal.component";
import AddProductForm from "../Forms/AddProductForm/AddProductForm.component";
import UpdateProductForm from "../Forms/UpdateProductForm/UpdateProductForm.component";
import AddPriceForm from "../Forms/AddPriceForm/AddPriceForm.component";
import EnableProductForm from "../Forms/EnableProductForm/EnableProductForm.component";
import DisableProductForm from "../Forms/DisableProductForm/DisableProductForm.component";
import DeleteProductForm from "../Forms/DeleteProductForm/DeleteProductForm.component";
import Button from "../Button/Button.component";

export default function MainMenu() {
  const { successMessage, products, setModalVisible, authenticated, logout, setRefresh } = useContext(MainContext);

  useEffect(() => {
    setModalVisible(null);
    setRefresh(true);
  }, []);

  return (
    <div id="main">
      {!authenticated && <Redirect to="/"></Redirect>}
      <Modal>
        <AddProductForm form="addProduct" />
      </Modal>
      <Modal>
        <UpdateProductForm form="updateProduct" />
      </Modal>
      <Modal>
        <AddPriceForm form="addPrice" />
      </Modal>
      <Modal>
        <EnableProductForm form="enableProduct" />
      </Modal>
      <Modal>
        <DisableProductForm form="disableProduct" />
      </Modal>
      <Modal>
        <DeleteProductForm form="deleteProduct" />
      </Modal>
      <div id="main-title">Catálogo de productos</div>
      <div id="main-message">{successMessage}</div>
      <ProductsTable products={products} />
      <div id="main-buttons">
        <Button onClick={() => setModalVisible("addProduct")} text="Registrar" />
        <Button onClick={() => logout()} text="Salir" />
      </div>
    </div>
  );
}
