import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { routes } from 'schemas/routes';
import { history } from 'utils/history';

import styles from './index.less';

const { Sider } = Layout;
const { Item } = Menu;

export default class SiderComponent extends PureComponent {
  handleClick = ({ key }) => history.push(key)

  render() {
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          defaultSelectedKeys={[
            window.location.hash.slice(1) === '/'
              ? routes[0].path
              : window.location.hash.slice(1),
          ]}
        >
          <Item key="/home">
            <Icon type="home" />
            <span>首页</span>
          </Item>
          <Item key="/demo">
            <Icon type="user" />
            <span>示例</span>
          </Item>
          <Item key="/md">
            <Icon type="user" />
            <span>md</span>
          </Item>
        </Menu>
      </Sider>
    );
  }
}
