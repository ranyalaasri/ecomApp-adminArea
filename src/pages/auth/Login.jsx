import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/userApi";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await LoginUser(values);
      console.log("Received values:", response.data);
      navigate("/dashboard");
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
          Login
        </Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a style={{ float: "right" }} href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
