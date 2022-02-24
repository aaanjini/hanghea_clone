import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin , inline_block, ellipsis, align} = props;

  const styles = {
    bold: bold, 
    color: color, 
    size: size, 
    margin:margin, 
    inline_block:inline_block,
    align:align
  };
  
  return (
      <P {...styles} ellipsis={ellipsis}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  inline_block:false,
  align:false,
  ellipsis:false,
};

const P = styled.p`
  display: ${(props) => (props.inline_block? "inline-block" : "block")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
  white-space: normal;
  line-height: 16px;
  ${(props) => (props.align ? `vertical-align: ${props.align}` : "")};
  ${(props) => (props.ellipsis ? 
    `overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.2;` : 
    ""
  )};
`;

const Ellipsis = styled.p` //말줄임
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;



export default Text;
