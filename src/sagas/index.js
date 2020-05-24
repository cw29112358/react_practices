// home
import { increaseNumber, decreaseNumber } from 'pages/home/sagas';

// md
import { getListLatest } from 'pages/Md/sagas';

export default [
  increaseNumber,
  decreaseNumber,
  getListLatest,
];
