import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";


const Comment = (props) => {
    return(
        <React.Fragment>
            <Grid margin="0 0 15px">
                <Image shape="circle" size="30" inline_block></Image>
                <Grid width="auto" display="inline-block"  margin="0 0 0 8px" >
                    <Text margin="0" size="13px" color="#262626">댓글내용입니다.</Text>
                    <Text margin="0" color="#585858" size="10px" ><After>닉네임</After><After>12시간전</After></Text>
                </Grid>
            </Grid>
            <Grid>
                <Image shape="circle" size="30" inline_block></Image>
                <Grid width="auto" display="inline-block"  margin="0 0 0 8px">
                    <Text margin="0" size="13px" color="#262626">댓글내용입니다.</Text>
                    <Text margin="0" color="#585858" size="10px" ><After>닉네임</After><After>12시간전</After></Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

const After = styled.span`
    font-size: 10px;
    color:#999;
    padding-right: 10px;
    :first-child {
        position: relative;
        ::after {
            position: absolute;
            right: 5px;
            top:5px;
            width: 2px;
            height: 2px;
            background-color: #999;
            border-radius:1px;
            content:"";
        }
    }
`;

export default Comment;