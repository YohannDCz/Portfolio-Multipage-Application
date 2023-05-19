import { FETCH_DATA_SHORT_SUCCESS, FETCH_DATA_STACK_SUCCESS, FETCH_DATA_SUCCESS } from "./actions";// Interface for the store state
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface State {
  data: any;
  shortData: any;
  stackData: any;
}

// Reducer
const initialState: State = {
  data: null,
  shortData: null,
  stackData: null,
};

export const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_SHORT_SUCCESS:
      return { ...state, shortData: action.payload };
    case FETCH_DATA_STACK_SUCCESS:
      return { ...state, stackData: action.payload };
    default:
      return state;
  }
};

