// 일단은 함수형으로

import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          {/* <button className="approve green-text"> */}
           <button className="waves-effect waves-light btn green">
            수정
          </button>{' '}
          
          {/* <button className="deny red-text"> */}
            <button className="waves-effect waves-light btn red">
            삭제
          </button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="row" key={stream.id}>
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m6">
                    <i className="material-icons prefix">camera_roll</i>
                    <span className="card-title">스트리밍 리스트</span>
                    <div className="col s12 m6" key={stream.id}>
                      <h5>title: {stream.title}</h5>
                      <h6>description: {stream.description}</h6>
                      {this.renderAdmin(stream)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
