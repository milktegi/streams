// 일단은 함수형으로 

import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = () => {

	

	return(
		<div>
			나는 streamlist이당ㅎㅎㅎ 
		</div>
	)
}

export default connect(null, { fetchStreams })(StreamList);
