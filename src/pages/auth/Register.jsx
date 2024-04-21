import { Form, Input, Button, Typography } from "antd";
import { RegisterUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await RegisterUser(values);
      console.log("Received values:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: 400 }}>
        <Title level={2} style={{ textAlign: "center" }}>
          Register
        </Title>
        <Form
          name="register-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </Form.Item>
          Or <a href="/login">login now!</a> if you have account
        </Form>
      </div>
    </div>
  );
};

export default Register;
