// 일단은 함수형으로

import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {

 componentDidMount(){
	//  console.log(this.props);
	 this.props.fetchStream(this.props.match.params.id)
 }
  renderActions() {
   return (
      <React.Fragment>
        <button className="ui button negative">삭제</button>
        <button className="ui button">취소</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          content="정말로 삭제하시겠습니까?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
