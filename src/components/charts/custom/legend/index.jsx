import React from 'react';
import classnames from 'classnames';
import { get } from 'lodash';

import styles from './index.less';

const CustomLegend = (props = {}) => {
  const {
    className, payload, activeSeries = [], showAll = false,
  } = props;
  const data = payload || [];

  if (data.length < 2 && !showAll) return <div className={styles.legend} />;

  const handleClick = (e) => {
    const { onClick } = props;

    if (onClick) {
      const key = get(e.target, 'dataset.key');
      onClick(e, key);
    }
  };

  return (
    <div className={classnames(className, styles.legend)} onClick={handleClick}>
      {data.map((item) => {
        const inactive = !activeSeries.includes(item.value);
        const color = get(item, 'payload.stroke');

        return (
          <div
            key={item.dataKey}
            data-key={item.dataKey}
            className={classnames(styles.item, {
              [styles.inactive]: inactive,
            })}
          >
            <i style={{ backgroundColor: color }} />
            {item.value}
          </div>
        );
      })}
    </div>
  );
};

export default CustomLegend;
