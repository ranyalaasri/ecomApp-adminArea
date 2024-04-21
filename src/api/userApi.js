import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:7500/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export function RegisterUser(body) {
  return userApi.post("/register", body);
}

export function LoginUser(body) {
  return userApi.post("/login", body);
}

export default userApi;
