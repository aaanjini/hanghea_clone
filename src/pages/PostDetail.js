import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import Header from "../components/Header";
import VeiwContent from "../elements/VeiwContent";
import CommentList from "../components/CommentList";
import { IoIosArrowBack } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';

const PostDetail = () => {
    const [is_like, setIsLike] = React.useState(false);

    const likeClick = () => {
        setIsLike(is_like => !is_like);
    }
    return(
        <React.Fragment>
            <Header details>
                <Button width="25px" height="25px" size="25px" padding="0" bg="transparent"><IoIosArrowBack style={{color:"#262626"}}/></Button>
            </Header>

            <Grid margin="51px 0 70px" height="calc(100% - 121px)" is_scroll>
                <Grid padding="8px 15px">
                    <Image shape="circle" size="40" inline_block></Image>
                    <Grid width="auto" display="inline-block"  margin="0 0 0 8px" align="super">
                        <Text margin="0" size="16px" color="#262626" bold>닉네임입니다</Text>
                        <Text margin="0" color="#585858" size="10px" >2022.02.18</Text>
                    </Grid>
                </Grid>
                <Image shape="rectangle" src="https://d2gvnkv9lw8qqa.cloudfront.net/item_165362_1_0_title_0.jpeg?d=250x250"/>
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
                        }}>30</span>
                    </Grid>
                    <Grid margin="0 10px 0 0" width="auto" display="inline-block">
                        <img src="https://colley.kr/_nuxt/img/comment.5264184.png" style={{height: "20px", width: "auto",marginRight: "5px"}}/>
                        <span style={{
                            color: "#9a9a9a",
                            letterSpacing:" -.015em",
                            fontSize: "14px",
                            lineHeight: "20px",
                            verticalAlign: "super",
                        }}>30</span>
                    </Grid>                            
                </Grid>
                <Grid center>
                    <Text>💙 라따뚜이 💙</Text>
                    <VeiwContent>라따뚜이는 굿즈가 별로 없어서 너무 비쌌는데..   
                        드디어 저렴하고 예쁜 굿즈가 나왔습니다 👏👏   
                        이건 개봉하고 미개봉용 하나 더 사야겠어요 😻</VeiwContent>
                </Grid>
                <CommentList/>
            </Grid>
        </React.Fragment>
    );
}

export default PostDetail;