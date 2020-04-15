import React, { Component } from 'react';
import { Layout } from 'antd';

import Sider from './components/sider';
import Header from './components/header';
import Routes from './components/routes';

import styles from './index.less';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => this.setState({
    collapsed: !this.state.collapsed,
  })

  render() {
    const { collapsed } = this.state;
    return (
      <Layout className={styles.layout}>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} toggle={this.toggle} />
          <Content className={styles.content}>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
