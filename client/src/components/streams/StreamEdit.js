import _ from 'lodash'

import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    // this.props.fetchStream(this.props.match.params.id)
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // console.log(formValues);
		this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h5>Edit Stream</h5>
        <StreamForm 
				initialValues={_.pick(this.props.stream, 'title', 'description')}
				onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
