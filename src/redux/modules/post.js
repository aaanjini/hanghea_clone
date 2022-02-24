import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { postApis } from "../../shared/apis";


const GET_POST = "GET_POST";
const GET_DETAIL = "GET_DETAIL";
const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const getPost = createAction(GET_POST,(post_list)=>({post_list}));
const getDetail = createAction(GET_DETAIL,(target_list)=>({target_list}));
const setPost = createAction(SET_POST, (post)=>({post}));
const editPost = createAction(EDIT_POST, (postId, post)=>({postId, post}));
const deletePost = createAction(DELETE_POST, (post_list)=>({post_list}));



const initialState = {
    list:[],
}

//리스트 가져오기
const getPostDB = () => {
    return function (dispatch, getState, {history}){
        postApis.getPost()
        .then((res)=>{
            const post_list = res.data
            dispatch(getPost(post_list)); //받아온 리스트 리덕스 저장
        }).catch((error)=>{
            console.log("포스트 리스트 가져오기 실패", error);
        });
    };
}

const getOnePostDB = (postId) => {
    return function (dispatch, getState, {history}){
        postApis.getOnePost(postId)
        .then((res)=>{
            const post = res.data
            dispatch(getDetail(post));
        }).catch((error)=>{
            console.log("포스트 1개 가져오기 실패", error);
        });
    }
}

const addPostDB = (post) => {
    return function (dispatch, getState, {history}){
        postApis.addPost(post)
        .then((res)=>{
            const postId = res.data;
            postApis.getOnePost(postId)
            .then((res)=>{
                dispatch(setPost(res.data));
            }).catch((err)=>{
                console.log("포스트 등록 가져오기 오류", err);
            })
            window.alert("등록완료! 😚");
            history.replace("/main");
        }).catch((error)=>{
            console.log("포스트 등록실패", error);
        });
    }
};

const editPostDB = (postId, post) => {
    return function (dispatch, getState, {history}){
        postApis.editPost(postId, post)
        .then((res)=>{
            postApis.getOnePost(postId)
            .then((res)=>{
                dispatch(editPost(res.data));
            }).catch((err)=>{
                console.log("포스트 수정 가져오기 오류", err);
            })
            window.alert("수정완료! 😚");
            history.push("/main");
        }).catch((error)=>{
            console.log("포스트 수정실패", error);
        });
    }
};

const deletePostDB = (postId) => {
    return function (dispatch, getState, {history}){
        console.log("포스트삭제",postId);
        postApis.deletePost(postId)
        .then((res)=>{
            const post_index = getState().post.list.findIndex(
                (item) => item.postId === postId
              );
            const _post = getState().post.list.filter((item, index) => {
                return index !== post_index;
            });

            dispatch(deletePost(_post))

            window.alert("삭제완료! 😞");
            history.replace("/main");
        }).catch((error)=>{
            console.log("포스트 삭제실패", error);
        });
    }
};


export default handleActions ({
    [GET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;   
    }),
    [GET_DETAIL]: (state, action) => produce(state, (draft) => {
      draft.target = action.payload.target_list;
    }),
    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.postId === parseInt(action.payload.postId));
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
    }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
    }),
},initialState);


const actionCreators = { //액션 생성자 내보내기
    getPostDB,
    getOnePostDB,
    addPostDB,
    editPostDB,
    deletePostDB,
    
};

export {actionCreators};

