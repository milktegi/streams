// 상태 관리
// axios 인스턴스 수입
import streams from '../apis/streams';

import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

// when got a signal of
// signIn attempted,
// get userId and return payload
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  const response = streams.post('/streams', formValues);
  dispatch({ 
    type: CREATE_STREAM,
    payload: response.data
  })
};
