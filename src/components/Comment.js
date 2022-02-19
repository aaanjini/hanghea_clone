import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements";


const Comment = (props) => {
    return(
        <React.Fragment>
            <Grid>
                <Image shape="circle" size="30" inline_block></Image>
                <Grid width="auto" display="inline-block"  margin="0 0 0 8px" align="super">
                    <Text margin="0" size="14px" color="#262626">댓글내용입니다.</Text>
                    <Text margin="0" color="#585858" size="10px" ><span>닉네임</span><span>12시간전</span></Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );

};

const after = styled.span`
    font-size: 10px;
    color:#999;
    :first-child {
        position: relative;
        ::after {
            position: absolute;
            content:"";
        }
    }
`;

export default Comment;