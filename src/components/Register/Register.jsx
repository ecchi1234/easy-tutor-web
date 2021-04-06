import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Form, Input, Select } from "antd";
import "./Register.scss";
import { PageHeader, Button, Layout } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import { NameWeb, RegisterTitle } from "../NameWeb/NameWeb";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


const { TextArea } = Input;
const { Option } = Select;
const { Content, Footer, Sider } = Layout;
const optionSubject = [
  { value: "Toán" },
  { value: "Tiếng Anh" },
  { value: "Ngữ Văn" },
  { value: "Vật lý" },
];

const optionMajor = [
  { value: "Ôn thi Đại Học" },
  { value: "Ôn thi Ielts" },
  { value: "Ôn thi Cấp 3" },
  { value: "Lấy lại căn bản" },
];

const optionMethod = [
  { value: "Học trực tuyến" },
  { value: "Học tại nhà gia sư" },
  { value: "Học tại nhà học sinh" },
];

const optionAddress = [
  { value: "Thanh Hóa" },
  { value: "Hà Nội" },
  { value: "Thái Bình" },
  { value: "Hưng Yến" },
];

const optionLevel = [
  { value: "Cao Đẳng" },
  { value: "Đại học" },
  { value: "Cao học" },
];

const Register = React.memo(() => {
  const tailFormItemLayout = useMemo(() => {
    return {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 0,
        },
        sm: {
          offset: 2,
        },
      },
    };
  }, []);

  // const [value, setValue] = useState('');

  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, []);

  const [form] = Form.useForm();

  // const [values, setValues] = useState('');
  const onFinish = useCallback((values) => {
    console.log("Received values of form: ", values);
  }, []);

  return (
    <Fragment>
      <header>
        <PageHeader
          className="site-page-header-responsive"
          title={<NameWeb />}
          extra={[
            <Button key="3">Trang chủ</Button>,
            <Button key="2">Lớp mới</Button>,
            <Button key="1" type="primary">
              Đăng yêu cầu
            </Button>,
          ]}
        ></PageHeader>
      </header>
      <div className="body">
        <div className="form-register-tutor">
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            className="form"
          >
            <RegisterTitle />
            <Form.Item
              className="padding"
              name="username"
              style={{ paddingTop: "50px" }}
              rules={[
                {
                  type: "string",
                  message: "The input is not valid username",
                },
                {
                  required: true,
                  message: "Please input your username",
                },
              ]}
            >
              <Input placeholder="Tên người dùng" prefix={<SmileTwoTone />} />
            </Form.Item>

            {/* Displayname */}
            <Form.Item
              name="displayname"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid display name",
                },
                {
                  required: true,
                  message: "Please input your display name",
                },
              ]}
            >
              <Input placeholder="Tên hiển thị" prefix={<SmileTwoTone />} />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid phone number",
                },
                {
                  required: true,
                  message: "Please input your phone number",
                },
              ]}
            >
              <Input placeholder="Số điện thoại" prefix={<SmileTwoTone />} />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail",
                },
                {
                  required: true,
                  message: "Please input your E-mail",
                },
              ]}
            >
              <Input placeholder="Email" prefix={<SmileTwoTone />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Mật khẩu"
                prefix={<SmileTwoTone />}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Nhập lại mật khẩu"
                prefix={<SmileTwoTone />}
              />
            </Form.Item>

            <Form.Item
              name="birthday"
              rules={[
                {
                  type: "date",
                  message: "The input is not valid birthday",
                },
                {
                  required: true,
                  message: "Please input your birthday",
                },
              ]}
            >
              <Input placeholder="Ngày sinh" prefix={<SmileTwoTone />} />
            </Form.Item>

            <Form.Item name="describe">
              <TextArea
                rows={4}
                placeholder="Can you describe something about yourself?"
              />
            </Form.Item>

            <Form.Item>
              <Select
                className="custom-gender"
                onChange={handleChange}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Giới tính
                  </React.Fragment>
                }
              >
                <Option value="nam">Nam</Option>
                <Option value="nu">Nữ</Option>
                <Option value="khac">Khác</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Select
                className="custom-gender"
                onChange={handleChange}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Trình độ học vấn
                  </React.Fragment>
                }
              >
                {optionLevel.map((o, index) => (
                  <Option value={o.value} key={index}>
                    {o.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Select
                mode="multiple"
                className="custom-gender"
                onChange={handleChange}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Hình thức dạy
                  </React.Fragment>
                }
              >
                {optionMethod.map((o, index) => (
                  <Option value={o.value} key={index}>
                    {o.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Môn dạy
                  </React.Fragment>
                }
                onChange={handleChange}
              >
                {optionSubject.map((o, index) => (
                  <Option value={o.value} key={index}>
                    {o.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Select
                mode="multiple"
                className="custom-gender"
                onChange={handleChange}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Lĩnh vực
                  </React.Fragment>
                }
              >
                {optionMajor.map((o, index) => (
                  <Option value={o.value} key={index}>
                    {o.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Select
                className="custom-gender"
                onChange={handleChange}
                placeholder={
                  <React.Fragment>
                    <SmileTwoTone />
                    &nbsp; Địa chỉ
                  </React.Fragment>
                }
              >
                <Option value="address-1">Thanh Hóa</Option>
                <Option value="address-2">Hà Nội</Option>
                <Option value="address-3">Ninh Bình</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đăng ký
              </Button>
            </Form.Item>
            <div className="register-footer">
              <div className="register-footer-text">Already have account?&nbsp;</div>
              <div className="register-footer-link">
                <Link to="/login">
                  Login
                </Link>
                </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer className="cr-footer" style={{ textAlign: "center" }}>
        Made By Nguyễn Phương Thảo
      </Footer>
    </Fragment>
  );
});

export default Register;
