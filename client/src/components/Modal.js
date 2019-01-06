import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
		onClick={ () => history.push('/')} 
		className="ui dimmer modals visible active">
      <div 
			onClick={(e)=> e.stopPropagation()}
			className="ui standard modal viasible active">
				<div className="header">
					Delete Stream
				</div>
				<div className="content">
					정말로 삭제하시겠습니까?
				</div>
				<div className="actions">
					<button className="ui primary button">삭제</button>
					<button className="ui button">취소</button>
				</div>
				</div>
    </div>,
		document.querySelector('#modal')
  );
};

export default Modal;
