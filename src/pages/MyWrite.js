import React from "react";
import styled from "styled-components";
import { Image, Grid, Button, Input } from "../elements/Index";
import Header from "../components/Header";


import { useDispatch } from "react-redux";
import { actionCreators as myPageActions } from "../redux/modules/mypage";
import { useLocation } from "react-router";


const MyWrite = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const my_Info = location.state.myInfo; 

    const [image, setImage] = React.useState(null);
    const [preview, setPreview] = React.useState(my_Info? my_Info.profileUrl !== null ? my_Info.profileUrl : "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg" : "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg");    
    const [nickname, setNickname] = React.useState(my_Info ? my_Info.nickname : "");
    const [intro, setIntro] = React.useState(my_Info? my_Info.introduce !== null ? my_Info.introduce : "" : "");

    const fileInput = React.useRef();

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file); //파일 내용 읽어오기
        // onloadend: 읽기가 끝나면 발생하는 이벤트 핸들러
        reader.onloadend = () => {
            // reader.result는 파일의 컨텐츠(내용물)입니다!
           setPreview(reader.result);
        };

        //console.log("파일확인",file);

        if (file) {
            setImage(file);
        }
    };

    const editInfo = () => { 
        let formData = new FormData();

        if(nickname === ""){
            window.alert("닉네임을 입력해주세요!");
            return;
        }
        formData.append("image",image);
        formData.append("nickname",nickname);
        formData.append("introduce",intro);


        dispatch(myPageActions.myEditDB(formData));
    };

  return (
    <React.Fragment>
        <Header text="프로필 수정" edit is_flex>
            <Button bg="transparent" color="#00c8d2" width="auto" padding="0" bold size="16px"
                _onClick={editInfo}            
            >완료</Button>
        </Header>

        <Grid margin="70px 0">        
            <Grid center>
                <Image size="130" shape="circle" inline_block
                    profile={preview}
                ></Image>
                <FileBox>
                    {/* 이미지 업로드 */}                
                    <label htmlFor="file_input" className="upload-box" >                        
                        프로필 사진 변경
                    </label>
                    <input type="file" id="file_input" ref={fileInput} onChange={selectFile}/>               
                </FileBox>     
            </Grid>
            <Grid padding="0 16px" margin="20px 0">                
                <Grid margin="20px 0">
                    <Input              
                        radius="6px"
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요."
                        value={nickname}
                        edit
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

const FileBox = styled.div`
    position: relative;
    .upload-box {
        display: block;
        width: 110px;
        height: 100%;
        margin: 10px auto 0;
        padding: 10px;
        border:1px solid #00c8d2;
        border-radius: 10px;
        color: #00c8d2;
        font-size: 14px;
    }
    input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    }
`;

export default MyWrite;
