import React from 'react';

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // 이벤트 리스너 등록
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // 상태 업데이트 함수 
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

	// 로그인아웃 이벤트 핸들러

	onSignIn = () => {
		this.auth.signIn();
	}

	onSignOut = () => {	
		this.auth.signOut();
	}

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut}>
					로그아웃
				</button>
      );
    } else {
      return (
        <button onClick={this.onSignIn}>
					로그인
				</button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
