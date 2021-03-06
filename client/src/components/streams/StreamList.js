// 일단은 함수형으로

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link 
          to={`/streams/edit/${stream.id}`}
          className="waves-effect waves-light btn green">
            수정
          </Link>{' '}
          {/* <L className="deny red-text"> */}
          <Link 
          to={`/streams/delete/${stream.id}`}
          className="waves-effect waves-light btn red">삭제</Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link
            to="/streams/new"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
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
                    <i className="material-icons prefix">laptop_mac</i>
                    <span className="card-title">스트리밍 리스트</span>

                    <div className="col s12 m6" key={stream.id}>
                      <Link to={`/streams/${stream.id}`}>
                     <h3> title: {stream.title}</h3></Link>
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
        {this.renderCreate()}
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
