import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from './actions';

export const fetchData = () => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());

    axios.get('./data.json')
      .then((response: any) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(fetchDataError(error.message));
      });
  };
};

export const fetchDataShort = () => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());

    axios.get('./data-short.json')
      .then((response: any) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(fetchDataError(error.message));
      });
  };
};

export const fetchDataStack = () => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());

    axios.get('./data-stack.json')
      .then((response: any) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(fetchDataError(error.message));
      });
  };
};