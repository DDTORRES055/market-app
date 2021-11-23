import React, { useState, useEffect } from "react";
import Request from "../Services/Request.service";
const MainContext = React.createContext();
const { Provider, Consumer } = MainContext;

const MainProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [modalVisible, setModalVisible] = useState(null);
  const [productToUpdate, setProductToUpdate] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await Request.get("/products");
      checkAuth(response);
      setProducts(response.data);
    };
    getProducts();
    setRefresh(false);
    setAuthenticated(!!localStorage.getItem("access-token"));
  }, [refresh]);

  const checkAuth = (response) => {
    if (!response.data.success && response.data.failAuth) {
      logout();
    }
  };

  const login = async (username, password) => {
    const response = await Request.post("/users/login", { username, password });
    if (!!response.data.success) {
      setAuthenticated(response.data.success);
      return response.data.success;
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const addProduct = async (barcode, name, quantity) => {
    const response = await Request.post("/products", { barcode, name, quantity });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const getProduct = async (id) => {
    const response = await Request.get(`/products/${id}`);
    if (!!response.data.success) {
      return response.data.product;
    }
    checkAuth(response);
    return {};
  };

  const updateProduct = async (id, barcode, name, quantity) => {
    const response = await Request.put(`/products/${id}`, { barcode, name, quantity });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const setPrice = async (id, price) => {
    const response = await Request.put(`/products/setPrice/${id}`, { price });
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const enable = async (id) => {
    const response = await Request.put(`/products/enable/${id}`);
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const deleteProduct = async (id) => {
    const response = await Request.delete(`/products/${id}`);
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const disable = async (id) => {
    const response = await Request.put(`/products/disable/${id}`);
    if (!!response.data.success) {
      setRefresh(true);
      return response.data.success;
    }
    checkAuth(response);
  };

  const isDuplicated = async (barcode) => {
    const response = await Request.get(`/products/isDuplicated/${barcode}`);
    return response.data.duplicated;
  };

  const isDuplicatedForUpdate = async (id, barcode) => {
    const response = await Request.get(`/products/isDuplicatedForUpdate/${id}/${barcode}`);
    checkAuth(response);
    return response.data.duplicated;
  };

  return (
    <Provider
      value={{
        products,
        addProduct,
        getProduct,
        updateProduct,
        deleteProduct,
        setPrice,
        enable,
        disable,
        modalVisible,
        setModalVisible,
        isDuplicated,
        isDuplicatedForUpdate,
        productToUpdate,
        setProductToUpdate,
        successMessage,
        setSuccessMessage,
        login,
        logout,
        authenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { MainProvider, Consumer as MainConsumer, MainContext };
