import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../elements/Index";
import Header from "../components/Header";
import Card from "../components/Card";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as MyActions } from "../redux/modules/mypage";

//아이콘
import { GrEdit } from "react-icons/gr";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const my_list = useSelector((state) => state.mypage.list);

  
  console.log("마이리스트",my_list);
  const logout = () => {
      dispatch(userActions.loginOutAction());
  };

  React.useEffect(() => {
    dispatch(MyActions.myPostDB());
  }, []);

  return (
    <React.Fragment>
      <Header text="내정보"/>
      <Grid margin="50px 0 50px" height="calc(100% - 121px)" is_scroll>
        <Grid padding="16px" is_flex display="flex">        
            <Image size="70" shape="circle" margin="0 10px 3px 30px"/>
            <Grid width="calc(100% - 100px)" margin="0 0 0 10px" align="top">
                <Text margin="0" bold size="18px" margin="0 0 6px 0">{userInfo?userInfo.nickname:""}</Text>
                <Text margin="0">소개글</Text>
                <Button bg="transparent" color="#aaa" width="auto" padding="0" margin="10px 0 0"
                  _onClick={logout}
                >로그아웃</Button>
            </Grid>
          <Button
            width="30px"
            height="30px"
            radius="50%"
            bg="#ff8c32"
            padding="8px"
            color="white"
            _onClick={() => {
              history.push("/mypage/edit");
            }}
            props={userInfo} //수정페이지로 유저정보 넘기기
          >
            <GrEdit style={{ color: "white" }} />
          </Button>
        </Grid>

        <StyleText>나의 글</StyleText>
        <Wrap>            
            {my_list.map((p, idx) => {
                return (                
                    <Card 
                      key={p.postId} 
                      {...p} 
                      postId={p.postId}
                    />
                );
            })}
        </Wrap>        
      </Grid>
    </React.Fragment>
  );
};


const Wrap = styled.div`
    box-sizing: border-box;
    width: 100%;   
    border-top : 1px solid #f2f2f2;
    padding:16px; 

`;

const StyleText = styled.p`
  @font-face {
      font-family: 'OTWelcomeRA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  font-family: 'OTWelcomeRA';
  width: max-content;
  border-bottom: 3px solid #00c8d2;
  margin: 20px 20px 0;
  padding-bottom: 5px;
`; 

export default Mypage;
