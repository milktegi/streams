const INITIAL_STATE = {
	isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
	// 액션 타입 검사 후 복사? 
	switch(action.type){
		case 'SIGN_IN':
		return {...state, isSignedIn: true };
		case 'SIGN_OUT':
		return{...state, isSignedIn: false}
		default:
		return state;
	}
}