import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image, CommentInput } from "../elements/Index";
import Comment from "./Comment";


const CommentList = (props) => {
    return(
        <React.Fragment>
            <Grid margin="40px 0 20px">
                <CommentWrap >
                    <Text margin="0 0 20px" bold>댓글</Text>                    
                </CommentWrap>
                <Grid padding="15px">
                    <Comment/>
                </Grid>                
            </Grid>
            <Grid padding="0 15px" margin="0 0 20px">
                <CommentInput postId={props.postId}/>
            </Grid>            
        </React.Fragment>
    );

};

const CommentWrap = styled.div`
    padding: 8px 15px;
    border-bottom: 1px solid #eee;
`;



export default CommentList;