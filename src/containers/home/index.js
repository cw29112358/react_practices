import React, { Component } from "react";
import { Button, Spin } from "antd";
import { connect } from "react-redux";

import {
  increaseCountAction,
  decreaseCountAction,
  increaseNumberAction,
  decreaseNumberAction
} from "./actions";
import styles from "./index.less";

class Home extends Component {
  render() {
    const {
      count,
      increaseCount,
      decreaseCount,
      number,
      increaseNumber,
      decreaseNumber,
      loading
    } = this.props;
    return (
      <div className={styles.home}>
        <div className={styles.home_page}>
          <div className={styles.home_title}>redux演示：</div>
          计数器：{count}
          <hr />
          <Button type="primary" onClick={increaseCount}>
            count + 1
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={decreaseCount}>
            count - 1
          </Button>
        </div>
        <hr />
        <Spin spinning={loading}>
          <div className={styles.home_page}>
            <div className={styles.home_title}>redux-saga演示：</div>
            计数器：{number}
            <hr />
            <Button type="danger" onClick={() => increaseNumber(1)}>
              number + 1
            </Button>
            &nbsp;&nbsp;
            <Button type="danger" onClick={() => decreaseNumber(1)}>
              number - 1
            </Button>
          </div>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  count: home.count,
  number: home.number,
  loading: home.loading
});

const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(increaseCountAction),
  decreaseCount: () => dispatch(decreaseCountAction),
  increaseNumber: num => dispatch(increaseNumberAction(num)),
  decreaseNumber: num => dispatch(decreaseNumberAction(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
