import React from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux';

import { getDemoAction } from './actions';
import styles from './index.less';

class Md extends React.Component {
  getDemoDate = () => {
    const { getDemo } = this.props;
    getDemo();
  }

  render() {
    const { demo, loading } = this.props;
    return (
      <Spin spinning={loading}>
        <div className={styles.demo}>
          {demo.map((item) => (
            <div key={item.key}>{item.name}</div>
          ))}
          <Button type="primary" onClick={this.getDemoDate}>请求列表</Button>
        </div>
      </Spin>
    );
  }
}

const mapStateToProps = ({ md }) => ({
  demo: md.demo,
  loading: md.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getDemo: () => dispatch(getDemoAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Md);
