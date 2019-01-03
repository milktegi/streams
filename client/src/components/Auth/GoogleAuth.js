import React from 'react';

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			// clientId와 scope을 초기화 
			window.gapi.client.init({
				clientId: '334569413873-au5ulcefah2v47c50a8f6oprv3nhocmi.apps.googleusercontent.com',
				scope: 'email'
			})
		});
	}

  render() {
    return <div>구글 어스</div>;
  }
}

export default GoogleAuth;
