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
import { RiCloseFill } from 'react-icons/ri';

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const postId = props.match.params.postId;
    const is_edit = postId ? true : false;
    const post_list = useSelector(store => store.post.list);    
    const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
    const post = post_list[post_idx];
    

    const [title,setTitle] = React.useState(post? post.title : "");
    const [content,setContent] = React.useState(post? post.content : "");
    const [image,setImage] = React.useState("");
    const [preview,setPreview] = React.useState(post? post.imgUrl : "");
    
    const fileInput = React.useRef();


    console.log(fileInput);



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
    

    //모달 -------------------------------------------
    const ModalOn = () => {        
        const tag_veiw = document.getElementById('tag_veiw');
        const tag_wrap = document.getElementById('tag_wrap');   

        
        tag_wrap.style.display = "block";
        tag_veiw.style.top = "40px";
    };

    const [tag,setTag] = React.useState();
    const [tagList, setTagList] = React.useState(post? [...post.tags] : []);

    const onChange = (e) => {
        setTag(e.target.value);
    };

    const tagListPush = (e) => {
        setTagList(tagList => [...tagList, tag]);
        setTag('');
    };

    const delTag = (i) => {
        console.log(i);

        const _tag = tagList.filter((el, idx) => {
            return idx !== i;
        });
       
        setTagList(tagList => [..._tag]); 

    }; // 태그 삭제    

    const modalClose = () => {
        const tag_veiw = document.getElementById('tag_veiw');
        const tag_wrap = document.getElementById('tag_wrap');       

        tag_veiw.style.top = "700px";
        
        tag_wrap.style.display = "none";
    }
    //-------------------모달끝

    const addPost = () => {
        const fromData = new FormData();

        if(title === ""){
            window.alert("제목을 입력해주세요!");
            return;
        }
        if(image === ""){
            window.alert("이미지를 올려주세요!");
            return;
        }

        fromData.append("title",title);
        fromData.append("content",content);
        fromData.append("image",image);
        fromData.append("tags",tagList);

        dispatch(postActions.addPostDB(fromData));
    };

    const editPost = () => { 
        
        
        if(title === ""){
            window.alert("제목을 입력해주세요!");
            return;
        }
        if(image === ""){
            window.alert("이미지를 올려주세요!");
            return;
        }
        const fromData = new FormData();

        fromData.append("title",title);
        fromData.append("content",content);
        fromData.append("image",image);
        fromData.append("tags",tagList);


        dispatch(postActions.editPostDB(postId,fromData));
    }

    React.useEffect(() => {
        if(is_edit){
            dispatch(postActions.getOnePostDB(postId));

           const icon = document.getElementById('photoIcon');
           icon.style.display = "none";

        }        
    },[]);

    console.log(post);

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

                {/* 모달영역시작----------- */}




                <Grid margin="10px 0" padding="15px 20px" bg="white">
                    <Grid is_flex>
                        <Text bold margin="0 0 10px">태그</Text>
                        <Button width="auto" padding="0" bg="transparent" color="#262626"
                            _onClick={()=>{
                                ModalOn()
                            }}
                        >추가하기</Button>
                    </Grid>
                    {tagList.length > 0? (
                        <Grid>
                            {tagList.map((el,i) => {
                                return(
                                    <Tag className="tag" key={i}>{el}
                                        <Btn onClick={()=>{delTag(i)}}><RiCloseFill style={{color:"#555",fontSize:"21px"}}/></Btn>
                                    </Tag>
                                );                                    
                            })}
                        </Grid>
                    ) : (
                        <Text margin="0" size="12px" color="#ccc">태그를 등록하시면 트렌드에 올라갈 수 있어요</Text>
                    )}                    
                </Grid>
                <WriteWrap id="tag_wrap">
                    <Back id="tag_back"/>
                    <WriteVeiw id="tag_veiw">
                        <TagHeader>
                            <Text margin="0" size="16px" bold>태그 등록하기</Text>
                            <Button width="auto" color="#00c8d2" bold padding="0" bg="transparent" size="16px"
                                _onClick={()=>{
                                    modalClose()
                                }}
                            >완료</Button>
                        </TagHeader>
                        <WriteBody>
                            <TagWrap>
                                {tagList.map((el,i) => {
                                    return(
                                        <Tag className="tag" key={i}>{el}
                                            <Btn onClick={()=>{delTag(i)}}><RiCloseFill style={{color:"#555",fontSize:"21px"}}/></Btn>
                                        </Tag>
                                    );                                    
                                })}
                            </TagWrap>
                            <Write>
                                <Input
                                    placeholder="태그를 입력해주세요 :)"  radius="20px" tag 
                                    _onChange={onChange}
                                    value={tag}
                                    onSubmit={tagListPush}
                                ></Input>
                            </Write>                        
                        </WriteBody>
                    </WriteVeiw>
                </WriteWrap>
                {/* -----------모달영역끝 */}
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

const WriteWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 4;
    display: none;
    
`;

const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.3);
`;

const WriteVeiw = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);
    top: 700px;
    left: 0;
    background-color: white;
    border-radius: 10px 10px 0 0;
    transition: 0.3s;
`;

const TagHeader = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding: 12px;
    text-align: center;
    box-sizing: border-box;
    >button {
        position: absolute;
        right: 12px;
        top: 12px;
        z-index: 2;
    }
`;

const WriteBody = styled.div`
    height: calc(100% - 41px);  
    box-sizing: border-box;
    position: relative;
`;

const Write = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    background-color: #f2f2f2;
    position:absolute;
    bottom:0;
    left: 0;
`;

const TagWrap = styled.div`
    padding :10px 16px 20px;
`;

const Tag = styled.span`
    display: inline-block;
    color: #333;
    border: 1px solid #aaa;
    border-radius: 30px;
    line-height: 27px;
    padding: 4px 10px;
    font-size: 12px;
    letter-spacing: -.015em;
    margin: 4px 3px;
    font-size: 14px;
`;
const Btn = styled.button`
    background-color: transparent;
    border:none;
    width: fit-content;
    vertical-align: middle;
    padding:0;
    cursor: pointer;
`;



export default PostWrite;