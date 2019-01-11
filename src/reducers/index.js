import { INCREMENT, DECREMENT, CLEAR, INCBY5 } from "../actions";

// initialize default state
const initialState = 0;

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
          return state - 1;
    case CLEAR:
          return 0;
    default:
      return state;
  }
};
