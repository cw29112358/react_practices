import React from 'react';
import { TinyArea, SimpleArea, MediumArea } from 'components/charts';

import { data1 } from 'schemas/recharts/area';
import styles from './index.less';

const width = 500;
const height = 500;

class Charts extends React.Component {
  render() {
    return (
      <div className={styles.charts}>
        <TinyArea
          width={width}
          height={height}
          data={data1}
          title="TinyArea"
        />
        <SimpleArea
          width={width}
          height={height}
          data={data1}
          title="SimpleArea"
        />
        <MediumArea
          width={width}
          height={height}
          data={data1}
          title="MediumArea"
        />
      </div>
    );
  }
}

export default Charts;
