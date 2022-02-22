import React from "react";
// import styled from "styled-components";
import { Image, Grid, Button, Input } from "../elements/Index";
import Header from "../components/Header";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

// import { useParams } from "react-router-dom";
import Upload from "../components/Upload";

const MyWrite = (props) => {
  // const { history } = props;
  const dispatch = useDispatch();
  const fileInput = React.useRef();
  const postId = props.match.params.postId;
  const is_edit = postId ? true : false;
  const post_list = useSelector(store => store.post.list);    
  const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
  const post = post_list[post_idx];

  //   //이미 App.js에서 세션이 있는지 확인했으니, is_login만 확인하면 된다.
  //   const is_login = useSelector((state) => state.user.is_login);
  //  const target = useSelector((state) => state.post.target);
    // const preview = useSelector((state) => state.image.preview);

  const userInfo = useSelector((state) => state.user.user);

  
  const [nickname, setNickname] = React.useState(
    userInfo ? userInfo.nickname : ""
  );
  const [intro, setIntro] = React.useState("");
  const [image,setImage] = React.useState("");
  const [preview, setPreview] = React.useState(post ? post.imgUrl : "");

  
  // const fileInput = useSelector((state) => state.user.user);

  // const hiddenFileInput = React.useRef(null);

  // const handleClick = event => {
  //   hiddenFileInput.current.click();
  // };

  // const handleChange = event => {
  //   const fileUploaded = event.target.files[0];
  //   props.handleFile(fileUploaded);
  // };
//   const editInfo = () => {
//     dispatch(postActions.editInfoDB(nickname, intro));
//   };

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    const icon = document.getElementById('photoIcon');

    reader.readAsDataURL(file); //파일 내용 읽어오기a
    // onloadend: 읽기가 끝나면 발생하는 이벤트 핸들러
    reader.onloadend = () => {
        // reader.result는 파일의 컨텐츠(내용물)입니다!

      icon.style.display = "none"
      setPreview(reader.result);
    };

    setImage(file);
    };

    const addPost = () => {
        const fromData = new FormData();

        if(nickname === ""){
            window.alert("제목을 입력해주세요!");
            return;
        }
        if(image === ""){
            window.alert("이미지를 올려주세요!");
            return;
        }

        fromData.append("nickname",nickname);
        fromData.append("intro", intro);
        fromData.append("image",image);

        dispatch(postActions.addPostDB(fromData));
    };

    const editPost = () => { 
        
        
        if(nickname === ""){
            window.alert("닉네임을 입력해주세요!");
            return;
        }
        // if(fileInput !== ""){
            
        // }
        const fromData = new FormData();

        fromData.append("nickname",nickname);
        fromData.append("intro", intro);
        fromData.append("image",image);
        


        dispatch(postActions.editPostDB(postId,fromData));
    }

    React.useEffect(() => {
        if(is_edit){
            dispatch(postActions.getOnePostDB(postId));

           const icon = document.getElementById('photoIcon');
           icon.style.display = "none";
        }        
    },[]);

    

  return (
    <React.Fragment>
      <Header text="프로필 수정" edit is_flex>
        <Button
          bg="transparent"
          color="#00c8d2"
          width="auto"
          padding="0"
          bold
          size="16px"
          _onClick={() => {editPost()}}
        >
          완료
        </Button>
      </Header>

      <Grid margin="70px 0" className="upload-box">
        <Grid center>
          
          <Image
            size="130"
            shape="circle"
            inline_block
            src={preview ? preview : ""}
            radius="15px"
            width="100%"
            ></Image>
          <input type="file" accept="image/*" style={{display: 'none'}} id="file_input"/>
          <label htmlFor="file_input" type="file">
          <Button
            bg="transparent"
            width="125px"
            padding="10px"
            margin="auto"
            border="1px solid #00c8d2"
            radius="10px"
            color="#00c8d2"
            // onClick={addPost}
          >
            프로필 사진 변경
          </Button>
          </label>
          <input id="icon-button-file" accept="image/*" type="file" ref={fileInput} onChange={selectFile} style={{display: 'none'}}/>
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
