import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/productApi";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  //   const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = async (values) => {
    const response = await createProduct(values);
    console.log("response ", response.data);
    message.success("Product created successfully!");
    form.resetFields();
    navigate("/dashboard/products");

    // setImageUrl(null);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
    message.error("Failed to create product. Please check the form.");
  };

  // const handleChange = (info) => {
  //   if (info.file.status === "done") {
  //     setImageUrl(info.file.response.url);
  //   }
  // };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Create Product</h1>
      <Form
        form={form}
        name="createProductForm"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="Product Name"
          name="productName"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter product description" },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter product price" }]}
        >
          <Input type="number" />
        </Form.Item>

        {/* <Form.Item
          label="Product Image"
          name="productImage"
          rules={[{ required: true, message: "Please upload product image" }]}
        >
          <Upload
            action="/api/upload"
            name="image"
            listType="picture"
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="Product" style={{ width: "100%" }} />
            ) : (
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            )}
          </Upload>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
