import React from "react";
import { Input, Grid, Button } from "../elements/index";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import Header from "../components/Header";
const Login = () => {
   const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
  
    const login = () => {
      if(id === "" || pwd === ""){
        window.alert("아이디 혹은 비밀번호가 공란입니다!! 입력해주세요!");
        return;  
      } else {
        // setLogin(false);
      }
  
      if(!emailCheck(id)){
        window.alert("이메일 형식이 맞지 않습니다!");
        return;
      }

      dispatch(userActions.loginAction(id,pwd));
    };
  
    return (
      <React.Fragment>
        <Header text="로그인"/>
        <Grid padding="16px">  
          <Grid padding="16px 0px" is_flex>
            <Input              
              radius="6px"
              label="아이디"
              placeholder="아이디를 입력해주세요."
              _onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>  
          <Grid padding="16px 0px" margin="0 0 40px">
            <Input
              radius="6px"
              label="패스워드"
              placeholder="패스워드 입력해주세요."
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>  
          <Button 
            text="로그인"
            _onClick={() => {
              console.log("로그인 했어!");
              login();
            }}
            disabled={id === "" || pwd === "" ? true : false}
            bg={id === "" || pwd === "" ? "#ddd" : "#00c8d2"} 
          ></Button>
          <p style={{color:"#999", fontSize:"14px"}}>아직 계정이 없으신가요? <a href="/signup" style={{color:"#999"}}>회원가입 하러가기</a></p>
        </Grid>
      </React.Fragment>
    );
}

export default Login;