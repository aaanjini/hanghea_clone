import React from "react";
import styled from "styled-components";
import { FiArrowUp } from 'react-icons/fi';
import { Grid, Text, Button, Image } from "../elements/Index";

const CommentInput = (props) => {
    return(
        <React.Fragment>
            <InputWrap>                
                <Input placeholder="답글을 입력하세요."></Input>
                <Btn onClick={()=>{
                    console.log("안녕");
                }}><FiArrowUp/></Btn>
            </InputWrap>
            
        </React.Fragment>
    );
};

const InputWrap = styled.div`
    position: relative;
    width: 100%;
    padding: 3px 5px;
    border:1px solid #f2f2f2;
    border-radius: 20px;
    color: #999;
    box-sizing: border-box;
    background-color: white;
    font-size: 16px;    
`;

const Input = styled.input`
    width: calc(100% - 50px);
    height: 30px;
    background: none;
    border: none;
    outline: none;
    ::placeholder {
        color:#ccc
    }
`;

const Btn = styled.button`
    margin: 3px 10px 0 0;
    display: inline-block;
    width:30px;
    height: 30px;
    padding:2px;
    border-radius: 50%;
    vertical-align: middle;
    font-size: 25px;
    color: white;
    background-color: #999;
    border: none;
    cursor: pointer;
`;

export default CommentInput;