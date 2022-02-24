import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../elements/Index";
import Header from "../components/Header";
import Card from "../components/Card";
import {useHistory} from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as MyActions } from "../redux/modules/mypage";

//아이콘
import { GrEdit } from "react-icons/gr";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user);
  const my_list = useSelector((state) => state.mypage.list);
  const my_Info = useSelector((state) => state.mypage.info);

  const logout = () => {
      dispatch(userActions.logOutAction());
  };

  React.useEffect(() => {
    dispatch(MyActions.myPostDB());
  }, []);


  return (
    <React.Fragment>
      <Header text="내정보"/>
      <Grid margin="50px 0 50px" height="calc(100% - 121px)" is_scroll>
        <Grid padding="16px" is_flex display="flex">        
          <Image 
            size="70" 
            margin="0 10px 3px 30px"
            profile={my_Info? my_Info.profileUrl !== null  ? my_Info.profileUrl : "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg" : "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg"}
          />
          <Grid width="calc(100% - 100px)" margin="0 0 0 10px" align="top">
              <Text margin="0" bold size="18px" margin="0 0 6px 0">{my_Info?my_Info.nickname:""}</Text>
              <Text margin="0">{my_Info?my_Info.introduce:""}</Text>
              <Button bg="transparent" color="#aaa" width="auto" padding="0" margin="10px 0 0" bold
                _onClick={()=>{
                  logout()
                }}
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
              history.push({                                
                pathname: "/mypage/edit",
                state: {myInfo: my_Info},                                  
              })
            }}
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
