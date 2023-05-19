import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

// Actions types
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_SHORT_SUCCESS = 'FETCH_DATA_SHORT_SUCCESS';
export const FETCH_DATA_STACK_SUCCESS = 'FETCH_DATA_STACK_SUCCESS';

// Actions creators
export const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataShortSuccess = (data: any) => ({
  type: FETCH_DATA_SHORT_SUCCESS,
  payload: data,
});

export const fetchDataStackSuccess = (data: any) => ({
  type: FETCH_DATA_STACK_SUCCESS,
  payload: data,
});

// Action creator pour la requête de récupération des données
export function fetchDataRequest() {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
}

// Action creator pour l'erreur de récupération des données
export function fetchDataError(error: any) {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error
  };
}

interface State {
  data: any;
  shortData: any;
  stackData: any;
}

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

