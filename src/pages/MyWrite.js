import React from "react";
import { Image, Grid, Button, Input } from "../elements/Index";
// import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
// import { actionCreators as imageActions } from "../redux/modules/image";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Upload } from "../components";

const MyWrite = (props) => {
  const dispatch = useDispatch();
  const target_id = useParams().postId;

  //이미 App.js에서 세션이 있는지 확인했으니, is_login만 확인하면 된다.
  const is_login = useSelector((state) => state.user.is_login);
  const target = useSelector((state) => state.post.target);
  console.log(target);
  const preview = useSelector((state) => state.image.preview);

  const { history } = props;

  // const [image, setImage] = React.useState("");
  const [nickname, setNickname] = React.useState(target ? target.nickname : "");
  const [intro, setIntro] = React.useState(target ? target.intro : "");
  const [post_list, setPostList] = React.useState({});

  const editInfo = () => {
    console.log(nickname, intro);

    // setPostList(temp_list);

    dispatch(
      postActions.editInfoDB(
        target_id,
        nickname,
        intro
      )
    );
  };

  return (
    <React.Fragment>
      <Button is_flex width="18%" margin="20px 20px 20px 300px" _onClick={editInfo}
          _disabled={
            nickname === "" ||
            intro === ""
              ? true
              : false
          }>
        {" "}
        완료
      </Button>
      <Grid center>
      <Image size="150" shape="circle" display="flex" margin="0 auto"></Image>
      </Grid>
      <Button is_flex width="30%" margin="auto">
        프로필 사진 변경
      </Button>
      <div style={{ margin: "30px 0 20px 38px" }}>닉네임</div>
      <label>
        <input
          type="text"
          name="nickname"
          style={{ display: "block", margin: "auto", width: "80%" }}
        />
      </label>

      <div style={{ margin: "30px 0 20px 38px" }}>소개</div>
      <Grid padding="0 40px 0 40px">
        <Input value={intro} multiline width="80%" border="1px solid black" placeholder="소개를 작성해주세요" _onChange={(e) => {
            setIntro(e.target.value);
          }}></Input>
      </Grid>
      
    </React.Fragment>
  );
};

export default MyWrite;
