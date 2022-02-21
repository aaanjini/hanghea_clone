import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Button, Text} from "../elements/Index";
import { IoIosArrowBack } from 'react-icons/io';

const Header = (props) => {
    const {text,children,details, is_flex, is_title} = props;
    const styles = {
        is_flex,

    };

    if(is_title){
        return(
            <HeaderBox {...styles} >                
                <Button width="25px" height="25px" size="25px" padding="0" bg="transparent" 
                    _onClick={()=>{
                        history.go(-1);
                    }}>
                    <IoIosArrowBack style={{color:"#262626"}}
                /></Button>
                <Text bold size="15px" margin="0">{text? text: children}</Text>
            </HeaderBox>
        );
    }

    if(details){
        return(
            <HeaderBox {...styles} >                
                <Button width="25px" height="25px" size="25px" padding="0" bg="transparent" 
                    _onClick={()=>{
                        history.go(-1);
                    }}>
                    <IoIosArrowBack style={{color:"#262626"}}                    
                /></Button>
                {children}
            </HeaderBox>
        );
    }
    return(
        <HeaderBox>
            <h1>{text? text: children}</h1>
        </HeaderBox>
    );

};

Header.DafaultProps = {
    text: false,
    children: null,
    width: "100%",
    details:false,
    is_flex:false,
    is_title:false,
};

const HeaderBox = styled.div`
    @font-face {
        font-family: 'OTWelcomeRA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top:0;
    left: 0;
    border-bottom: 1px solid #eee;
    padding: 10px 16px;
    background-color: white;
    ${(props) =>
        props.is_flex
        ? `display: flex; align-items: center; justify-content: space-between; `
    : ""};
    >h1 {
        font-family: 'OTWelcomeRA';
        margin: 0;
        font-size: 20px;
    }

    
`;


export default Header;
