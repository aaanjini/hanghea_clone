import React from "react";
import styled from "styled-components";

import { Grid, Button, Image } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";

const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef(); //input 에 접근하기
    //const [preview,setPreview] = React.useState("");
    

    const selectFile = (e) => {
        const reader = new FileReader();
        const ImageForm = new FormData();

        //const file = e.target.files[0];
        const file = fileInput.current.files[0];
        ImageForm.append("image",file);

        console.log(ImageForm);

        // reader.readAsDataURL(file); //파일 내용 읽어오기
        // // onloadend: 읽기가 끝나면 발생하는 이벤트 핸들러
        // reader.onloadend = () => {
        //     // reader.result는 파일의 컨텐츠(내용물)입니다!
        //     console.log(reader.result);

        // };
    };

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        console.log("이미지주소",image);
        //dispatch(imageActions.uploadImageFB(image));
    };

    return (
        <React.Fragment>           
            <FileBox className="filebox">  
                <label htmlFor="file_input" className="upload-box" onChange={uploadFB}>
                    <Image 
                        // src={preview ? preview : ""}
                        radius="15px"
                        width="100%"
                        is_preview
                    />
                </label>          
                <input type="file" id="file_input" ref={fileInput} onChange={selectFile}/>
            </FileBox>
        </React.Fragment>
    )
}

const FileBox = styled.div`
    position: relative;
    .upload-box {
        display: block;
        width: 100%;
        height: 100%;
    }
    input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    }
`;

export default Upload;