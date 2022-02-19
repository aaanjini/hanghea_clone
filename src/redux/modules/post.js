import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { userApis } from "../../shared/apis";
import {setCookie, deleteCookie} from "../../shared/cookie";

const GET_POST = "GET_POST";
const SET_POST = "SET_POST";
const DELETE_POST = "DELETE_POST";



const getPost = createAction(GET_POST, (post_list)=>({post_list}));
const setPost = createAction(SET_POST, (user) => ({user}));
const deletePost = createAction(DELETE_POST, (user) => ({user}));


const initialState = {
    list: [],
};


const getPostDB = () => {
    return function(dispatch, getState, {history}){
        
    }
}