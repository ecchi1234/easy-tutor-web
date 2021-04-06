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
import "./RequireDetail.scss";
import { SmileTwoTone, HourglassTwoTone } from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const title = () => (
  <div className="rd-container-title">
    <div className="rd-container-title-row1">
      Cần thuê người dạy Tiếng Anh tại Cầu Giấy
    </div>
    <div className="rd-container-title-row-2" style={{ display: "flex" }}>
      <Col flex="20%" style={{ display: "flex" }}>
        <Col flex="10%">
          <SmileTwoTone />
        </Col>
        <Col
          style={{ color: "#1890ff", fontSize: "14px", alignSelf: "center" }}
        >
          Nguyễn Phương Thảo
        </Col>
      </Col>
      <Col flex="20%" style={{ display: "flex" }}>
        <Col flex="10%">
          <HourglassTwoTone />
        </Col>
        <Col
          style={{ color: "#1890ff", fontSize: "14px", alignSelf: "center" }}
        >
          02.04.2021 - 09:55
        </Col>
      </Col>
    </div>
  </div>
);

const listClass = [
  {
    id: 1,
    title: "Cần thuê người dạy Tiếng Anh tại Cầu Giấy",
    status: "ĐANG TÌM GIÁO VIÊN",
    subject: ["Tiếng Anh", "Toán"],
    method: "Offline",
    address: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
    type_gender: ["Nam", "Nữ"],
    number_student: 1,
    period: "Tuần 2 buổi (2h/buổi)",
    salary: 160000,
  },
];

const title2 = () => (
  <div style={{ fontSize: "20px", fontWeight: "500" }}>
    Chi tiết nội dung cần học
  </div>
);

const timeTable = [];
timeTable[0] = [false, false, false, false, false, false, false];
timeTable[1] = [false, false, false, false, false, false, false];
timeTable[2] = [false, false, false, false, false, false, false];

const row_1 = [1, 2, 3, 4, 5, 6, 7];
const row_2 = [8, 9, 10, 11, 12, 13, 14];
const row_3 = [15, 16, 17, 18, 19, 20, 21];

function RequireDetail() {
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
            className="site-layout-background-3"
            style={{
              marginTop: "73px",
              height: "100vh",
            }}
          >
            <div className="create-require-container">
              <Card
                title={title()}
                extra={<Button type="primary">Đề nghị dạy</Button>}
              >
                {listClass.map((o, index) => (
                  <div className="old-class-content">
                    <div className="rd-col">
                      <div className="rd-row">
                        Trạng thái:&nbsp;
                        <div style={{ color: "#FAAD14" }}>{o.status}</div>
                      </div>
                      <div className="rd-row">
                        Môn học:&nbsp;
                        <div style={{ color: "#1890FF" }}>
                          {o.subject.map((tg) => {
                            {
                              if (tg != o.subject[o.subject.length - 1]) {
                                return <>{tg},&nbsp;</>;
                              } else return <>{tg}</>;
                            }
                          })}
                        </div>
                      </div>
                      <div className="rd-row">
                        Hình thức học:&nbsp;
                        <div style={{ color: "#FAAD14" }}>{o.method}</div>
                      </div>
                      <div className="rd-row">
                        Địa chỉ:&nbsp;
                        <div style={{ color: "#1890FF" }}>{o.address}</div>
                      </div>
                    </div>
                    <div className="rd-col">
                      <div className="rd-row">
                        Tìm gia sư: &nbsp;
                        <div style={{ color: "#1890FF" }}>
                          {o.type_gender.map((tg) => {
                            {
                              if (
                                tg != o.type_gender[o.type_gender.length - 1]
                              ) {
                                return <>{tg},&nbsp;</>;
                              } else return <>{tg}</>;
                            }
                          })}
                        </div>
                      </div>
                      <div className="rd-row">
                        Số học viên:&nbsp;
                        <div style={{ color: "#FAAD14" }}>
                          {o.number_student}
                        </div>
                      </div>
                      <div className="rd-row">
                        Thời lượng:&nbsp;
                        <div style={{ color: "#1890FF" }}>{o.period}</div>
                      </div>
                      <div className="rd-row" style={{ color: "#FAAD14" }}>
                        Học phí 1 buổi:&nbsp;
                        {o.salary.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>

                    <div className="rd-col">
                      <div className="rd-row">
                        Phí nhận lớp:&nbsp;
                        <div style={{ color: "#1890FF" }}>
                          {(o.salary * 2).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Card>

              <Card title={title2()} style={{ marginTop: "2%" }}>
                <div className="rd-card-text-1">
                  Donec pharetra scelerisque euismod. Donec venenatis
                  consectetur lorem, ut consequat purus tincidunt nec.
                  Suspendisse neque lacus, auctor at nibh a, dapibus pulvinar
                  ante. Nunc lobortis nec turpis molestie maximus. Integer
                  porttitor vulputate odio. Quisque tortor tellus, ullamcorper
                  eu bibendum eget, elementum euismod ligula. Aenean luctus
                  egestas quam. Curabitur eu urna dolor.
                </div>
                <div style={{ fontSize: "20px", fontWeight: "500" }}>
                  Lịch học dự kiến (Có thể thỏa thuận)
                </div>

                <div className="rd-table-container">
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
                          className={`btn-${o}`}
                          //   onChange={()=> onChange(o)}
                          name={`btn-${o}`}
                          id={`btn-${o}`}
                        />
                        <label htmlFor={`btn-${o}`} className={`btn-label`}>
                          SÁNG
                        </label>
                      </Col>
                    ))}
                  </Row>

                  <Row justify="center" className="row-2">
                    {row_2.map((o) => (
                      <Col span={3}>
                        <input
                          type="checkbox"
                          className={`btn-${o}`}
                          //   onChange={()=> onChange(o)}
                          name={`btn-${o}`}
                          id={`btn-${o}`}
                        />
                        <label htmlFor={`btn-${o}`} className={`btn-label`}>
                          CHIỀU
                        </label>
                      </Col>
                    ))}
                  </Row>

                  <Row justify="center" className="row-2">
                    {row_3.map((o) => (
                      <Col span={3}>
                        <input
                          type="checkbox"
                          className={`btn-${o}`}
                          //   onChange={()=> onChange(o)}
                          name={`btn-${o}`}
                          id={`btn-${o}`}
                        />
                        <label htmlFor={`btn-${o}`} className={`btn-label`}>
                          TỐI
                        </label>
                      </Col>
                    ))}
                  </Row>
                </div>
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

export default RequireDetail;
