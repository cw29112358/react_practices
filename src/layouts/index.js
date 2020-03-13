import React, { Component } from "react";
import { Layout, Menu } from "antd";
import classnames from "classnames";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Switch, Route, Redirect } from "react-router-dom";

import { history } from "utils/history";
import { routes } from "schemas/routes";
import styles from "./index.less";

const { Header, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  handleClick = ({ key }) => history.push(key);

  toggle = () =>
    this.setState({
      collapsed: !this.state.collapsed
    });

  render() {
    const { collapsed } = this.state;
    return (
      <Layout className={styles.app_layout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            onClick={this.handleClick}
            defaultSelectedKeys={[
              window.location.hash.slice(1) === "/"
                ? routes[0].path
                : window.location.hash.slice(1)
            ]}
          >
            <Menu.Item key="/home">
              <UserOutlined />
              <span>home</span>
            </Menu.Item>
            <Menu.Item key="/demo">
              <VideoCameraOutlined />
              <span>demo</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.site_layout}>
          <Header
            className={classnames(
              styles.site_layout_background,
              styles.site_header
            )}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.trigger,
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className={classnames(
              styles.site_layout_background,
              styles.site_content
            )}
          >
            <Switch>
              <Route exact path="/" render={() => <Redirect to="home" />} />
              {routes.map(item => (
                <Route
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
