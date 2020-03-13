const increaseCountAction = { type: "increaseCount" };

const decreaseCountAction = { type: "decreaseCount" };

const increaseNumberAction = num => ({ type: "increaseNumber", payload: num });

const decreaseNumberAction = num => ({ type: "decreaseNumber", payload: num });

export {
  increaseCountAction,
  decreaseCountAction,
  increaseNumberAction,
  decreaseNumberAction
};
