// 일단은 함수형으로

import React from 'react';

// 라우팅 종속성 추가
import { BrowserRouter, Route } from 'react-router-dom';

// 렌더링 컴포넌트 수입
import Header from './Header/Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <div>
								<Header/>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
