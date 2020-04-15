import {
  increaseCount,
  decreaseCount,
  increaseNumber,
  increaseNumSuccess,
  decreaseNumber,
  decreaseNumSuccess,
} from './constants';

const initialState = { count: 1, number: 1, loading: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case increaseCount:
      return { ...state, count: state.count + 1 };
    case decreaseCount:
      return { ...state, count: state.count - 1 };
    case increaseNumber:
    case decreaseNumber:
      return { ...state, loading: true };
    case increaseNumSuccess:
      return {
        ...state,
        number: state.number + action.num,
        loading: false,
      };
    case decreaseNumSuccess:
      return {
        ...state,
        number: state.number - action.num,
        loading: false,
      };
    default:
      return state;
  }
}
