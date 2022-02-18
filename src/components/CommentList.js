import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import Comment from "./Comment";

const CommentList = (props) => {
    return(
        <React.Fragment>
            <Grid margin="40px 0 0">
                <CommentWrap >
                    <Text margin="0 0 20px" bold>댓글</Text>                    
                </CommentWrap>
                <Grid padding="8px 15px">
                    <Comment/>
                </Grid>                
            </Grid>          
            
        </React.Fragment>
    );

};

const CommentWrap = styled.div`
    padding: 8px 15px;
    border-bottom: 1px solid #eee;
`;



export default CommentList;