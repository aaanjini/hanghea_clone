import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../elements";
// import { storage } from "./firebase";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  // 지금 업로드 중인지 확인하는 변수
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();
  const selectFile = (e) => {
    console.log(e.target);
    // input에 가진 files 객체 보기
    console.log(e.target.files);
    // 선택한 파일에 어떻게 저장되어 있나 보기
    console.log(e.target.files[0]);
    // ref로도 확인
    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];
    // 파일 내용을 읽어온다.
    reader.readAsDataURL(file);
    // 읽기가 끝나면 발생하는 이벤트 핸들러.
    reader.onloadend = () => {
      console.log(reader.result); // 파일 컨텐츠(내용물)
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  // 파이어베이스 storage에 파일 업로드 하기
  const uploadFB = () => {
    let image = fileInput.current.files[0];
    console.log(image);
    // dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <React.Fragment>
      {/* disabled 속성 주면 파일선택 버튼 안눌린다. */}
      <ImageLabel className="input-file-button" for="input-file">
        이미지 찾기
      </ImageLabel>
      <input
        id="input-file"
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={is_uploading}
        style={{ display: "none" }}
      />

      {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
    </React.Fragment>
  );
};

const ImageLabel = styled.label`
  padding: 6px 25px;
  background-color: #ff6600;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export default Upload;
