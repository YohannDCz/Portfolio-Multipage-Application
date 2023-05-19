import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// Actions types
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_SHORT_SUCCESS = 'FETCH_DATA_SHORT_SUCCESS';
const FETCH_DATA_STACK_SUCCESS = 'FETCH_DATA_STACK_SUCCESS';

// Actions creators
const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataShortSuccess = (data) => ({
  type: FETCH_DATA_SHORT_SUCCESS,
  payload: data,
});

const fetchDataStackSuccess = (data) => ({
  type: FETCH_DATA_STACK_SUCCESS,
  payload: data,
});

// Async action creator for fetching data
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

// ...

export const fetchData = (): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get('data.json');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export const fetchDataShort = (): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get('data-short.json');
      dispatch(fetchDataShortSuccess(response.data));
    } catch (error) {
      console.error('Error fetching short data:', error);
    }
  };
};

export const fetchDataStack = (): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get('data-stack.json');
      dispatch(fetchDataStackSuccess(response.data));
    } catch (error) {
      console.error('Error fetching stack data:', error);
    }
  };
};

// ...



// Interface for the store state
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

const reducer = (state: State = initialState, action: any) => {
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

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
