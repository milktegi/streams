// 일단은 함수형으로

import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

 componentDidMount(){
	//  console.log(this.props);
	 this.props.fetchStream(this.props.match.params.id)
 }
  renderActions() {
		// const id = this.props.match.params.id;

		const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
				onClick={() => this.props.deleteStream(id) } 
				className="ui button negative">삭제	</button>
        <Link to="/" className="ui button">취소</Link>
      </React.Fragment>
    );
  }


	renderContent() {
		if(!this.props.stream){
			return 'ㄹㅇ?'
		}
		return `are you sure you want to delete 
		the stream with title:${'  '}${this.props.stream.title}`
	}
  render() {
	
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	return {
		stream: state.streams[ownProps.match.params.id]
	}
};


export default connect(mapStateToProps, { 
	fetchStream, deleteStream
 })(StreamDelete);
