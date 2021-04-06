import React, { useState } from "react";
import {
  Table,
  Radio,
  Divider,
  Button,
  Col,
  Row,
  Select,
  Input,
  Card,
  Layout,
  PageHeader,
  Form,
} from "antd";
import { NameWeb } from "../NameWeb/NameWeb";
import TimeTable from "../Info/TimeTable";
import "./CreateRequire.scss";

const { Content, Footer, Sider } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const title = () => (
  <div className="create-require-container-title">Mô tả yêu cầu tìm gia sư</div>
);
const crSubject = [
  { value: "Toán" },
  { value: "Tiếng Anh" },
  { value: "Ngữ Văn" },
  { value: "Vật lý" },
];
const crAddress = [
  { value: "Thanh Hóa" },
  { value: "Hà Nội" },
  { value: "Hưng Yến" },
];

const timeTable = [];
timeTable[0] = [false, false, false, false, false, false, false];
timeTable[1] = [false, false, false, false, false, false, false];
timeTable[2] = [false, false, false, false, false, false, false];

const row_1 = [1, 2, 3, 4, 5, 6, 7];
const row_2 = [8, 9, 10, 11, 12, 13, 14];
const row_3 = [15, 16, 17, 18, 19, 20, 21];

function CreateRequire() {
  const [time, setTime] = useState(timeTable);
  const onChange = (idx) => {
    const copyArr = [...time];
    if (idx <= 7) {
      copyArr[0][idx - 1] = !time[0][idx - 1];
    } else if (idx <= 14) {
      copyArr[1][idx - 8] = !time[1][idx - 8];
    } else copyArr[2][idx - 15] = !time[2][idx - 15];
    setTime(copyArr);
    console.log(time);
  };
  return (
    <div>
      <Layout>
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
            style={{boxShadow:'0px 5px 5px #e5e5e5'}}
          ></PageHeader>
        </header>
        <Content
          className="ant-layout-content-2"
          style={{ padding: "0 115px" }}
        >
          <Layout
            className="site-layout-background-2"
            style={{
              marginTop: "73px",
              height: "100vh",
            }}
          >
            <div className="create-require-container">
              <Card title={title()}>
                <Form>
                  <Form.Item
                    name="cr-summary"
                    rules={[{ required: true, message: "Hãy điền mô tả!" }]}
                  >
                    <div className="label-info-general">
                      Tóm tắt yêu cầu tìm gia sư (1 câu, tối đa 100 ký tự) *
                    </div>
                    <Input placeholder="Ví dụ: Tìm gia sư Tiếng Anh lớp 7 tại Cầu Giấy" />
                  </Form.Item>

                  <Form.Item
                    name="cr-subject"
                    rules={[
                      {
                        required: true,
                        message: "Hãy chọn ít nhất 1 môn học!",
                      },
                    ]}
                    style={{ paddingBottom: "3%" }}
                  >
                    <div className="label-info-general">Môn học *</div>
                    <Select
                      placeholder="Lựa chọn môn học"
                      style={{ width: "50%" }}
                      mode="multiple"
                    >
                      {crSubject.map((o, index) => (
                        <Option value={o.value} key={index}>
                          {o.value}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Divider style={{ paddingBottom: "3%" }}></Divider>
                  <Row>
                    <Col flex="50%">
                      <div>
                        <div className="label-info-general">
                          Học phí dự kiến (VND/buổi) *
                        </div>
                        <Input placeholder="Ví dụ: 250000" />
                      </div>
                      <div style={{ paddingTop: "5%" }}>
                        <div className="label-info-general">
                          Điện thoại liên hệ *
                        </div>
                        <Input placeholder="Ví dụ: 012345678" />
                      </div>
                      <div style={{ paddingTop: "5%" }}>
                        <div className="label-info-general">Địa điểm học *</div>
                        <Select defaultValue="Hà Nội" style={{ width: "100%" }}>
                          {crAddress.map((o, index) => (
                            <Option value={o.value} key={index}>
                              {o.value}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </Col>
                    <Col flex="50%" style={{ paddingLeft: "5%" }}>
                      <div>
                        <div className="label-info-general">
                          Số giờ học 1 buổi *
                        </div>

                        <Radio.Group
                          name="radiogroup"
                          defaultValue={1}
                          className="cr-cb-gr"
                        >
                          <Radio value={1}>1 h</Radio>
                          <Radio value={2}>1.5 h</Radio>
                          <Radio value={3}>2 h</Radio>
                          <Radio value={4}>2.5 h</Radio>
                        </Radio.Group>
                      </div>
                      <div style={{ paddingTop: "8%" }}>
                        <div className="label-info-general">
                          Hình thức học *
                        </div>

                        <Radio.Group
                          name="radiogroup"
                          defaultValue="cr-on"
                          className="cr-cb-gr"
                        >
                          <Radio value="cr-onl">Online</Radio>
                          <Radio value="cr-off">Offline</Radio>
                        </Radio.Group>
                      </div>
                      <div style={{ paddingTop: "6.5%", paddingBottom: "6%" }}>
                        <div className="label-info-general">
                          Điạ chỉ cụ thể *
                        </div>
                        <Input placeholder="Ví dụ: 144 Xuân Thủy Cầu Giấy Hà Nội" />
                      </div>
                    </Col>
                  </Row>
                </Form>
                <Divider style={{ paddingBottom: "3%" }}></Divider>
                <Row>
                  <div className="cr-text-1">Lịch học theo yêu cầu</div>
                  <div style={{ width: "70%" }}>
                    <Row justify="center" className="row-1">
                      <Col span={3}>Thứ 2</Col>
                      <Col span={3}>Thứ 3</Col>
                      <Col span={3}>Thứ 4</Col>
                      <Col span={3}>Thứ 5</Col>
                      <Col span={3}>Thứ 6</Col>
                      <Col flex="194px">Thứ 7</Col>
                      <Col span={3} style={{ marginLeft: "-100px" }}>
                        Chủ Nhật
                      </Col>
                    </Row>
                    <Row justify="center" className="row-2">
                      {row_1.map((o) => (
                        <Col span={3}>
                          <input
                            type="checkbox"
                            className={`cr-btn-${o}`}
                            onChange={() => onChange(o)}
                            name={`cr-btn-${o}`}
                            id={`cr-btn-${o}`}
                          />
                          <label htmlFor={`cr-btn-${o}`} className={`cr-btn-label`}>
                            SÁNG
                          </label>
                        </Col>
                      ))}
                    </Row>

                    <Row justify="center" className="row-2">
                      {row_2.map((o, index) => (
                        <Col span={3}>
                          <input
                            type="checkbox"
                            className={`cr-btn-${o}`}
                            onChange={() => onChange(o)}
                            name={`cr-btn-${o}`}
                            id={`cr-btn-${o}`}
                          />
                          <label htmlFor={`cr-btn-${o}`} className={`cr-btn-label`}>
                            CHIỀU
                          </label>
                        </Col>
                      ))}
                    </Row>

                    <Row justify="center" className="row-2">
                      {row_3.map((o, index) => (
                        <Col span={3}>
                          <input
                            type="checkbox"
                            className={`cr-btn-${o}`}
                            onChange={() => onChange(o)}
                            name={`cr-btn-${o}`}
                            id={`cr-btn-${o}`}
                          />
                          <label htmlFor={`cr-btn-${o}`} className={`cr-btn-label`}>
                            TỐI
                          </label>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Row>

                <Divider style={{ paddingBottom: "3%" }}></Divider>
                <Row>
                  <div className="label-info-general">
                    Mô tả nội dung muốn học
                  </div>
                  <TextArea
                    rows={4}
                    placeholder="Ví dụ: Cần chú trọng dạy phần phát âm và viết"
                  />
                </Row>
                <Divider
                  style={{ paddingBottom: "2%", marginTop: "5%" }}
                ></Divider>
                <div className="cr-text-2">Thông tin thêm</div>
                <Row>
                  <Col flex="50%">
                    <div className="label-info-general">
                      Số buổi học trong tuần
                    </div>

                    <Radio.Group
                      name="radiogroup"
                      defaultValue="1b"
                      className="cr-cb-gr"
                    >
                      <Radio value="1b">1 buổi</Radio>
                      <Radio value="2b">2 buổi</Radio>
                      <Radio value="3b">3 buổi</Radio>
                      <Radio value="4b">Từ 4 buổi</Radio>
                    </Radio.Group>
                    <div style={{ paddingTop: "5%",paddingBottom: "5%" }}>
                      <div className="label-info-general">Giới tính gia sư</div>
                      <Select defaultValue="cr-male" style={{ width: "100%" }} mode="multiple">
                        <Option value='cr-male'>
                          Nam
                        </Option>
                        <Option value='cr-female'>
                          Nữ
                        </Option>
                      </Select>
                    </div>
                    
                  </Col>
                  <Col flex="50%" style={{ paddingLeft: "5%" }}>
                  <div className="label-info-general">
                      Số lượng học viên
                    </div>
                    <Input placeholder="Ví dụ: 2" />
                  </Col>
                </Row>
              </Card>
            </div>
          </Layout>
        </Content>
        <Footer className="cr-footer" style={{ textAlign: "center" }}>
          Made By Nguyễn Phương Thảo
        </Footer>
      </Layout>
    </div>
  );
}

export default CreateRequire;
