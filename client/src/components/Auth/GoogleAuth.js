import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/index'

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // clientId와 scope을 초기화
      window.gapi.client
        .init({
          clientId:
            '334569413873-au5ulcefah2v47c50a8f6oprv3nhocmi.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          // 이벤트 리스너 등록
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // 상태 업데이트 함수 
  // 유저 로그인유무가 들어올 때 마다 액션크리에이터 콜 
  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

	// 로그인아웃 이벤트 핸들러

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {	
		this.auth.signOut();
	}

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}>
					로그아웃
				</button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick}>
					로그인
				</button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  // state, action 
  mapStateToProps, 
  { signIn, signOut }
)(GoogleAuth);
