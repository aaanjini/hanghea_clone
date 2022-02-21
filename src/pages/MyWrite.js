import React from "react";
import styled from "styled-components";
import { Image, Grid, Button, Input } from "../elements/Index";
import Header from "../components/Header";


import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { useParams } from "react-router-dom";
import Upload from "../components/Upload";

const MyWrite = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  //   const target_id = useParams().postId;
  //   //이미 App.js에서 세션이 있는지 확인했으니, is_login만 확인하면 된다.
  //   const is_login = useSelector((state) => state.user.is_login);
  //   const target = useSelector((state) => state.post.target);
  //   const preview = useSelector((state) => state.image.preview);

   const userInfo = useSelector((state) => state.user.user);

  // const [image, setImage] = React.useState("");
    const [nickname, setNickname] = React.useState(userInfo ? userInfo.nickname : "");
    const [intro, setIntro] = React.useState("");

  const editInfo = () => {
    dispatch(postActions.editInfoDB(nickname, intro));
  };

  return (
    <React.Fragment>
        <Header text="프로필 수정" edit is_flex>
            <Button bg="transparent" color="#00c8d2" width="auto" padding="0" bold size="16px"
                _onClick={()=>{

                }}
            
            >완료</Button>
        </Header>

        <Grid margin="70px 0">        
            <Grid center>
                <Image size="130" shape="circle" inline_block></Image>
                <Button bg="transparent" width="120px" padding="10px" margin="auto" border="1px solid #00c8d2" radius="10px" color="#00c8d2">
                    프로필 사진 변경
                </Button>
            </Grid>
            <Grid padding="0 16px" margin="20px 0">                
                <Grid margin="20px 0">
                    <Input              
                        radius="6px"
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요."
                        value={nickname}
                        _onChange={(e) => {
                            setNickname(e.target.value);
                        }}
                    />
                </Grid>
                <Grid>
                    <Input       
                        multiLine       
                        radius="6px"
                        label="소개"
                        placeholder="자신을 소개할 수 있는 글을 적어주세요."
                        value={intro}
                        _onChange={(e) => {
                            setIntro(e.target.value);
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>      
    </React.Fragment>
  );
};

export default MyWrite;
