import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//page
import Header from "../components/Header";
import Upload from "../shared/Upload";

//아이콘
import { VscChromeClose } from 'react-icons/vsc';
import { MdOutlineAddAPhoto } from 'react-icons/md';


const PostWrite = (props) => {
    const dispatch = useDispatch();
    // const preview = useSelector((state) => state.image.preview); //프리뷰
    const postId = props.match.params.postId;
    const is_edit = postId ? true : false;
    const post_list = useSelector(store => store.post.list);    
    const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
    const post = post_list[post_idx];

    const [title,setTitle] = React.useState(post? post.title : "");
    const [content,setContent] = React.useState(post? post.content : "");
    const [image,setImage] = React.useState();
    const [preview,setPreview] = React.useState();

    const fileInput = React.useRef();


    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        const icon = document.getElementById('photoIcon');

        reader.readAsDataURL(file); //파일 내용 읽어오기        
        // onloadend: 읽기가 끝나면 발생하는 이벤트 핸들러
        reader.onloadend = () => {
            // reader.result는 파일의 컨텐츠(내용물)입니다!

            icon.style.display = "none"
           setPreview(reader.result);
        };

        setImage(file);
    };

    
    const addPost = () => {
        if(title === ""){
            window.alert("제목을 입력해주세요!");
            return;
        }

        const post = {
            title:title,
            content:content,
            imgUrl:"",
        };

        dispatch(postActions.addPostDB(post));
    };

    const editPost = () => {
        if(title === ""){
            window.alert("제목을 입력해주세요!");
            return;
        }
        const post = {
            title:title,
            content:content,
            imgUrl:"",
        };
        dispatch(postActions.editPostDB(postId,post));
    }

    React.useEffect(() => {
        if(is_edit){
            dispatch(postActions.getOnePostDB(postId));
        }        
    },[]);

    return(
        <React.Fragment>
            <Header details is_flex>  
                {is_edit? (
                    <Button width="auto" color="#00c8d2" bold padding="0" bg="transparent" size="16px"
                        _onClick={()=>{
                            editPost()
                        }}
                    >수정하기</Button>
                ):(
                    <Button width="auto" color="#00c8d2" bold padding="0" bg="transparent" size="16px"
                        _onClick={()=>{
                            addPost()
                        }}
                    >등록</Button>
                )}              
                
            </Header>
            <Grid margin="50px 0 70px" height="calc(100% - 120px)" is_scroll bg_img>
                <Grid relative="relative" padding="40px 20px 20px" bg="white">
                    <Clip src="https://d2gvnkv9lw8qqa.cloudfront.net/itemtape124.png"/>

                    {/* 이미지 업로드 */}
                    <FileBox className="filebox">  
                        <label htmlFor="file_input" className="upload-box">
                            <Image 
                                src={preview ? preview : ""}
                                radius="15px"
                                width="100%"
                                is_preview                                
                            >
                               <MdOutlineAddAPhoto 
                               id="photoIcon"
                               style={{
                                    position: "absolute",
                                    width: "50px",
                                    fontSize: "50px",
                                    color: "#555",
                                    left: "43%",
                                    top: "45%",
                                }}/> 
                            </Image> 
                        </label>          
                        <input type="file" id="file_input" ref={fileInput} onChange={selectFile}/>
                    </FileBox>


                    {/* <Image 
                        //src={preview ? preview : ""}
                        radius="15px"
                        width="100%"
                        is_preview
                    /> */}
                </Grid>
                <Grid center padding=" 0 0 10px" bg="white">
                    <Input details bold placeholder="제목을 입력하세요." 
                        value={title}
                        _onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                    ></Input>
                    <Input details placeholder="본문을 입력하세요." size="14px"
                        value={content} 
                        _onChange={(e)=>{
                            setContent(e.target.value);
                        }}
                    ></Input>
                </Grid>

                {/* 태그 영역은 나중에 생각하기 */}
                <Grid margin="10px 0" padding="15px 20px" bg="white">
                    <Grid is_flex>
                        <Text bold margin="0 0 10px">태그</Text>
                        <Button width="auto" padding="0" bg="transparent" color="#262626">추가하기</Button>
                    </Grid>                    
                    <Text margin="0" size="12px" color="#ccc">태그를 등록하시면 트렌드에 올라갈 수 있어요</Text>
                </Grid>
            </Grid>
            
        </React.Fragment>
    );
}

const Clip = styled.img`
    width: 140px;
    top: 10px;
    transform: translateX(-50%) rotate(-4deg);
    position: absolute;
    left: 50%;
    z-index: 2;
`;

const FileBox = styled.div`
    position: relative;
    .upload-box {
        display: block;
        width: 100%;
        height: 100%;
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

export default PostWrite;