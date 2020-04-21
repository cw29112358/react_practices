import React, { PureComponent } from 'react';
import { Layout, Icon } from 'antd';

import styles from './index.less';

const { Header } = Layout;

export default class HeaderComponent extends PureComponent {
  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    );
  }
}
