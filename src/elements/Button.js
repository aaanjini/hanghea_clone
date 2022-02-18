import React from "react";
import styled from "styled-components";


const Button = (props) => {
    const {text, size, children, _onClick, margin, width, height, color, bg, padding , border, is_fixed} = props;
    const styles = {
        margin: margin,
        width: width,
        height: height,
        color: color,
        bg: bg,
        padding: padding,
        border: border,
        size:size,
        is_fixed:is_fixed,
    }
   
    if(is_fixed){
        return(
            <React.Fragment>
                <FixedButton {...styles} type="button" onClick={_onClick}>{text? text: children}</FixedButton>
            </React.Fragment>
        ); 

    }
    return(
        <React.Fragment>
            <DefaultButton {...styles} type="button" onClick={_onClick}>{text? text: children}</DefaultButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},  
    margin: false,
    width: "100%",
    height: '',
    color: "black",
    bg: "#FFD662",
    padding: "12px 0px",
    border:"none",
    size:"",
    is_fixed:false,
};

const DefaultButton = styled.button`    
    width: ${(props) => props.width};
    ${(props) => (props.height? `height: ${props.height};` : '')};
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
    border: ${(props) => props.border};
    cursor: pointer;
    z-index: 2;
    ${(props) => (props.size? `font-size: ${props.size};` : '')};
`;

const FixedButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: #FFD662;
    color: #02343F;
    font-size: 16px;
    border: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;    
`;



export default Button;