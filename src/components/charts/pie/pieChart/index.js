import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

export default class Chart extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    width: 100,
    height: 100,
    // eslint-disable-next-line react/default-props-match-prop-types
    dataKey: 'value',
  }

  render() {
    const {
      width, height, data, dataKey,
    } = this.props;

    return (
      <ResponsiveContainer width={width} height={height} debounce={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            innerRadius="60%"
            outerRadius="100%"
            animationDuration={1000}
          >
            {data.map((entry) => (
              <Cell
                key={`cell-${entry.name}`}
                {...entry.itemStyle}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
