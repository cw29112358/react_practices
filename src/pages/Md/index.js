import React from 'react';
import { Button } from 'antd';

export default class Md extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }}
      >
        <Button type="primary">数组去重</Button>
        <Button type="primary">节流事件</Button>
      </div>
    );
  }
}
