import React from "react";
import echarts from "echarts";

import { budgetOptions } from "../../schemas/echarts/budget";
import { pieOption } from "../../schemas/echarts/pie";
import { lineOption } from "../../schemas/echarts/line";
import { customizedPieOption } from "../../schemas/echarts/customizedPie";
import { kOption } from "../../schemas/echarts/k";
import { browserOption } from "../../schemas/echarts/browser";
import { treeOption } from "../../schemas/echarts/tree";
import { sanKeyOption } from "../../schemas/echarts/sanKey";
import { funnelOption } from "../../schemas/echarts/funnel";
import styles from "./index.less";

export default class Demo extends React.Component {
  componentDidMount() {
    this.getCharts();
  }

  getCharts = () => {
    let budget = document.getElementById("budget");
    let budgetChart = echarts.init(budget);
    budgetChart.setOption(budgetOptions);

    let pie = document.getElementById("pie");
    let pieChart = echarts.init(pie);
    pieChart.setOption(pieOption);

    let customizedPie = document.getElementById("customizedPie");
    let customizedPieChart = echarts.init(customizedPie);
    customizedPieChart.setOption(customizedPieOption);

    let line = document.getElementById("line");
    let lineChart = echarts.init(line);
    lineChart.setOption(lineOption);

    let k = document.getElementById("k");
    let kChart = echarts.init(k);
    kChart.setOption(kOption);

    let browser = document.getElementById("browser");
    let browserChart = echarts.init(browser);
    browserChart.setOption(browserOption);

    let tree = document.getElementById("tree");
    let treeChart = echarts.init(tree);
    treeChart.setOption(treeOption);

    let sanKey = document.getElementById("sanKey");
    let sanKeyChart = echarts.init(sanKey);
    sanKeyChart.setOption(sanKeyOption);

    let funnel = document.getElementById("funnel");
    let funnelChart = echarts.init(funnel);
    funnelChart.setOption(funnelOption);
  };

  render() {
    return (
      <div className={styles.echarts}>
        <div id="budget" className={styles.chart} />
        <div id="pie" className={styles.chart} />
        <div id="line" className={styles.chart} />
        <div id="customizedPie" className={styles.chart} />
        <div id="k" className={styles.chart} />
        <div id="browser" className={styles.chart} />
        <div id="tree" className={styles.chart} />
        <div id="sanKey" className={styles.chart} />
        <div id="funnel" className={styles.chart} />
      </div>
    );
  }
}
