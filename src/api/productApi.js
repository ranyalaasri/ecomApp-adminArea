import axios from "axios";

const productApi = axios.create({
  baseURL: "http://localhost:7500/products",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${
    //   localStorage.getItem("token") === null
    //     ? null
    //     : JSON.parse(localStorage.getItem("token"))
    // }`,
  },
});

export function getAllProducts() {
  return productApi.get("/");
}

export function getProduct(id) {
  return productApi.get(`/${id}`);
}

export function createProduct(data) {
  return productApi.post("/", data);
}

export function updateProduct(id, data) {
  return productApi.patch(`/${id}`, data);
}

export function deleteProduct(id) {
  return productApi.delete(`/delete/${id}`);
}

export default productApi;
