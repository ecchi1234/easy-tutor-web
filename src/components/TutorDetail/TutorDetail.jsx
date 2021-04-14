import React, { useReducer } from "react";
import {
  Layout,
  Menu,
  Card,
  Button,
  PageHeader,
  Image,
  Tabs,
  Form,
  Input,
  DatePicker,
  Col,
  Row,
  Select,
  Checkbox,
} from "antd";
import {
  BankTwoTone,
  ProfileTwoTone,
  SettingTwoTone,
  StarTwoTone,
} from "@ant-design/icons";
import "./TutorDetail.scss";
import { NameWeb } from "../NameWeb/NameWeb";

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const change = () => {
  console.log("OK");
};

const title1 = () => <div className="td-title">Thông tin gia sư</div>;
const title2 = () => <div className="td-title">Lịch dạy gia sư</div>;
const title3 = () => <div className="td-title">Đánh giá gia sư</div>;

const row_1 = [1, 2, 3, 4, 5, 6, 7];
const row_2 = [8, 9, 10, 11, 12, 13, 14];
const row_3 = [15, 16, 17, 18, 19, 20, 21];

function TutorDetail() {
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
          className="ant-layout-content-3"
          style={{ padding: "0 115px" }}
        >
          <Layout
            className="site-layout-background-3"
            style={{
              marginTop: "73px",
              height: "100vh",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Sider className="site-layout-background" width={300}>
              <Menu
                mode="inline"
                style={{ height: "100vh", boxShadow: "5px -5px 4px #e5e5e5" }}
                defaultSelectedKeys={["1"]}
              >
                <div className="image-tutor">
                  <Image
                    className="img"
                    width="200px"
                    height="auto"
                    src="https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG"
                  />
                </div>
                <div className="fullname-tutor">Nguyễn Phương Thảo</div>
                <Row className="td-menu-row">
                  <BankTwoTone style={{ fontSize: "20px" }} />
                  <div className="td-menu-text">Hà Nội</div>
                </Row>
                <Row className="td-menu-row">
                  <ProfileTwoTone style={{ fontSize: "20px" }} />
                  <div className="td-menu-text">Toán, Văn, Anh</div>
                </Row>
                <Row className="td-menu-row">
                  <SettingTwoTone style={{ fontSize: "20px" }} />
                  <div className="td-menu-text">Offline, Online</div>
                </Row>
                <Row className="td-menu-row">
                  <div className="td-star">
                    <div className="td-star-rate">4.9</div>
                  </div>
                  <div className="td-menu-text" style={{ color: "#1890ff" }}>
                    1 đánh giá
                  </div>
                </Row>

                <Row className="td-menu-row" style={{ paddingLeft: "35%" }}>
                  <Button type="primary">Mời dạy</Button>
                </Row>
              </Menu>
            </Sider>

            <Content
              className="content-tutor-general-3"
              style={{
                padding: "0 55px",
                minHeight: 280,
                height: "100vh",
                overflow: "auto",
                backgroundColor: "f5f5f5",
              }}
            >
              <Card
                title={title1()}
                style={{
                  marginBottom: "3%",
                  boxShadow: "5px -5px 4px #e5e5e5",
                }}
              >
                <div className="td-card-content">
                  <Row className="td-card-content-row">
                    <div className="label-info-general">
                      Giới thiệu chung và kinh nghiệm gia sư, giảng dạy
                    </div>
                    <div className="td-card-content-row-detail">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </div>
                  </Row>
                  <Row className="td-card-content-row">
                    <div className="label-info-general">
                      Chủ để gia sư đang dạy
                    </div>
                    <div>
                      <Button style={{ marginRight: "2%" }}>
                        Ôn thi Đại học
                      </Button>
                      <Button style={{ marginRight: "2%" }}>
                        Ôn thi Cấp 3
                      </Button>
                    </div>
                  </Row>
                  <Row className="td-card-content-row">
                    <div className="label-info-general">Gia sư đang là</div>
                    <div>
                      <Button>Sinh viên</Button>
                    </div>
                  </Row>
                </div>
              </Card>
              <Card
                title={title2()}
                style={{
                  marginBottom: "3%",
                  boxShadow: "5px -5px 4px #e5e5e5",
                }}
              >
                <div className="td-card-content">
                  <div>
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
                    <div className="td-table-container">
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
                  </div>
                </div>
              </Card>
              <Card
                style={{
                  marginBottom: "3%",
                  boxShadow: "5px -5px 4px #e5e5e5",
                }}
                title={title3()}
                extra={<Button type="primary">Viết đánh giá</Button>}
              >
                <div className="td-card-content" style={{ display: "flex" }}>
                  <Row className="td-card-content-detail">
                    <Col flex="12%">
                      <div className="td-img-container">
                        <img
                          className="td-img"
                          src="https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG"
                          alt="no-img"
                        />
                      </div>
                    </Col>
                    <Col flex="60%" style={{ textAlign: "justify" }}>
                      <div className="label-info-general">
                        Nguyễn Phương Thảo
                      </div>
                      <div style={{ color: "#8c8c8c" }}>
                        Nunc mollis mattis eros. Praesent ex lorem, auctor sit
                        amet faucibus id, feugiat ut felis. Quisque sit amet
                        tortor libero. Nam quis felis turpis. Donec sed pharetra
                        felis, ut dignissim nulla. Fusce ultricies ultricies
                        lorem. Nulla a vehicula tortor, non iaculis ligula.
                        Morbi venenatis lobortis lacus, eu accumsan metus
                        pellentesque a. Fusce eget augue convallis, tincidunt
                        lorem non, dignissim lectus.
                      </div>
                      <div style={{ paddingTop: "1%" }}>
                        <i>2 phút trước</i>
                      </div>
                    </Col>
                    <Col flex="auto">
                      <div
                        className="td-star-widget"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className=" star star-1">
                          <StarTwoTone />
                        </div>
                        <div className="star star-2">
                          <StarTwoTone />
                        </div>
                        <div className="star star-3">
                          <StarTwoTone />
                        </div>
                        <div className="star star-4">
                          <StarTwoTone />
                        </div>
                        <div className="star star-5">
                          <StarTwoTone />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Content>
          </Layout>
        </Content>
        <Footer className="cr-footer" style={{ textAlign: "center" }}>
          Made By Nguyễn Phương Thảo
        </Footer>
      </Layout>
    </div>
  );
}

export default TutorDetail;
