// 상태 관리ㅣㅣㅣㅣ

import { SIGN_IN, SIGN_OUT} from './types';

// when got a signal of 
// signIn attempted, 
// get userId and return payload
export const signIn = (userId) => {
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
