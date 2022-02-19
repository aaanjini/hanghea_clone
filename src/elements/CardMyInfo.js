import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "./Index";
// import { history } from "../redux/configureStore";

const CardMyInfo = (props) => {
    return(
        <React.Fragment>            
            <Grid 
            width="50%"
            relative="relative"
            display="inline-block"
            _onClick={()=>{
                console.log("카드눌림");
            }}>
                <Clip src="https://d2gvnkv9lw8qqa.cloudfront.net/item_tape_61_1587714959439.png"/>
                <Grid padding="8px 8px 4px">
                <Image 
                        shape="rectangle" 
                        src="https://d2gvnkv9lw8qqa.cloudfront.net/item_165362_1_0_title_0.jpeg?d=250x250"
                        radius="15px"
                        width="100%"
                    />
                </Grid>
                <Grid padding="0 20px" margin="0 0 16px">
                    <Text bold size="14px" margin="0">제목입니다</Text>
                    <Grid width="auto" padding="4px 0 6px">
                        <Image 
                            inline_block 
                            size="16"
                            profile="https://d2gvnkv9lw8qqa.cloudfront.net/item_165362_1_0_title_0.jpeg?d=250x250"
                        />
                        <Text inline_block margin="0 0 0 5px" align="text-top"
                            color="#585858"
                            size="12px"
                        >닉네임</Text>
                    </Grid>
                    <Grid>
                        <Grid margin="0 10px 0 0" width="auto" display="inline-block" >
                            <img src="https://colley.kr/_nuxt/img/like.4df78e7.png" style={{height: "10px", width: "auto",marginRight: "5px"}} alt="React"/>
                            <span style={{
                                color: "#9a9a9a",
                                letterSpacing:" -.015em",
                                fontSize: "10px",
                                lineHeight: "10px",
                            }}>30</span>
                        </Grid>
                        <Grid margin="0 10px 0 0" width="auto" display="inline-block">
                            <img src="https://colley.kr/_nuxt/img/comment.5264184.png" style={{height: "10px", width: "auto",marginRight: "5px"}} alt="React"/>
                            <span style={{
                                color: "#9a9a9a",
                                letterSpacing:" -.015em",
                                fontSize: "10px",
                                lineHeight: "10px",
                            }}>30</span>
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



export default CardMyInfo;