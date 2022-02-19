import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//page
import Header from "../components/Header";

//아이콘
import { VscChromeClose } from 'react-icons/vsc';
import { postApis } from "../shared/apis";


const PostWrite = (props) => {
    const dispatch = useDispatch();
    // const preview = useSelector((state) => state.image.preview); //프리뷰

    const [title,setTitle] = React.useState("");
    const [content,setContent] = React.useState("");

    // console.log(title , "title");
    // console.log(content , "content");

    const addClick = () => {
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


    return(
        <React.Fragment>
            <Header details is_flex>                
                <Button width="auto" color="#00c8d2" bold padding="0" bg="transparent" size="16px"
                    _onClick={()=>{
                        addClick()
                    }}
                >등록</Button>
            </Header>
            <Grid margin="50px 0 70px" height="calc(100% - 120px)" is_scroll bg_img>
                <Grid relative="relative" padding="40px 20px 20px" bg="white">
                    <Clip src="https://d2gvnkv9lw8qqa.cloudfront.net/itemtape124.png"/>
                    <Image 
                        //src={preview ? preview : ""}                        
                        radius="15px"
                        width="100%"
                        is_preview
                    />
                </Grid>
                <Grid center padding=" 0 0 10px" bg="white">
                    <Input details bold placeholder="제목을 입력하세요." 
                        _onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                    ></Input>
                    <Input details placeholder="본문을 입력하세요." size="14px" 
                    _onChange={(e)=>{
                        setContent(e.target.value);
                    }}></Input>
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

export default PostWrite;