import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import Header from "../components/Header";
import VeiwContent from "../elements/VeiwContent";
import CommentList from "../components/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';

const PostDetail = (props) => {
    
    const dispatch = useDispatch();   
    const is_login = useSelector((state) => state.user.is_login);
    const user_info = useSelector((state) => state.user.user);
    const postList = useSelector((state) => state.post.list);
    const params_id = props.match.params.postId;    
    const post_idx = postList.findIndex((p) => p.postId === parseInt(params_id));    
    const post = postList[post_idx]; 


    const [is_like, setIsLike] = React.useState(false);

    const likeClick = () => {
        setIsLike(!is_like);
    }

    console.log("디테일", post);

    return(
        <React.Fragment>
            <Header details is_flex>
            </Header>

            <Grid margin="51px 0 70px" height="calc(100% - 121px)" is_scroll>
                <Grid padding="8px 15px">
                    <Image shape="circle" size="40" inline_block></Image>
                    <Grid width="auto" display="inline-block"  margin="0 0 0 8px" align="super">
                        <Text margin="0" size="16px" color="#262626" bold>{post.nickname}</Text>
                        <Text margin="0" color="#585858" size="10px" >{post.postDate}</Text>
                    </Grid>
                </Grid>
                <Image shape="rectangle" 
                    src={post.imgUrl !== "" ? post.imgUrl : ""}
                />
                <Grid padding="8px 15px" margin="10px 0 20px">
                    <Grid margin="0 10px 0 0" width="auto" display="inline-block" >
                        <Button width="auto" bg="transparent" padding="0" inline_block size="20px" margin="0 5px 0 0 "
                            _onClick={()=>{
                                likeClick()
                            }}
                        >
                            {is_like?  (<BsHeartFill style={{color:"ff8c32"}}/>) : (<BsHeart style={{color:"#9a9a9a"}}/>)}                            
                        </Button>
                        <span style={{
                            color: "#9a9a9a",
                            letterSpacing:" -.015em",
                            fontSize: "14px",
                            lineHeight: "20px",
                            verticalAlign: "super",
                        }}>{post.likeCnt}</span>
                    </Grid>
                    <Grid margin="0 10px 0 0" width="auto" display="inline-block">
                        <img src="https://colley.kr/_nuxt/img/comment.5264184.png" style={{height: "20px", width: "auto",marginRight: "5px"}}/>
                        <span style={{
                            color: "#9a9a9a",
                            letterSpacing:" -.015em",
                            fontSize: "14px",
                            lineHeight: "20px",
                            verticalAlign: "super",
                        }}>{post.commentCnt}</span>
                    </Grid>                            
                </Grid>
                <Grid center>
                    <Text>{post.title}</Text>
                    <VeiwContent>내용</VeiwContent>
                </Grid>
                <CommentList/>
            </Grid>
        </React.Fragment>
    );
}

export default PostDetail;