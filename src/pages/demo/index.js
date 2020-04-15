import React from 'react';
import echarts from 'echarts';

import { budgetOptions } from 'schemas/echarts/budget';
import { pieOption } from 'schemas/echarts/pie';
import { lineOption } from 'schemas/echarts/line';
import { customizedPieOption } from 'schemas/echarts/customizedPie';
import { kOption } from 'schemas/echarts/k';
import { browserOption } from 'schemas/echarts/browser';
import { treeOption } from 'schemas/echarts/tree';
import { sanKeyOption } from 'schemas/echarts/sanKey';
import { funnelOption } from 'schemas/echarts/funnel';
import styles from './index.less';

export default class Demo extends React.Component {
  componentDidMount() {
    this.getCharts();
  }

  getCharts = () => {
    const budget = document.getElementById('budget');
    const budgetChart = echarts.init(budget);
    budgetChart.setOption(budgetOptions);

    const pie = document.getElementById('pie');
    const pieChart = echarts.init(pie);
    pieChart.setOption(pieOption);

    const customizedPie = document.getElementById('customizedPie');
    const customizedPieChart = echarts.init(customizedPie);
    customizedPieChart.setOption(customizedPieOption);

    const line = document.getElementById('line');
    const lineChart = echarts.init(line);
    lineChart.setOption(lineOption);

    const k = document.getElementById('k');
    const kChart = echarts.init(k);
    kChart.setOption(kOption);

    const browser = document.getElementById('browser');
    const browserChart = echarts.init(browser);
    browserChart.setOption(browserOption);

    const tree = document.getElementById('tree');
    const treeChart = echarts.init(tree);
    treeChart.setOption(treeOption);

    const sanKey = document.getElementById('sanKey');
    const sanKeyChart = echarts.init(sanKey);
    sanKeyChart.setOption(sanKeyOption);

    const funnel = document.getElementById('funnel');
    const funnelChart = echarts.init(funnel);
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
