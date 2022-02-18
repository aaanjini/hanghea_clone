import React from 'react';
import {Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch, useSelector } from "react-redux";
import { history } from "./redux/configureStore";
import {Grid} from './elements/Index';

//page import
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Mypage from './pages/Mypage';
import MyWrite from './pages/MyWrite';
import PostWrite from './pages/PostWrite';
import PostDetail from './pages/PostDetail';


function App() {
  return (
    <React.Fragment>
      <Grid padding="16px" margin="0 auto">
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main}/>{/* 메인페이지 */}
          <Route path="/login" exact component={Login}/>{/* 로그인 */}
          <Route path="/signup" exact component={Signup}/>{/* 회원가입 */}
          <Route path="/write" exact component={PostWrite}/>{/* 작성페이지 */}
          <Route path="/write/:postId" exact component={PostWrite}/>{/* 수정페이지 */}
          <Route path="/post/:postId" exact component={PostDetail}/>{/* 상세페이지 */}
          <Route path="/mypage" exact component={Mypage}/>{/* 마이페이지 */}    
          <Route path="/mypage/edit" exact component={MyWrite}/>{/* 프로필 변경 페이지 */}
          <Route path="/search" exact component={Search}/>{/* 검색결과 페이지 */}
        </ConnectedRouter>        
      </Grid>
      <img src="https://colley.kr/_nuxt/img/icon_colley_logo.08ca580.svg"></img>
    </React.Fragment>
  );
}

export default App;
