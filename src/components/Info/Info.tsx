import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
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
import { ProfileTwoTone, BellTwoTone, HomeTwoTone } from "@ant-design/icons";
import "./Info.scss";
import { NameWeb } from "../NameWeb/NameWeb";
import InfoGeneral from "./InfoGeneral";
import InfoTutor from "./InfoTutor";
import TimeTable from "./TimeTable";
import teacherApi from "../../api/teacherApi";

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

function Info() {
  React.useEffect(() => {
    const params = {
      page_number: 1,
      page_length: 2,
    };
    teacherApi.getAll(params).then((data) => {
      console.log(data);
    });
  }, []);

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
        </header>
        <Content style={{ padding: "0 115px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0", marginTop: "73px", height: "100vh" }}
          >
            <Sider className="site-layout-background" width={300}>
              <Menu
                mode="inline"
                style={{ height: "100vh" }}
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
                <Menu.Item key="1">
                  <ProfileTwoTone />
                  Thông tin cá nhân
                </Menu.Item>
                <Menu.Item key="2">
                  <BellTwoTone />
                  Thông báo
                </Menu.Item>
                <Menu.Item key="3">
                  <HomeTwoTone />
                  Danh sách lớp
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              className="content-tutor-general"
              style={{
                padding: "0 55px",
                minHeight: 280,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin chung" key="1">
                  <InfoGeneral />
                </TabPane>
                <TabPane tab="Thông tin gia sư" key="2">
                  <InfoTutor />
                </TabPane>
                <TabPane tab="Lịch dạy" key="3">
                  <TimeTable />
                </TabPane>
              </Tabs>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made By Nguyễn Phương Thảo
        </Footer>
      </Layout>
    </div>
  );
}

export default Info;
