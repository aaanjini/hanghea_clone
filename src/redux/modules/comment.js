import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { commentApis } from "../../shared/apis";


const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


const getComment = createAction(GET_COMMENT, (comment_list)=>({comment_list}));
const addComment = createAction(ADD_COMMENT, (comment)=>({comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId)=>({commentId}));


const initialState = {
    list:[],
};

const getCommentDB = () => {
    return function (dispatch, getState, {history}){

    }
};

const addCommentDB = (comment) => {
    return function (dispatch, getState, {history}){
        console.log(comment);
    }
}


export default handleActions ({
    [GET_COMMENT]: (state,action) => produce(state, (draft) => {

    }),
    [ADD_COMMENT]: (state,action) => produce(state, (draft) => {

    }),
    [DELETE_COMMENT]: (state,action) => produce(state, (draft) => {

    }),
},initialState)


const actionCreators = { //액션 생성자 내보내기
    getCommentDB,
    addCommentDB
};