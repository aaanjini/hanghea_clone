import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { Grid, Text, Input, Button, Image } from "../elements/Index";


const Comment = (props) => {
    const {username, commentId, postId} = props;
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.user?.username);
    const is_me = userInfo === username;


    const deleteComment = () => {
        window.confirm("댓글을 정말 삭제하시겠습니까?");
        dispatch(commentActions.deleteCommentDB(postId,commentId));
    };

    return(
        <React.Fragment>
            <Grid margin="0 0 15px">
                <Image shape="circle" size="30" inline_block align="top"></Image>
                <Grid width="auto" display="inline-block"  margin="0 0 0 8px" >
                    <Text margin="0" size="13px" color="#262626">{props.comment}</Text>
                    <Text margin="0" color="#585858" size="12px" ><After>{props.nickname}</After><After>{props.commentDate}</After></Text>
                    {is_me? (
                        <Button color="#585858" size="12px" bg="transparent" width="auto" padding="5px 0" bold 
                            _onClick={()=>{
                                deleteComment(postId, commentId)
                            }}
                        >삭제</Button>
                    ) : ""}                   
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