import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_DEMO, GET_DEMO_SUCCESS, GET_DEMO_FAILED } from './constants';
import { getDemo } from './servers';

function* getDemoSage() {
  try {
    const res = yield call(getDemo);
    yield put({ type: GET_DEMO_SUCCESS, payload: res });
  } catch (error) {
    yield put({ type: GET_DEMO_FAILED });
  }
}

function* getListLatest() {
  yield takeLatest(GET_DEMO, getDemoSage);
}

export { getListLatest };
