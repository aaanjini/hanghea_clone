import React from "react";
import { Text, Input, Grid, Button } from "../elements/Index";
import { emailCheck } from "../shared/common";

const Login = () => {
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    // const [loginCheck, setLogin] = React.useState(true);
  
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
  
    };
  
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text size="32px" color="#F0EDCC" bold >
            로그인
          </Text>
  
          <Grid padding="16px 0px">
            <Input
              label="아이디"
              placeholder="아이디를 입력해주세요."
              _onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>
  
          <Grid padding="16px 0px">
            <Input
              label="패스워드"
              placeholder="패스워드 입력해주세요."
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>
  
          <Button 
            text="로그인하기"
            _onClick={() => {
              console.log("로그인 했어!");
              login();
            }}
            disabled={id === "" || pwd === "" ? true : false}
          ></Button>
        </Grid>
      </React.Fragment>
    );
}

export default Login;