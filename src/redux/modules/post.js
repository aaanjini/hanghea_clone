import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { postApis } from "../../shared/apis";


const GET_POST = "GET_POST";
const SET_POST = "SET_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";

const getPost = createAction(GET_POST,(post_list, type)=>({post_list, type}));
const setPost = createAction(SET_POST, (post)=>({post}));
const deletePost = createAction(DELETE_POST, (postId, post)=>({postId, post}));
const editPost = createAction(EDIT_POST, (postId, post)=>({postId, post}));


const initialState = {
    list:[],
}

//리스트 가져오기
const getPostDB = () => {
    return function (dispatch, getState, {history}){
        postApis.getPost()
        .then((res)=>{
            console.log("포스트리스트 가져오기", res.data);
            dispatch(getPost(res.data)); //받아온 리스트 메인에 뿌려주기
        }).catch((error)=>{
            console.log("포스트 리스트 가져오기 실패", error);
        });
    };
}

//좋아요순 리스트 가져오기
const getPostLikeDB = () => {
    return function (dispatch, getState, {history}){
        postApis.getPostLike()
        .then((res)=>{
            console.log("포스트리스트 좋아요순 가져오기", res.data);
            dispatch(getPost(res.data,"like")); //받아온 리스트 메인에 뿌려주기
        }).catch((error)=>{
            console.log("포스트 리스트 좋아요순 가져오기 실패", error);
        });
    };
}

const addPostDB = (post) => {
    return function (dispatch, getState, {history}){
        console.log("포스트등록",post);
        postApis.addPost(post)
        .then((res)=>{
            console.log("포스트 등록성공", res);
        }).catch((error)=>{
            console.log("포스트 등록실패", error);
        });
    }
};

const editPostDB = (postId, post) => {
    return function (dispatch, getState, {history}){
        console.log("포스트수정",postId, post);
        // postApis.editPost(postId, post)
        // .then((res)=>{
        //     console.log("포스트 수정성공", res);
        // }).catch((error)=>{
        //     console.log("포스트 수정실패", error);
        // });
    }
};

const deletePostDB = (postId) => {
    return function (dispatch, getState, {history}){
        console.log("포스트삭제",postId);
        // postApis.deletePost(postId)
        // .then((res)=>{
        //     console.log("포스트 수정성공", res);
        // }).catch((error)=>{
        //     console.log("포스트 수정실패", error);
        // });
    }
};






export default handleActions ({
    [GET_POST]: (state, action) => produce(state, (draft) => {
        console.log(action.payload.type);
        // if(action.payload.type === "like"){
        //     draft.list.sort((a,b) => {
        //         return b.likeCnt - a.likeCnt
        //     })
        // }
        draft.list = action.payload.post_list
      
    }),
    [SET_POST]: (state, action) => produce(state, (draft) => {
        
    }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        
    }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        
    }),
},initialState);


const actionCreators = { //액션 생성자 내보내기
    getPostDB,
    getPostLikeDB,
    addPostDB,
    editPostDB,
    deletePostDB
};

export {actionCreators};

