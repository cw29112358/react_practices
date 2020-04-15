import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import styles from './index.less';

const { Header } = Layout;

export default class HeaderComponent extends PureComponent {
  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Header className={styles.header}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: styles.trigger,
            onClick: toggle,
          },
        )}
      </Header>
    );
  }
}
