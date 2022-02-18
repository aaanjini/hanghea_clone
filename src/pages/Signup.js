import React from "react";
import { Grid, Text, Input, Button } from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { emailCheck, passwordCheck} from "../shared/common";

const Signup = () => {
    const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [nick_name, setNickName] = React.useState("");


  const Signup = () => {
    if (id === "" || pwd === "" || nick_name === "") {
      window.alert("공백없이 다 입력해주세요");
      return;
    }
  
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!!");
      return;
    }
    if (!passwordCheck(pwd)) {
      window.alert("패스워드형식을 맞춰주세요");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("패스워드가 일치하지않습니다.");
      return;
    }
    
    console.log("회원가입완료!");
  }; 
  

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" color="#F0EDCC" bold>
          회원가입
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
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="8~10자리 숫자,영어 대소문자 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>

        <Button text="회원가입하기" _onClick={Signup}></Button>
      </Grid>
    </React.Fragment>
  );
}

export default Signup;