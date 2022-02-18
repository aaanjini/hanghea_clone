import React from "react";
import styled from "styled-components";

import {Text, Grid} from ".";

const Input = (props) => {
    const {label, placeholder, _onChange , type, multiLine, value, radius, is_submit, onSubmit,} = props;   
   
    if(multiLine){
      return (
        <Grid>
          {label && <Text margin="0px">{label}</Text>}
          <ElTextarea
            value={value}
            rows={10}
            placeholder={placeholder}
            onChange={_onChange}
            radius={radius}
          ></ElTextarea>
        </Grid>
      );
    }

    return (
      <React.Fragment>
        <Grid>
        {label && <Text margin="0px" color="#ffffff">{label}</Text>}
          {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            radius={radius}
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                onSubmit(e);
              }
            }}
          />
          ) : (
            <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
          )}
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    bg: false,
    multiLine: false,
    labelNone:false,
    label: false,
    placeholder: '텍스트를 입력해주세요.',
    type: "text",
    value: "",
    radius:"0",
    is_submit: false,
    onSubmit: () => {},
    _onChange: () => {}
    
}

const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  background-color:#eee;
  border-radius: 10px;
  outline: none;
`;

const ElInput = styled.input`
    border: none;
    border-bottom: 2px solid #F0EDCC;
    transition: border-color 0.3s ease-in-out;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    border-radius: ${(props) => props.radius};
    background-color: inherit;
    color:#ffffff;
    outline: none;
    
`;

export default Input;