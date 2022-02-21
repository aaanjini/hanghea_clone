import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { mypageApis } from "../../shared/apis";


const GET_MYPOST = "GET_MYPOST";
const SET_MYPOST = "SET_MYPOST";

const setMyPost = createAction(SET_MYPOST, (my_list) => ({my_list}));


const initialState = {
  list: [],
};


const myPostDB = () => {
  return function (dispatch, getState, { history }) {
    mypageApis
      .getMypost()
      .then((res) => {
        console.log("마이포스트 확인",res);
        // let my_post = res.data.postResponseDto;
        // dispatch(setMyPost(my_post));
      })
      .catch((err) => console.log(err));
  };
};

const myEditDB = (profileUrl, nickname, introduce) => {
  return function (dispatch, getState, { history }) {
    console.log(profileUrl, nickname, introduce);

  }

}



export default handleActions(
  {
    [SET_MYPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.my_list = action.payload.my_post;
      }),

  },
  initialState
);

const actionCreators = {
  myPostDB,
};


export { actionCreators };
