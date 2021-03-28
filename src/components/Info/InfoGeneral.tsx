import React from 'react'
import { Layout, Menu, Breadcrumb, Button, PageHeader, Image, Tabs, Form, Input, DatePicker, Col, Row, Select, Checkbox } from 'antd';
import './InfoGeneral.scss'
import { NameWeb } from '../NameWeb/NameWeb';


const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const optionCity = [{ value: 'Hà Nội' }, { value: 'Thanh Hóa' }, { value: 'Nam Định' }, { value: 'Hưng Yên' }];


function InfoGeneral() {
    return (
        <div>
            <Form>
                <Form.Item
                    name="displayname"

                    rules={[
                        {
                            type: 'string',
                        },
                    ]}

                >
                    <div className='label-info-general'>Tên hiển thị</div>
                    <Input placeholder="Tên hiển thị" />
                </Form.Item>

                <Form.Item
                    name="username"

                    rules={[
                        {
                            type: 'string',
                        },
                    ]}

                >
                    <div className='label-info-general'>Tên người dùng</div>
                    <Input placeholder="Tên người dùng" />
                </Form.Item>

                <Form.Item
                    name="phone"

                    rules={[
                        {
                            type: 'string',
                        },
                    ]}

                >
                    <div className='label-info-general'>Số điện thoại</div>
                    <Input placeholder="Số điện thoại" />
                </Form.Item>

                <Form.Item
                    name="email"

                    rules={[
                        {
                            type: 'string',
                        },
                    ]}

                >
                    <div className='label-info-general'>Email</div>
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="birthday"

                    rules={[
                        {
                            type: 'string',
                        },
                    ]}

                >
                    <div className='label-info-general'>Ngày sinh</div>
                    <DatePicker placeholder="Ngày sinh" />
                </Form.Item>

                <Row>
                    <Col span={12}>
                        <Form.Item style={{ width: '370px' }}>
                            <div className='label-info-general'>Tỉnh/Thành phố</div>
                            <Select defaultValue='Hà Nội' >
                                {optionCity.map((c, index) => (
                                    <Option value={c.value} key={index}>{c.value}</Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="displayname"

                            rules={[
                                {
                                    type: 'string',
                                },
                            ]}
                        >
                            <div className='label-info-general'>Địa chỉ cụ thể</div>
                            <Input placeholder="104, đường Phạm Văn Đồng, Cầu Giấy, hà Nội" />
                        </Form.Item>
                    </Col>
                </Row>
                <Checkbox.Group style={{ width: '100%' }}>
                    <Form.Item>
                        <div className='label-info-general'>Giới tính</div>
                        <Row>
                            <Col span={4}>
                                <Checkbox value="male">Nam</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="female">Nữ</Checkbox>
                            </Col>
                        </Row>
                    </Form.Item>

                </Checkbox.Group>
                <Form.Item >
                    <Button type='primary'>Cập nhật thông tin</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default InfoGeneral
