import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext.context";
import "./Main.styles.css";
import ProductsTable from "../ProductsTable/ProductsTable.component";
import Modal from "../Modal/Modal.component";
import AddProductForm from "../Forms/AddProductForm/AddProductForm.component";
import Button from "../Button/Button.component";

export default function MainMenu() {
  const { products, setModalVisible } = useContext(MainContext);
  return (
    <div id="main">
      <Modal>
        <AddProductForm form="addProduct" />
      </Modal>
      <div id="main-title">Catálogo de productos</div>
      <ProductsTable products={products} />
      <Button onClick={() => setModalVisible("addProduct")} text="Registrar" />
    </div>
  );
}
