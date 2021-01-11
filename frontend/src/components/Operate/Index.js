import React from 'react';
import Home from './home';
import Activity from './activity/activity';
import './index.css'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    MessageOutlined,
    TeamOutlined,
    SignalFilled,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uId: props.id,
            uName: props.name,
            route: 'home',
            collapsed: false,
        }
    }

    handleClick (i) {
        this.setState({route: i===1? 'home':'activity'});
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{height:'100%'}}>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" icon = {<TeamOutlined />} />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />} onClick = {() => this.handleClick (1)}>
                                家目录
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick = {() => this.handleClick (2)}>
                                活动
                            </Menu.Item>
                            <Menu.Item key="3" icon={<MessageOutlined />} onClick = {() => this.handleClick (1)}>
                                社区
                            </Menu.Item>
                            <Menu.Item key="4" icon={<SignalFilled />} onClick = {() => this.handleClick (1)}>
                                排行
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background">
                            <span>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                })}
                            </span>
                            <span id = "appName">
                                约约交大~
                            </span>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 755,
                            }}
                        >
                            {this.state.route==='home'? <Home />:<Activity />}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>约约交大 ©2020 Created by 4-darksoldiers</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
