import React from "react";
import {
  Button,
  MobileViewMyInfo,
  Grid,
  CardMyInfo,
  Text,
  Image,
} from "../elements/Index";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
import { history } from "../redux/configureStore";
// import { useSelector, useDispatch } from "react-redux";
// import { actionCreators as MyActions } from "../redux/modules/mypage";

const Mypage = (props) => {
  //   const dispatch = useDispatch();
  //   const post_list = useSelector((state) => state.mypage.my_list);
  //   console.log(post_list);

  //   React.useEffect(() => {
  //     dispatch(MyActions.myPostDB());
  //   }, []);

  return (
    <React.Fragment>
      <Header text="내정보" style={{ display: "inline-block" }}>
        <Button width="30%">로그아웃</Button>
      </Header>
      <Grid margin="50px 0 50px" height="calc(100% - 121px)" is_scroll>
        <Grid padding="20px" is_flex>
          <Image size="100" shape="circle" margin="0 10px 3px 30px" />
          <Button
            width="30%"
            style={{
              textAlign: "right",
              padding: "0px",
              margin: "20px 40px 20px 0",
            }}
            _onClick={() => {
              history.push("/mypage/edit");
            }}
          >
            프로필 수정
          </Button>
        </Grid>
       
        <div style={{ fontSize: "14px", margin:"0 0 0 75px"}}>닉네임</div>
        <div style={{ fontSize: "13px", margin:"0 0 0 75px", padding:"7px"}}>소개</div>
        
        <Grid padding="15px" margin="5px auto">
          <p style={{ fontsize: "20px", textAlign: "center" }}>
            내가 작성한 글
          </p>
        </Grid>
        <Grid padding="16px 8px">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Mypage;
