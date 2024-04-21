import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Admin Routes
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Users from "./pages/users/users";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UpdateProduct from "./pages/products/UpdateProduct";
import CreateProduct from "./pages/products/CreateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* <Route element={<AdminRoutes />}> */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<UpdateProduct />} />
          <Route path="products/create" element={<CreateProduct />} />
        </Route>
        {/* <Route path="*" element={< />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
