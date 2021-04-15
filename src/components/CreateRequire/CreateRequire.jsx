import React, { useState } from "react";
import "../../data/tinh_tp";
import { getCity } from "../../helper/getCity";
// import api
import { requestApi } from "../../api/requestApi";

import subjectEnum from "../../data/subject";
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
  message,
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

const crSubject = subjectEnum.data.map((item) => {
  return item;
});

const crAddress = getCity();

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
  const [postInformation, setPostInformation] = React.useState({
    description: "",
    exact_location: "",
    fri_afternoon: false,
    fri_morning: false,
    fri_night: true,
    gender: "",
    location: 1,
    method: "online",
    monday_afternoon: false,
    monday_morning: false,
    monday_night: true,
    number_of_student: 0,
    phone_number: "",
    price: 0,
    sat_afternoon: false,
    sat_morning: false,
    sat_night: true,
    subject: "",
    sun_afternoon: false,
    sun_morning: false,
    sun_night: true,
    thu_afternoon: false,
    thu_morning: false,
    thu_night: true,
    time: 0,
    times_per_week: 1,
    title: "",
    tue_afternoon: false,
    tue_morning: false,
    tue_night: true,
    wed_afternoon: false,
    wed_morning: false,
    wed_night: true,
  });

  const handleSubmitForm = React.useCallback(() => {
    const createdAt = parseInt((new Date().getTime() / 1000).toFixed(0));
    postInformation.time = createdAt;

    requestApi
      .createPost(postInformation)
      .then((res) => {
        console.log("created " + res.data);
        message.success("Tạo yêu cầu thành công!");
      })
      .catch((err) => {
        console.log("smt err");
        message.error("Tạo yêu cầu thất bại!");
      });
  }, [postInformation]);

  const handleChangeForm = React.useCallback(
    (e) => {
      const createdAt = parseInt((new Date().getTime() / 1000).toFixed(0));
      console.log(createdAt);
      let newValue = e.target.value;
      if (e.target.name === "price" || e.target.name === "number_of_student") {
        newValue = parseInt(e.target.value);
      }
      setPostInformation({
        ...postInformation,
        [e.target.name]: newValue,
      });

      console.log(postInformation);
    },
    [postInformation]
  );

  const handleChangeSelectForm = React.useCallback(
    (value, fieldName, type) => {
      if (type === "multi") {
        if (fieldName === "gender") {
          setPostInformation({
            ...postInformation,
            [fieldName]: "all",
          });
        } else {
          setPostInformation({
            ...postInformation,
            [fieldName]: value.join(";"),
          });
        }
      } else {
        setPostInformation({
          ...postInformation,
          [fieldName]: value,
        });
      }
      console.log(postInformation);
    },
    [postInformation]
  );

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
            style={{ boxShadow: "0px 5px 5px #e5e5e5" }}
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
              // height: "100vh",
            }}
          >
            <div className="create-require-container">
              <Card title={title()}>
                <Form>
                  <Form.Item
                    rules={[{ required: true, message: "Hãy điền mô tả!" }]}
                  >
                    <div className="label-info-general">
                      Tóm tắt yêu cầu tìm gia sư (1 câu, tối đa 100 ký tự) *
                    </div>
                    <Input
                      name="title"
                      placeholder="Ví dụ: Tìm gia sư Tiếng Anh lớp 7 tại Cầu Giấy"
                      onChange={handleChangeForm}
                    />
                  </Form.Item>

                  <Form.Item
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
                      name="subject"
                      onChange={(value) =>
                        handleChangeSelectForm(value, "subject", "multi")
                      }
                    >
                      {crSubject.map((o, index) => (
                        <Option value={o.value} key={index}>
                          {o.title}
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
                        <Input
                          name="price"
                          placeholder="Ví dụ: 250000"
                          onChange={handleChangeForm}
                        />
                      </div>
                      <div style={{ paddingTop: "5%" }}>
                        <div className="label-info-general">
                          Điện thoại liên hệ *
                        </div>
                        <Input
                          name="phone_number"
                          placeholder="Ví dụ: 012345678"
                          onChange={handleChangeForm}
                        />
                      </div>
                      <div style={{ paddingTop: "5%" }}>
                        <div className="label-info-general">Địa điểm học *</div>
                        <Select
                          name="location"
                          defaultValue="Hà Nội"
                          style={{ width: "100%" }}
                          onChange={(value) =>
                            handleChangeSelectForm(value, "location", "single")
                          }
                        >
                          {crAddress.map((o, index) => (
                            <Option value={parseInt(o.code)} key={index}>
                              {o.name}
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
                          name="time_per_day"
                          defaultValue={1}
                          className="cr-cb-gr"
                        >
                          <Radio value={1}>1 h</Radio>
                          <Radio value={1.5}>1.5 h</Radio>
                          <Radio value={3}>2 h</Radio>
                          <Radio value={4}>2.5 h</Radio>
                        </Radio.Group>
                      </div>
                      <div style={{ paddingTop: "8%" }}>
                        <div className="label-info-general">
                          Hình thức học *
                        </div>

                        <Radio.Group
                          name="method"
                          defaultValue="online"
                          className="cr-cb-gr"
                          onChange={handleChangeForm}
                        >
                          <Radio value="online">Online</Radio>
                          <Radio value="offline">Offline</Radio>
                        </Radio.Group>
                      </div>
                      <div style={{ paddingTop: "6.5%", paddingBottom: "6%" }}>
                        <div className="label-info-general">
                          Điạ chỉ cụ thể *
                        </div>
                        <Input
                          name="exact_location"
                          placeholder="Ví dụ: 144 Xuân Thủy Cầu Giấy Hà Nội"
                          onChange={handleChangeForm}
                        />
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
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor={`cr-btn-${o}`}
                            className={`cr-btn-label`}
                          >
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
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor={`cr-btn-${o}`}
                            className={`cr-btn-label`}
                          >
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
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor={`cr-btn-${o}`}
                            className={`cr-btn-label`}
                          >
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
                    name="description"
                    rows={4}
                    placeholder="Ví dụ: Cần chú trọng dạy phần phát âm và viết"
                    onChange={handleChangeForm}
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
                      name="times_per_week"
                      defaultValue={1}
                      className="cr-cb-gr"
                      onChange={handleChangeForm}
                    >
                      <Radio value={1}>1 buổi</Radio>
                      <Radio value={2}>2 buổi</Radio>
                      <Radio value={3}>3 buổi</Radio>
                      <Radio value={4}>Từ 4 buổi</Radio>
                    </Radio.Group>
                    <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                      <div className="label-info-general">Giới tính gia sư</div>
                      <Select
                        style={{ width: "100%" }}
                        mode="multiple"
                        onChange={(value) =>
                          handleChangeSelectForm(value, "gender", "multi")
                        }
                      >
                        <Option value="male">Nam</Option>
                        <Option value="female">Nữ</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col flex="50%" style={{ paddingLeft: "5%" }}>
                    <div className="label-info-general">Số lượng học viên</div>
                    <Input
                      name="number_of_student"
                      placeholder="Ví dụ: 2"
                      onChange={handleChangeForm}
                    />
                  </Col>
                  <button
                    style={{
                      backgroundColor: "#1890ff",
                      color: "#fff",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleSubmitForm}
                  >
                    submit
                  </button>
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
