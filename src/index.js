import React from "react";
import ReactDom from "react-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
// import enUS from 'antd/es/locale/en_US';

import Layouts from "./layouts";
import { store } from "./store/store";
import rootSagas from "./sagas";
import "./index.css";

// 注入sagas函数
const injectSagas = sagas => sagas.map(saga => store.runSaga(saga));
// 注入sagas
injectSagas(rootSagas);

ReactDom.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router>
        <Layouts />
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
