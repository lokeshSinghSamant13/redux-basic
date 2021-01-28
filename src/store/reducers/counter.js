import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    //   return {
    //     counter: state.counter + 1,
    //   };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
      // return {
      //   ...state,
      //   counter: state.counter + action.val,
      // };
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
    // return {
    //   ...state,
    //   counter: state.counter - action.val,
    // };
  }
  return state;
};

export default reducer;
