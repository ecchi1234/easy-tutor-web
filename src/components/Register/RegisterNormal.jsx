import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Form, Input, Select } from "antd";
import "./RegisterNormal.scss";
import { PageHeader, Button } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import {
  NameWeb,
  RegisterTitleNormal,
  RegisterFooter,
} from "../NameWeb/NameWeb";

import {Link} from "react-router-dom";

// using api
import learnerApi from "../../api/learnerApi";
import {useHistory} from "react-router-dom"; 

const { TextArea } = Input;
const { Option } = Select;
const optionSubject = [
  { value: "Toán" },
  { value: "Tiếng Anh" },
  { value: "Ngữ Văn" },
  { value: "Vật lý" },
];

const RegisterNormal = React.memo(() => {
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

  // const handleChange = useCallback((value) => {
  //   console.log(`selected ${value}`);
  // }, []);

  const [form] = Form.useForm();

  // const [values, setValues] = useState('');
  const onFinish = useCallback((values) => {
    // console.log("Received values of form: ", values);

    const newValues = {
      display_name: values.display_name,
      email: values.email,
      password: values.password,
      phone_number: values.phone_number,
      username: values.username,
    };
    learnerApi.register(newValues).then((res) => {
      alert("đăng ký thành công!");
    }).catch((err) => {
      alert("đăng ký không thành công!");
    });
  }, []);

  // const [userInformation, setUserInformation] = React.useState({});


  const handleChange = React.useCallback(
    (e) => {
      
    },
    [],
  )

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
      <div className="body-register-normal">
        <div className="form-register-normal">
          <RegisterTitleNormal />
          <Form
            form={form}
            name="register-normal"
            onFinish={onFinish}
            scrollToFirstError
            className="form"
          >
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
              name="display_name"
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
              name="phone_number"
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
              <div className="register-footer-text">Already have account?</div>
              <Link to="/login">
              <div className="register-footer-link">&nbsp;Login</div>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
});

export default RegisterNormal;
