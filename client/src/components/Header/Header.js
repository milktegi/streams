import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from '../Auth/GoogleAuth';

const Header = () => {
	return (
	<div>
		<nav className="indigo darnken-2">
    <div className="container">
      <div className="nav-wrapper">
        <Link to="/">
          Streamy
        </Link>
        <Link to="/" data-activates="side-nav" className="button-collapse show-on-large right">
          <i className="material-icons">menu</i>
        </Link>
        <ul className="right hide-on-med-and-down">
					<li><GoogleAuth/></li>	
          <li className="active"><Link to="/"></Link></li>
          <li><Link to="/streams/new">채널 생성</Link></li>
          <li><Link to="/streams/edit">스트리밍 수정</Link></li>
          <li><Link to="/streams/delete">스트리밍 삭제</Link></li>
          <li><Link to="/streams/show">스트리밍 보기</Link></li>
          {/* <li><Link to="login.html">로그인</Link></li> */}
				
        </ul>
				</div>
				</div>
				</nav>
	</div>);


}


export default Header;