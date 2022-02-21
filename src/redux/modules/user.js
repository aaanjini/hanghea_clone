import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import axios from "axios";
import { userApis } from "../../shared/apis";
import {setCookie, deleteCookie} from "../../shared/cookie";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";


const userlogIn = createAction(LOGIN, (user)=>({user}));
const userlogOut = createAction(LOGOUT, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));

const initialState = {
    user:null,
    is_login : null,
};

// middleware actions
const loginCheck = () => {
    return function (dispatch, getState, { history }) {
      const _nickname = localStorage.getItem("nickname");
      dispatch(
        setUser({
          nickname: _nickname,
        })
      );
      // userApis
      //   .userInfo()
      //   .then((res) => {
      //     console.log(res.data);
      //     dispatch(
      //       setUser({
      //         username: res.data.username,
      //         nickname: res.data.nickname,
      //         user_profile: res.data.user_profile,
      //       })
      //     );
      //   })
      //   .catch((err) => {
      //     console.log("유저정보를 가져오지 못했어요");
      //   });
    };
  };

//회원가입 요청 post
export const signupAction = (username, nickname, password, passwordcheck) => {
    return function(dispatch, getState, {history}) {
        console.log(username, nickname, password, passwordcheck);
        userApis.signup(username, nickname, password, passwordcheck)
        .then((res) => {
            console.log(res,"회원가입");
            window.alert("회원가입 되셨습니다.");
            history.push("/login");
        }).catch((error) => {
            window.alert("회원가입 오류입니다!");
            console.log("회원가입 실패:",error);
            
        });    

    };
};

//로그인 요청 post
const loginAction = (username, password) => {
    return function(dispatch, getState, {history}) {
        console.log(username, password);

        userApis.login(username, password)
        .then((res) => {
            console.log(res.headers, "로그인 토큰확인");
            setCookie("token", res.headers["authorization"], 1);

            userApis.getUser()
            .then((res)=>{  
                console.log("loginAction",res.data);

                dispatch(setUser({
                    username:res.data.username,
                    nickname:res.data.nickname
                }));
                
            }).catch((error) => console.log("유저정보오류!",error))
            history.push("/");
        })
        .catch((error) => {
            console.log("로그인오류입니다!", error);
            window.alert("로그인에 실패했습니다 :(");
        })
    };
};

//로그인 체크
const loginCheckDB = () => {
    return function (dispatch, getState, { history }) {
    userApis
        .getUser()
        .then((res) => {
            //console.log("loginCheckDB",res.data);
            dispatch(
                setUser({ //유저정보를 다시 세팅
                    username:res.data.username,
                    nickname:res.data.nickname
                })
            );
        })
        .catch((error) => console.log(error));          
    };
  };

//로그아웃 get
const loginOutAction = () => {
    return function(dispatch, getState, {history}) {
        deleteCookie("token"); // 쿠키에서 토큰 삭제
        dispatch(userlogOut());
        history.replace("/");
    };
};


export default handleActions ({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOGOUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
   
},initialState);


const actionCreators = { //액션 생성자 내보내기
    loginCheck,
    signupAction,
    loginAction,
    loginCheckDB,
    loginOutAction,
};

export {actionCreators};