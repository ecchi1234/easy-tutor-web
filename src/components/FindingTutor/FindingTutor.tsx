import React from 'react'
import { Layout, Menu, Breadcrumb, Button, PageHeader, Image, Tabs, Form, Input, DatePicker, Col, Row, Select, Checkbox } from 'antd';
import { ProfileTwoTone, BellTwoTone, HomeTwoTone } from '@ant-design/icons';
import './FindingTutor.scss'
import { FindTutorTitle, NameWeb } from '../NameWeb/NameWeb';



const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

function FindingTutor() {
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
                    >
                    </PageHeader>
                    <div className='header-content-bg'>
                        <div className='header-content'>
                            <div className='header-content-text'>
                                <FindTutorTitle />
                            </div>
                            <div className='header-content-btn'>
                                <Button type='primary'>View offers</Button>
                            </div>
                        </div>
                    </div>
                    <div className="header-filter-bg">
                        <div className="header-filter">
                            <div className="header-filter-result-text">Kết quả (1245) </div>
                            <div className="header-filter-bar"></div>
                            <div className="header-filter-sort-by"></div>
                        </div>
                    </div>
                </header>
                <Content style={{ padding: '0 115px' }}>
                    <Layout className="site-layout-background" style={{ marginTop: '73px', height: '100vh', backgroundColor: '#F5F5F5' }}>
                        <Sider className="site-layout-background" width={300}>
                            <Menu
                                mode="inline"
                                style={{ height: '100vh' }}
                                defaultSelectedKeys={['1']}
                            >
                                <div className='image-tutor'>
                                    <Image
                                        className='img'
                                        width='200px'
                                        height='auto'
                                        src="https://2img.net/h/images3.wikia.nocookie.net/__cb20090618233926/naruto/images/thumb/6/6f/Orochimaru_As_A_Kid.PNG/653px-Orochimaru_As_A_Kid.PNG"
                                    />
                                </div>
                                <div className='fullname-tutor'>Nguyễn Phương Thảo</div>
                                <Menu.Item key="1"><ProfileTwoTone />Thông tin cá nhân</Menu.Item>
                                <Menu.Item key="2"><BellTwoTone />Thông báo</Menu.Item>
                                <Menu.Item key="3"><HomeTwoTone />Danh sách lớp</Menu.Item>
                            </Menu>
                        </Sider>
                        <Content className="content-tutor-general" style={{ padding: '0 55px', minHeight: 280, height: '100vh', overflow: 'auto' }}>

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>Made By Nguyễn Phương Thảo</Footer>
            </Layout>
        </div>
    )
}

export default FindingTutor
