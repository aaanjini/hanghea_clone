import React from "react";
import styled from "styled-components";


const Button = (props) => {
    const {id, text, size, children, _onClick, margin, width, height, color, bg, padding , border, double, zIndex, relative} = props;
    const styles = {
        margin: margin,
        width: width,
        height: height,
        color: color,
        bg: bg,
        padding: padding,
        border: border,
        size:size,
        double:double,
        zIndex:zIndex,
        relative:relative,
        id:id,
    }
    if(double){
        return(
            <React.Fragment>
                <DoubleBtn {...styles} type="button" onClick={_onClick}>{text? text: children}</DoubleBtn>
            </React.Fragment>
        );
    }


    return(
        <React.Fragment>
            <DefaultButton {...styles} type="button" id={id} onClick={_onClick}>{text? text: children}</DefaultButton>
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
    color: "white",
    bg: "#ccc",
    padding: "12px 0px",
    border:"none",
    size:"",
    is_fixed:false,
    double:false,
    zIndex:"1",
    relative:false,
    id:"",
};

const DefaultButton = styled.button`    
    width: ${(props) => props.width};
    ${(props) => (props.height? `height: ${props.height};` : '')};
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: none;
    border-radius: 25px;
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
    border: ${(props) => props.border};
    cursor: pointer;
    z-index: 2;
    ${(props) => (props.size? `font-size: ${props.size};` : '')};
    ${(props) => (props.relative ? `position: relative` : "")};
`;

const DoubleBtn = styled.button`
  width: 30%;
  margin-left: 10px;
  padding: 12px 4px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;



export default Button;