import React from 'react';
import { get, isEmpty, isNaN } from 'lodash';

import { compareByCondition } from 'utils/alerting';

import styles from './index.less';

const CustomToolTip = (props = {}) => {
  if (!props.active) return null;

  const {
    renderLabel, payload, usageData, totalData, alert = {},
  } = props;
  const data = payload || [];
  const timeStr = props.label;
  const unit = get(data, '[0].unit') || '';
  const unitText = unit === 'default' ? '' : unit === '%' ? '%' : ` ${unit}`;

  let labelContent = renderLabel ? renderLabel(props) : timeStr;
  if (!isEmpty(alert)) {
    const { label, condition, value } = alert;

    if (data.some((item) => compareByCondition(item.value, value, condition))) {
      labelContent = (
        <div>
          <p>
            <img src="/assets/error.svg" alt="error" />
            {`发生告警 ${label} ${condition} ${value}${unitText}`}
          </p>
          <p>{timeStr}</p>
        </div>
      );
    }
  }

  return (
    <div className={styles.tooltip}>
      <div className={styles.label}>{labelContent}</div>
      <div className={styles.list}>
        {data.map((item) => {
          const { dataKey, name, value = 0 } = item;

          if (isNaN(Number(value))) return null;

          const color = get(item, 'stroke');

          let ratio = '';
          if (!isEmpty(usageData) && !isEmpty(totalData)) {
            const usage = get(usageData.find((_item) => _item.time === timeStr), name) || 0;
            const total = get(totalData.find((_item) => _item.time === timeStr), name) || 0;
            ratio = <span>{` (${usage}/${total})`}</span>;
          }

          return (
            <div key={dataKey} className={styles.item}>
              <i style={{ background: color }} />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                {name}
                :
              </label>
              <p>
                {value}
                {unitText}
                {ratio}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomToolTip;
