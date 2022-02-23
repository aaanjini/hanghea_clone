import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { mypageApis } from "../../shared/apis";
import { deleteCookie } from "../../shared/cookie";


const SET_MYPOST = "SET_MYPOST";
const SET_MYINFO = "SET_MYINFO";

const setMyPost = createAction(SET_MYPOST, (my_list) => ({my_list}));
const setMyInfo = createAction(SET_MYINFO, (my_info) => ({my_info}));

const initialState = {
  userInfo:{
    nickName:null,
    introduce:"",
    profileUrl:"",
  },
  list: [],
};


const myPostDB = () => {
  return function (dispatch, getState, { history }) {
    mypageApis
      .getMypost()
      .then((res) => {
        console.log("마이포스트 확인",res.data);
        const my_list = res.data.mainResponseDtoList;
        const myInfo = {
          introduce:res.data.introduce,
          nickname:res.data.nickName,
          profileUrl:res.data.profileUrl,
        };
        dispatch(setMyPost(my_list));
        dispatch(setMyInfo(myInfo));
        
      })
      .catch((err) => console.log(err));
  };
};

const myEditDB = (form) => {
  return function (dispatch, getState, { history }) {
    mypageApis.editMyInfo(form)
    .then((res)=>{
      console.log("수정확인",res);
      window.alert("프로필 수정이 되었습니다!🥳");
      history.replace("/mypage");
    }).catch((err)=>{
      console.log("마이페이지 수정오류", err);
      window.alert("프로필 수정실패😕");
    });
  }
};




export default handleActions(
  {
    [SET_MYPOST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.my_list;
    }),
    [SET_MYINFO]: (state, action) => produce(state, (draft) => {
      draft.info = action.payload.my_info;
    }),
  },
  initialState
);

const actionCreators = {
  myPostDB,
  myEditDB
};


export { actionCreators };
