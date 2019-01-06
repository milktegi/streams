
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
 

  // 이벤트 콜백 
  onSubmit = formValues => {
    // event.preventDefault();
    // console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h5>Create Stream</h5>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
