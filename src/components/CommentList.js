import React from "react";
import { useSelector , useDispatch} from "react-redux";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image, CommentInput } from "../elements/Index";
import Comment from "./Comment";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
    const dispatch = useDispatch();
    const { postId } = props;
    const commentList = useSelector((state) => state.comment.list);

    React.useEffect(()=>{
        if (commentList[postId]) {
            return;
          }
        dispatch(commentActions.getCommentDB(postId));
    },[]);

    return(
        <React.Fragment>            
            {commentList[postId] && 
                commentList[postId].map((el, i) => {
                    return(                
                        <Comment
                            key={el.commentId}
                            {...el}
                            postId={postId}
                            idx={i}
                        />
                    );
            })}

        
        </React.Fragment>
    );

};


CommentList.defaultProps = {
    postId: "",
};

export default CommentList;