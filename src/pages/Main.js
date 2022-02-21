import React from "react";
import { Grid, Text, Input, Button } from "../elements/Index";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";


const Main = (props) => {
    const  dispatch = useDispatch();
    const postList = useSelector((state) => state.post.list);
    const list = postList ? [...postList] : []
    const [type, setType] = React.useState("");

    const likeBtn = (e) => {
        const like = document.getElementById('sliderOne');
        const new_btn = document.getElementById('sliderTwo');
        const slide = document.getElementById('slideBg');       
        
        like.style.color = "#00c8d2";
        new_btn.style.color = "#999";
        slide.style.left = "3px";

        setType("like");
        window.localStorage.setItem('postType', "like");
    };
    const newBtn = (e) => {
        const like = document.getElementById('sliderOne');
        const new_btn = document.getElementById('sliderTwo');
        const slide = document.getElementById('slideBg');

        like.style.color = "#999";
        new_btn.style.color = "#00c8d2";

        slide.style.left = "72px";

        setType("time");
        window.localStorage.setItem('postType', "time");
    };

    React.useEffect(() => {        
        const post_type = localStorage.getItem("postType");
        if(post_type === "like"){
            const like = document.getElementById('sliderOne');
            const new_btn = document.getElementById('sliderTwo');
            const slide = document.getElementById('slideBg');       
            
            like.style.color = "#00c8d2";
            new_btn.style.color = "#999";
            slide.style.left = "3px";

            setType("like");
        }
    },[type]);    
    

    // 최신순 정렬
    if(localStorage.getItem("postType") === "time" || type === "") {
        list.sort((a,b) => {
            return b.postId - a.postId
        })
        return(
            <React.Fragment>
                <Grid padding="16px 8px" margin="0 0 70px" height="calc(100% - 70px)" is_scroll>
                    <SearchBox></SearchBox>
                    {/* 포스트타입 변경 토글버튼 */}
                    <Grid width="150px" height="40px" radius="20px" padding="3px" relative="relative" margin="20px 0 30px" bg="#f2f2f2" >
                        <Slider id="slideBg"></Slider>
                        <Button 
                            id="sliderOne"
                            text="트렌드" 
                            width="70px" 
                            height="35px" 
                            color="#999" 
                            bg="transparent" 
                            relative="relative" 
                            padding="10px 0"
                            inline_block
                            _onClick={()=>{
                                likeBtn()
                            }}
                        >                        
                        </Button>
                        <Button 
                            id="sliderTwo"
                            text="신규" 
                            width="70px" 
                            height="35px" 
                            color="#00c8d2" 
                            bg="transparent" 
                            relative="relative" 
                            padding="10px 0"
                            inline_block
                            _onClick={()=>{
                                newBtn()
                            }}
                        >                        
                        </Button>
                    </Grid>
                    <Grid>
                        {list.map((p, idx) => {                
                            return(                            
                                <Card 
                                    {...p}
                                    key={idx}
                                    postId={p.postId}
                                />
                            );
                        })}
                    </Grid>                
                </Grid>            
            </React.Fragment>
        )
    }
    if(localStorage.getItem("postType") === "like" || type === "like") {
        list.sort((a,b) => {
            return b.likeCnt - a.likeCnt
        })    
        return(
            <React.Fragment>
                <Grid padding="16px 8px" margin="0 0 70px" height="calc(100% - 70px)" is_scroll>
                    <SearchBox></SearchBox>
                    {/* 포스트타입 변경 토글버튼 */}
                    <Grid width="150px" height="40px" radius="20px" padding="3px" relative="relative" margin="20px 0 30px" bg="#f2f2f2" >
                        <Slider id="slideBg"></Slider>
                        <Button 
                            id="sliderOne"
                            text="트렌드" 
                            width="70px" 
                            height="35px" 
                            color="#999" 
                            bg="transparent" 
                            relative="relative" 
                            padding="10px 0"
                            inline_block
                            _onClick={()=>{
                                likeBtn()
                            }}
                        >                        
                        </Button>
                        <Button 
                            id="sliderTwo"
                            text="신규" 
                            width="70px" 
                            height="35px" 
                            color="#00c8d2" 
                            bg="transparent" 
                            relative="relative" 
                            padding="10px 0"
                            inline_block
                            _onClick={()=>{
                                newBtn()
                            }}
                        >                        
                        </Button>
                    </Grid>
                    <Grid>
                        {list.map((p, idx) => {                
                            return(                            
                                <Card 
                                    {...p}
                                    key={idx}
                                    postId={p.postId}
                                />
                            );
                        })}
                    </Grid>                    
                </Grid>
                
            </React.Fragment>
        );

    }
    return(
        <></>
    );
    
}


const Slider = styled.div`
    width: 75px;
    height: 34px;
    background-color: white;
    position: absolute;
    left: 72px;
    top:3px;
    border-radius: 20px;
    z-index: 1;
    transition: 0.3s;
`;




export default Main;