import React from "react";
import {
  Layout,
  Menu,
  Tag,
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
  Card,
  Pagination,
} from "antd";
import { ProfileTwoTone, BellTwoTone, HomeTwoTone } from "@ant-design/icons";
import "./FindingTutor.scss";
import { FindTutorTitle, NameWeb } from "../NameWeb/NameWeb";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const result = 1246;
const sortBy = [
  { value: "Mới nhất" },
  { value: "Phổ biến nhất" },
  { value: "Gần nhất" },
];
const filterAddress = [
  { value: "Thanh Hóa" },
  { value: "Hà Nội" },
  { value: "Hưng Yến" },
];
const filterSubject = [
  { value: "Toán" },
  { value: "Tiếng Anh" },
  { value: "Ngữ Văn" },
  { value: "Vật lý" },
];
const filterLevel = [
  { value: "Cao Đẳng" },
  { value: "Đại Học" },
  { value: "Cao Học" },
];

function FindingTutor() {
  const data = [
    {
      id: 1,
      title: "Nguyễn Phương Thảo",
      date: "22/12/2021",
      tags: ["Hà Nội", "Offline", "Tiếng Anh"],
      describe:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      img:
        "https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG",
    },
    {
      id: 2,
      title: "Nguyễn Phương Thảo",
      date: "22/12/2021",
      tags: ["Hà Nội", "Offline", "Tiếng Anh"],
      describe:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      img:
        "https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG",
    },
    {
      id: 3,
      title: "Nguyễn Phương Thảo",
      date: "22/12/2021",
      tags: ["Hà Nội", "Offline", "Tiếng Anh"],
      describe:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      img:
        "https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG",
    },
  ];
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
          ></PageHeader>
          <div className="header-content-bg">
            <div className="header-content">
              <div className="header-content-text">
                <FindTutorTitle />
              </div>
              <div className="header-content-btn">
                <Button type="primary">View offers</Button>
              </div>
            </div>
          </div>
          <div className="header-filter-bg">
            <div className="header-filter">
              <div className="header-filter-result-text">
                Kết quả ({result}){" "}
              </div>
              <div className="header-filter-bar">
                <Input
                  placeholder="Tìm gia sư theo tên"
                  prefix={<SearchOutlined />}
                  style={{ width: "300%" }}
                />
              </div>
              <div className="header-filter-sort-by">
                <div className="header-filter-sort-by-text">Sort by: </div>
                <div className="header-filter-sort-by-select">
                  <Select defaultValue="Mới nhất" style={{ width: 120 }}>
                    {sortBy.map((o, index) => (
                      <Option value={o.value} key={index}>
                        {o.value}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Content style={{ padding: "0 115px" }}>
          <Layout
            className="site-layout-background"
            style={{
              marginTop: "73px",
              height: "100vh",
              backgroundColor: "#F5F5F5",
            }}
          >
            <Sider
              className="site-layout-background"
              width={300}
              style={{ backgroundColor: "#fff", height: "100vh" }}
            >
              <div className="header-sider">
                <div className="header-sider-text">Filter by:</div>
                <div className="header-sider-reset-btn">
                  <Button type="primary">Clear filter</Button>
                </div>
              </div>

              <div className="select-filter">
                <div className="select-filter-address">
                  <div className="select-filter-text">Địa điểm</div>
                  <div className="select-filter-opt">
                    <Select defaultValue="Hà Nội" style={{ width: "94%" }}>
                      {filterAddress.map((o, index) => (
                        <Option value={o.value} key={index}>
                          {o.value}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="select-filter-subject">
                  <div className="select-filter-text">Môn học</div>
                  <div className="select-filter-opt">
                    <Select defaultValue="Toán" style={{ width: "94%" }}>
                      {filterSubject.map((o, index) => (
                        <Option value={o.value} key={index}>
                          {o.value}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="select-filter-level">
                  <div className="select-filter-text">Trình độ học vấn</div>
                  <div className="select-filter-opt">
                    <Select defaultValue="Đại học" style={{ width: "94%" }}>
                      {filterLevel.map((o, index) => (
                        <Option value={o.value} key={index}>
                          {o.value}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="select-filter-method">
                  <div className="select-filter-text">Hình thức dạy</div>
                  <div className="select-filter-opt">
                    <div>
                      <Checkbox>Online</Checkbox>
                    </div>
                    <div>
                      <Checkbox>Offline</Checkbox>
                    </div>
                  </div>
                </div>

                <div className="select-filter-gender">
                  <div className="select-filter-text">Giới tính</div>
                  <div className="select-filter-opt">
                    <div>
                      <Checkbox>Nam</Checkbox>
                    </div>
                    <div>
                      <Checkbox>Nữ</Checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </Sider>
            <Content
              className="content-tutor-general"
              style={{
                paddingRight: "55px",
                minHeight: 280,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <div className="card-list">
                {data.map((o, index) => (
                  <Card
                    title={o.title}
                    style={{ width: "100%", marginTop: "3%" }}
                    key={index}
                  >
                    <Row style={{ display: "flex" }}>
                      <Col style={{ width: "70%" }}>
                        <div>{o.date}</div>
                        <div className="card-list-tags">
                          {o.tags.map((t) => (
                            <Tag>{t}</Tag>
                          ))}
                        </div>
                        <div className="card-list-describe">{o.describe}</div>
                        <div className="card-list-btn">
                          <Button type="primary">Mời dạy</Button>
                        </div>
                      </Col>
                      <Col flex="auto">
                        <Image
                          className="img"
                          width="200px"
                          height="auto"
                          src={o.img}
                        />
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
              <div className="pagination">
                <Pagination defaultCurrent={6} total={50} />
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
          Made By Nguyễn Phương Thảo
        </Footer>
      </Layout>
    </div>
  );
}

export default FindingTutor;
