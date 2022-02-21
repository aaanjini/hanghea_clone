import React from "react";
import styled from "styled-components";
import {Input} from "../elements/Index"
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { FiArrowUp } from 'react-icons/fi';

const CommentInput = (props) => {
    const dispatch = useDispatch();
    const [comment,setComment] = React.useState();

    const onChange = (e) => { //인풋 값 가져오기
        setComment(e.target.value);
    };

    const addComment = () => {
        if (comment === "") {
            alert("답글을 입력해주세요.");
            return;
        }
       dispatch(commentActions.addCommentDB(props.postId,comment));
       setComment("");
    };   

    return(
        <React.Fragment>
            <InputWrap>                
                <Input 
                    placeholder="댓글 내용을 입력해주세요 :)"  
                    radius="5px"
                    _onChange={onChange}
                    value={comment}
                    onSubmit={addComment}
                    comment
                ></Input>
                <Btn onClick={addComment}><FiArrowUp/></Btn>
            </InputWrap>
            
        </React.Fragment>
    );
};

const InputWrap = styled.div`
    position: relative;
    width: 100%;
    padding: 3px 5px;
    border:1px solid #f2f2f2;
    border-radius: 20px;
    color: #999;
    box-sizing: border-box;
    background-color: white;
    font-size: 16px;    
`;

const Btn = styled.button`
    margin: 3px 10px 0 0;
    display: inline-block;
    width:30px;
    height: 30px;
    padding:2px;
    border-radius: 50%;
    vertical-align: middle;
    font-size: 25px;
    color: white;
    background-color: #999;
    border: none;
    cursor: pointer;
`;

export default CommentInput;