import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { history } from "../redux/configureStore";

const Card = (props) => {
    return(
        <React.Fragment>            
            <Grid 
            width="50%"
            relative="relative"
            display="inline-block"
            _onClick={()=>{
                console.log("카드눌림");
                history.push(`/post/${props.postId}`)
                props={...props}
            }}>
                <Clip src="https://d2gvnkv9lw8qqa.cloudfront.net/item_tape_61_1587714959439.png"/>
                <Grid padding="8px 8px 4px">
                <Image 
                        shape="rectangle" 
                        src={props.imgUrl !== "" ? props.imgUrl : ""}
                        radius="15px"
                        width="100%"
                    />
                </Grid>
                <Grid padding="0 20px" margin="0 0 16px">
                    <Text bold size="14px" margin="5px 0 0">{props.title}</Text>
                    <Grid width="auto" padding="4px 0 6px" height="23px">
                        <Image 
                            inline_block 
                            size="16"
                            profile={props.profileUrl === null? "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg" : props.profileUrl}
                        />
                        <Text inline_block margin="0 0 0 5px" align="text-top"
                            color="#585858"
                            size="12px"
                        >{props.nickname}</Text>
                    </Grid>
                    <Grid>
                        <Grid margin="0 10px 0 0" width="auto" display="inline-block" >
                            <img src="https://colley.kr/_nuxt/img/like.4df78e7.png" style={{height: "10px", width: "auto",marginRight: "5px"}}/>
                            <span style={{
                                color: "#9a9a9a",
                                letterSpacing:" -.015em",
                                fontSize: "10px",
                                lineHeight: "10px",
                            }}>{props.likeCnt}</span>
                        </Grid>
                        <Grid margin="0 10px 0 0" width="auto" display="inline-block">
                            <img src="https://colley.kr/_nuxt/img/comment.5264184.png" style={{height: "10px", width: "auto",marginRight: "5px"}}/>
                            <span style={{
                                color: "#9a9a9a",
                                letterSpacing:" -.015em",
                                fontSize: "10px",
                                lineHeight: "10px",
                            }}>{props.commentCnt}</span>
                        </Grid>                            
                    </Grid>
                </Grid>

                
            </Grid>            
        </React.Fragment>
    );
}


const Clip = styled.img`
    width: 75px;
    height: 25px;
    top: -10px;
    transform: translateX(-50%) rotate(-4deg);
    position: absolute;
    left: 50%;
    z-index: 2;
`;



export default Card;