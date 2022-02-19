import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { commentApis } from "../../shared/apis";


const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


const getComment = createAction(GET_COMMENT, (postId,comment_list)=>({postId,comment_list}));
const addComment = createAction(ADD_COMMENT, (postId,comment)=>({postId,comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId)=>({commentId}));


const initialState = {
    list:{},
};

const getCommentDB = (postId) => {
    return function (dispatch, getState, {history}){
        console.log("댓글",postId);

        commentApis.getComment(postId)
        .then((res)=>{
            console.log("댓글 불러오기 성공",res);
            dispatch(getComment(postId,res.data));
        }).catch((err)=>{
            console.log("댓글 불러오기 실패",err);
            history.replace("/");
        })

    }
};

const addCommentDB = (postId,comment) => {
    return function (dispatch, getState, {history}){
        console.log(postId,comment);

        commentApis.addComment(postId,comment)
        .then((res)=>{
            console.log("댓글 작성 성공",res);
            dispatch(addComment(postId,comment));
            window.alert("댓글 작성 성공! 😝")
        }).catch((err)=>{
            console.log("댓글 작성 실패",err);
        })
    }
}


export default handleActions ({
    [GET_COMMENT]: (state,action) => produce(state, (draft) => {
        const postId = action.payload.postId;
        const comment_list = action.payload.comment_list;
        draft.list[postId] = comment_list;
    }),
    [ADD_COMMENT]: (state,action) => produce(state, (draft) => {
        draft.list[action.payload.postId].push(action.payload.comment);
    }),
    [DELETE_COMMENT]: (state,action) => produce(state, (draft) => {

    }),
},initialState)


const actionCreators = { //액션 생성자 내보내기
    getCommentDB,
    addCommentDB
};

export {actionCreators};