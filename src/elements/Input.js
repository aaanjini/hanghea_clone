import React from "react";
import styled from "styled-components";

import {Text, Grid, Button} from "./Index";

const Input = (props) => {
    const {label, placeholder, _onChange , type, multiLine, value, radius, is_submit, onSubmit,double} = props;   
   

    if(double){
      return (
        <React.Fragment>
            <DoubleInput type={type} placeholder={placeholder} onChange={_onChange} radius={radius}/>
        </React.Fragment>
      );
    }

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
        {label && <Text color="#333" margin="0 0 10px 0" size="16px" bold>{label}</Text>}
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
            <ElInput type={type} placeholder={placeholder} onChange={_onChange} radius={radius}/>
          )}
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    bg: false,
    multiLine: false,
    double:false,
    labelNone:false,
    label: false,
    placeholder: '텍스트를 입력해주세요.',
    type: "text",
    value: "",
    radius:false,
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
    border: 1px solid #ddd;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    border-radius: ${(props) => props.radius};
    background-color: inherit;
    color:#999;
    outline: none;
    :placeholder {
      color: #999;
    }
`;

const DoubleInput = styled.input`
    border: none;
    border: 1px solid #ddd;
    width: calc(70% - 10px);
    padding: 12px 4px;
    box-sizing: border-box;
    border-radius: ${(props) => props.radius};
    background-color: inherit;
    color:#999;
    outline: none;
    :placeholder {
      color: #999;
    }
`;


export default Input;