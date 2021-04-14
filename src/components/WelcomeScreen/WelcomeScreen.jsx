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
import {
  BrowserRouter as Router,
Link,
} from "react-router-dom";
import "./WelcomeScreen.scss";
import { NameWeb } from "../NameWeb/NameWeb";
import logo from "../../assets/read.png";
import Register from "../Register/Register";


const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;



function WelcomeScreen() {

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
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          ></PageHeader>
        </header>
        <Content
          className="ant-layout-content-4"
          style={{ padding: "0 115px" }}
        >
          <Layout
            className="site-layout-background-4"
            style={{
              marginTop: "73px",
              height: "100vh",
              backgroundColor: "#fff",
            }}
          >
            <div className="ws-container">
              <div className="ws-col">
                <div className="ws-row">Easy Tutor Agency</div>
                <div
                  className="ws-row"
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#1890FF",
                  }}
                >
                  Tìm gia sư mơ ước cho bạn
                </div>
                <div className="ws-row" style={{ textAlign: "justify" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                </div>
                <div
                  className="ws-row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  
                    <Link to="/register">
                      <Button type="primary">
                        Tham gia với tư cách gia sư
                      </Button>
                    </Link>
                  <Link to="/register-normal">

                  <Button type="primary">Tham gia với tư cách phụ huynh</Button>
                  </Link>

                </div>
              </div>
              <div className="ws-col">
                <img src={logo} alt="no-img"/>
              </div>
            </div>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made By Nguyễn Phương Thảo
        </Footer>
      </Layout>
    </div>
  );
}

export default WelcomeScreen;
