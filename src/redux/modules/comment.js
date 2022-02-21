import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { commentApis } from "../../shared/apis";


const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


const getComment = createAction(GET_COMMENT, (postId,comment_list)=>({postId,comment_list}));
const addComment = createAction(ADD_COMMENT, (postId,comment)=>({postId,comment}));
const deleteComment = createAction(DELETE_COMMENT, (postId,commentId)=>({postId,commentId}));


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
            const commentId = res.data;

            commentApis.getComment(postId)
            .then((res)=>{
                const _comment = res.data.filter((item) => {
                    return item.commentId === commentId;
                });

                dispatch(addComment(postId,_comment));               

            }).catch((err)=>{
                console.log("댓글 불러오기 실패",err);
                history.replace("/");
            });            
            window.alert("댓글 작성 성공! 😝")
        }).catch((err)=>{
            console.log("댓글 작성 실패",err);
        })
    }
};

const deleteCommentDB = (postId,commentId) => {
    return function (dispatch, getState, {history}){
        console.log(postId, commentId);

        commentApis.deleteComment(commentId)
        .then((res)=>{
            console.log("댓글 삭제 성공",res);
            dispatch(deleteComment(postId,commentId));
            window.alert("댓글이 삭제되었습니다 😣")
        }).catch((err)=>{
            console.log("댓글 삭제 실패",err);
            window.alert("댓글 삭제에 실패했습니다😣")
        })
    }
};


export default handleActions ({
    [GET_COMMENT]: (state,action) => produce(state, (draft) => {
        const postId = action.payload.postId;
        const comment_list = action.payload.comment_list;
        draft.list[postId] = comment_list;
    }),
    [ADD_COMMENT]: (state,action) => produce(state, (draft) => {
        const comment = action.payload.comment[0];
        draft.list[action.payload.postId].push(comment);
    }),
    [DELETE_COMMENT]: (state,action) => produce(state, (draft) => {
        const postId = action.payload.postId;
        const commentId = action.payload.commentId;
        draft.list[postId] = draft.list[postId].filter(
          (el) => {
            if (el.commentId === commentId) {
              return false;
            }
            return true;
          }
        );
    }),    

},initialState)


const actionCreators = { //액션 생성자 내보내기
    getCommentDB,
    addCommentDB,
    deleteCommentDB,
};

export {actionCreators};