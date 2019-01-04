import { SIGN_IN, SIGN_OUT, EDIT_STREAM } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  // 액션 타입 검사 후 복사?
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

// // sample code
// // state 타입이 배열인 경우

// const streamReducer = (state = [], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if (stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const streamReducer = (state = {}, action) => {
//   switch(action.type) {
//     case EDIT_STREAM:
//     // const newState = {... state};
//     // newState[action.payload.id] = action.payload;
//     // return newState;
//     return {...state, [action.payload.id] : action.payload};
//     default:
//     return state; 
//   }
// }