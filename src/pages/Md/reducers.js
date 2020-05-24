import {
  GET_DEMO,
  GET_DEMO_SUCCESS,
  GET_DEMO_FAILED,
} from './constants';

const initialState = { demo: [], loading: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEMO:
      return { ...state, loading: true };
    case GET_DEMO_SUCCESS:
      return { ...state, demo: action.payload, loading: false };
    case GET_DEMO_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
