import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Button, PageHeader, Image, Tabs, Form, Input, DatePicker, Col, Row, Select, Checkbox, Upload, message } from 'antd';
import './InfoTutor.scss'
import { NameWeb } from '../NameWeb/NameWeb';
import TextArea from 'antd/lib/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const optionLevel = [{ value: 'Cao Đẳng' }, { value: 'Đại học' }, { value: 'Cao học' }];
const optionTopic = [{ value: 'Hà Nội' }, { value: 'Thanh Hóa' }, { value: 'Nam Định' }, { value: 'Hưng Yên' }];
const optionSubject = [{ value: 'Toán' }, { value: 'Tiếng Anh' }, { value: 'Ngữ Văn' }, { value: 'Vật lý' }];

const props = {
    name: 'file',
    action: 'http://localhost:9876/v1/easy-tutor/storage/',
    headers: {
      token: localStorage.getItem("Token"),
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        console.log(localStorage.getItem("Token"));
      }
    },
  };


function InfoTutor() {
    const [fields, setFields] = useState([{ value: '' }]);

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ value: '' });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    return (
        <div>
            <Form>
                <Form.Item
                    name="describe"
                >
                    <div className='label-info-general'>Mô tả bản thân</div>
                    <TextArea rows={4} placeholder='Can you describe something about yourself?' />
                </Form.Item>

                <Form.Item>
                    <div className='label-info-general'>Trình độ học vấn</div>
                    <Select defaultValue='Đại học' >
                        {optionLevel.map((o, index) => (
                            <Option value={o.value} key={index}>{o.value}</Option>
                        ))}

                    </Select>
                </Form.Item>

                <Row>
                    <Col span={12}>
                        <Form.Item style={{ width: '370px' }}>
                            <div className='label-info-general'>Môn học</div>
                            <Select defaultValue='Toán' >
                                {optionSubject.map((o, index) => (
                                    <Option value={o.value} key={index}>{o.value}</Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item >
                            <div className='label-info-general'>Chủ đề</div>
                            <Select defaultValue='Toán' >
                                {optionTopic.map((o, index) => (
                                    <Option value={o.value} key={index}>{o.value}</Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <div className='label-info-general'>Thành tích</div>

                    <div>

                        {fields.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                                    <Input className="input-archive"
                                        type="text"
                                        placeholder="Điền giải thưởng/Thành tích"
                                        value={field.value || ""}
                                        onChange={e => handleChange(idx, e)}
                                        style={{ marginRight: '10px', marginBottom: '10px',marginTop: '10px' }}
                                    />
                                    <Button onClick={() => handleRemove(idx)} style={{ marginRight: '10px' }}>
                                        X
                                    </Button>
                                    <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                </div>
                            );
                        })}
                    </div>
                    <Button value="large" onClick={() => handleAdd()}>+</Button>
                </Form.Item>

                <Form.Item >
                    <Button type='primary'>Cập nhật thông tin</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default InfoTutor
