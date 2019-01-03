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
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>로그인</div>;
    } else if (this.state.isSignedIn) {
      return <div>로그아웃</div>;
    } else {
      return <div>로그인 아직</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
