import { delay, put, takeLatest } from "redux-saga/effects";

import { increaseNumSuccess, decreaseNumSuccess } from "./constants";

function* increaseNum(action) {
  try {
    yield delay(200);
    yield put({ type: increaseNumSuccess, num: action.payload });
  } catch (error) {
    console.log(error);
  }
}

function* decreaseNum(action) {
  try {
    yield delay(200);
    yield put({ type: decreaseNumSuccess, num: action.payload });
  } catch (error) {
    console.log(error);
  }
}

function* increaseNumber() {
  yield takeLatest("increaseNumber", increaseNum);
}

function* decreaseNumber() {
  yield takeLatest("decreaseNumber", decreaseNum);
}

export { increaseNumber, decreaseNumber };
