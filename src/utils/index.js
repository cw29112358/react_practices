import {
  isString,
} from 'lodash';
import moment from 'moment-mini';

import { COLORS_MAP } from './constants';

export const getColorByName = (colorName = '#fff') => COLORS_MAP[colorName] || colorName;

export const getLocalTime = (time) => {
  let formatTime = time;

  if (time && isString(time) && time.indexOf(' +0000 UTC') !== -1) {
    formatTime = time.replace(' +0000 UTC', 'Z').replace(' ', 'T');
  }

  return moment.utc(formatTime).local();
};
