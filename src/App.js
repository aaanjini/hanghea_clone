import React from 'react';
import {Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import { actionCreators as postActions } from "./redux/modules/post";
import { history } from "./redux/configureStore";
import {Grid, MobileView} from './elements/Index';
import { getCookie } from "./shared/cookie";
import logo from "./colley_logo2.png";


//page import
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Mypage from './pages/Mypage';
import MyWrite from './pages/MyWrite';
import PostWrite from './pages/PostWrite';
import PostDetail from './pages/PostDetail';
import Navigete from "./components/Navigate";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = getCookie("authorization");

  
  React.useEffect(() => {    
    if (token && !user) {//쿠키는 있는데 유저 정보가 없으면 바로 불러오기
      dispatch(userActions.loginCheckDB());
    }    
    dispatch(postActions.getPostDB()); //게시글 불러오기
  });

  return (
    <React.Fragment>      
      <img src={logo} style={{width:"120px",display:"block",margin:"20px auto"}}/>  
      <MobileView> 
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
        <Navigete/>    
      </MobileView>    
      
    </React.Fragment>
  );
}

export default App;
