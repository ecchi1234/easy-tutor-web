import React, { Fragment, useCallback, useMemo, useState } from 'react'
import {
    Form,
    Input,
    Select,
} from 'antd';
import './Login.scss'
import { PageHeader, Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { NameWeb, LoginTitle, LoginBody, LoginFooter } from '../NameWeb/NameWeb';
import learnerApi from "../../api/learnerApi";
import { AuthContext } from "../../App";

const { TextArea } = Input;
const { Option } = Select;
const optionSubject = [{ value: 'Toán' }, { value: 'Tiếng Anh' }, { value: 'Ngữ Văn' }, { value: 'Vật lý' }];

const Login = React.memo(() => {
    const {dispatch} = React.useContext(AuthContext);
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

    const handleChange = useCallback(
        (value) => {
            console.log(`selected ${value}`);
        },
        []);

    const [form] = Form.useForm();

    // const [values, setValues] = useState('');
    const onFinish = useCallback((values) => {
       learnerApi.login(values)
       .then((res) => {
           console.log(res);
       })
       .catch((err) => alert("đăng nhập thất bại!"));
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
                >
                </PageHeader>
            </header>
            <div className='body-login'>

                <div className='form-login'>

                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                        scrollToFirstError
                        className='form'
                    >
                        <LoginTitle />
                        <Form.Item
                            className='padding'
                            name="username"
                            style={{ paddingTop: "50px" }}
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid username',
                                },
                                {
                                    required: true,
                                    message: 'Please input your username',
                                },
                            ]}
                        >
                            <Input placeholder="Tên người dùng" prefix={<SmileTwoTone />} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Mật khẩu" prefix={<SmileTwoTone />} />
                        </Form.Item>

                        <Form.Item></Form.Item>

                        <LoginBody />
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <LoginFooter />
                    </Form>
                </div>
            </div>
        </Fragment>
    )
});

export default Login
