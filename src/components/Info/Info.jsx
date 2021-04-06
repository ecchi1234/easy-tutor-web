import React, { useReducer } from "react";
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
import Nofi from "./Nofi"
import OldClass from "./OldClass"
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const change = () => {
  console.log("OK");
};

function Info() {
  const screen1 = React.useMemo(() => {
    return (
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
    );
  });


  const reducer = (state, action) => {
    switch (action.type) {
      case 1:
        return screen1;
      case 2:
        return <Nofi />;
      case 3:
        return <OldClass />;
    }
  };
  const [state, dispatch] = useReducer(reducer, screen1);
  const change1 = () => {
    dispatch({ type: 1 });
  };

  const change2 = () => {
    dispatch({ type: 2 });
  };

  const change3 = () => {
    dispatch({ type: 3 });
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
          ></PageHeader>
        </header>
        <Content
          className="ant-layout-content-1"
          style={{ padding: "0 115px" }}
        >
          <Layout
            className="site-layout-background-1"
            style={{
              marginTop: "73px",
              height: "100vh",
              backgroundColor: "#f5f5f5",
            }}
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
                <Menu.Item key="1" onClick={change1}>
                  <ProfileTwoTone />
                  Thông tin cá nhân
                </Menu.Item>
                <Menu.Item key="2" onClick={change2}>
                  <BellTwoTone />
                  Thông báo
                </Menu.Item>
                <Menu.Item key="3" onClick={change3}>
                  <HomeTwoTone />
                  Danh sách lớp
                </Menu.Item>
              </Menu>
            </Sider>

            <Content
              className="content-tutor-general-1"
              style={{
                padding: "0 55px",
                minHeight: 280,
                height: "100vh",
                overflow: "auto",
              }}
            >
              {state}
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
