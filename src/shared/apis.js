import axios from "axios";
import { getCookie } from "./cookie";


const apis = axios.create({
    baseURL:
        "http://13.124.76.130:8080", //*요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록*/
});

apis.interceptors.request.use(function (config) {
    const token = getCookie("token");
    config.headers["Content-Type"] = "application/json;charset=UTF-8; charset=UTF-8";
    config.headers.common["authorization"] = `${token}`;
    return config;
});


export const userApis = {
    //로그인요청
    login: (username, password) =>
        apis.post("/login", {username:username, password:password})
    ,
    // 회원가입 요청
    signup: (username, nickname, password,passwordcheck) =>
        apis.post("/signup", {
            username:username,
            nickname:nickname, 
            password:password,
            passwordcheck:passwordcheck,
        })
    ,
    //유저정보 백단에서 가져오기
    getUser: () => apis.get("/user/loginInfo"),

    logout: () => 
        apis.post("/user/logout")
    ,
  
}

export const postApis = {
    //포스트 가져오기
    getPost: () => apis.get("/"),

    //좋아요순으로 포스트 가져오기
    getPostLike: () => apis.get("/likes"),

    //게시글 추가하기
    addPost: (post) => {
        apis.post("/post",post)
    },
    //게시글 삭제
    deletePost: (postId) => {
        apis.delete(`/post/${postId}`)
    },
    //게시글 수정
    editPost: (postId, post) => {
        apis.put(`/post/${postId}`, post)
    },

}