import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// import { storage } from "../../shared/firebase";

// action type
const UPLOADING = "UPLOADING"; // 이미지 업로드 중인지 확인하는 액션
const UPLOAD_IMAGE = "UPLOAD_IMAGE"; // 업로드한 이미지의 URL을 저장하는 액션
const SET_PREVIEW = "SET_PREVIEW"; // 미리보기 정보 가져오는 액션
const SET_ALIGN = "SET_ALIGN"; // 이미지 레이아웃 정보 가져오는 액션

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const setAlign = createAction(SET_ALIGN, (align) => ({ align }));

// initialState
const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

// middleware

// 1. 파이어베이스 storage에 파일로 업로드 하기 (업로드하기 버튼 눌렀을 때, 파일객체로 업로드하는 방법)
// const uploadImageFB = (image) => {
//   return function (dispatch, getState, { history }) {
//     //1. upload 시작 (storage에 넣기)
//     dispatch(uploading(true));
//     // ref하고 put 하기 (파이어베이스 문서 참조)
//     const _upload = storage.ref(`images/${image.name}`).put(image);
//     _upload.then((snapshot) => {
//       // 무엇을 업로드 했는지 보자.
//       console.log(snapshot);
//       // 2. upload 종료
//       //   dispatch(uploading(false)); URL 리덕스에 저장할 때, 즉  dispatch(uploadImage(url)); 이때 리듀서 안에서 바꿔주면 dispatch 한번만 해도 됨
//       // 3. 이미지의 URL을 받아와서 넣어주자.
//       snapshot.ref.getDownloadURL().then((url) => {
//         dispatch(uploadImage(url));
//         console.log(url);
//       });
//     });
//   };
// };

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false; // 미들웨어에서 dispatch 하지 않고 리듀서에서 바로 하기
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [SET_ALIGN]: (state, action) =>
      produce(state, (draft) => {
        draft.align = action.payload.align;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  //   uploadImageFB,
  setPreview,
  setAlign,
};

export { actionCreators };
