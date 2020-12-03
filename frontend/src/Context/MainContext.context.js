import React, { useState, useEffect } from "react";
import Request from "../Services/Request.service";
const MainContext = React.createContext();
const { Provider, Consumer } = MainContext;

const MainProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [modalVisible, setModalVisible] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await Request.get("/products");
      setProducts(response.data);
    };
    getProducts();
    setRefresh(false);
  }, [refresh]);

  const addProduct = async (barcode, name, quantity) => {
    const response = await Request.post("/products", { barcode, name, quantity });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.message;
    }
  };

  const getProduct = async (id) => {
    const response = await Request.get(`/products/${id}`);
    if (!!response.data.success) {
      return response.data;
    }
    return {};
  };

  const updateProduct = async (id, barcode, name, quantity) => {
    const response = await Request.put(`/products/${id}`, { barcode, name, quantity });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.message;
    }
  };

  const setPrice = async (id, price) => {
    const response = await Request.put(`/products/setPrice/${id}`, { price });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.message;
    }
  };

  const enable = async (id) => {
    const response = await Request.put(`/products/enable/${id}`);
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.message;
    }
  };

  const disable = async (id) => {
    const response = await Request.put(`/products/disable/${id}`);
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.message;
    }
  };

  return (
    <Provider
      value={{
        products,
        addProduct,
        getProduct,
        updateProduct,
        setPrice,
        enable,
        disable,
        modalVisible,
        setModalVisible,
      }}
    >
      {children}
    </Provider>
  );
};

export { MainProvider, Consumer as MainConsumer, MainContext };
