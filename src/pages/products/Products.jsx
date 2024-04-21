import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, message, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../api/productApi";
const { Meta } = Card;

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log("response", response);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      message.success("Product deleted successfully");
      // After deletion, refresh the product list
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product");
    }
  };

  return (
    <div>
      <Link to={`/dashboard/products/create`}>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          style={{ marginBottom: "20px" }}
        >
          Add Product
        </Button>
      </Link>
      <Row gutter={[16, 16]}>
        {loading ? (
          <Spin size="large" />
        ) : products.length ? (
          products.map((product) => (
            <Col span={8} key={product._id}>
              <Card
                key={product._id}
                hoverable
                cover={
                  <img alt={product.productName} src={product.productImage} />
                }
              >
                <Meta
                  title={product.productName}
                  description={product.description}
                />
                <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                  Price: {product.price}
                </div>
                <div
                  style={{
                    bottom: 0,
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  <Link to={`/dashboard/products/edit/${product._id}`}>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      style={{ marginRight: "8px" }}
                    />
                  </Link>

                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(product._id)}
                  />
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <div>No products available</div>
        )}
      </Row>
    </div>
  );
};

export default ProductsPage;
