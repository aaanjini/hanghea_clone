import React from "react";
import styled from "styled-components";

import {Text, Grid, Button} from "./Index";

const Input = (props) => {
    const {label, placeholder, _onChange , type, multiLine, value, bold, radius, size, is_submit, onSubmit,double, details, width } = props;   
    const styles = {
      size,
      bold,
      width,
    };

    if(details){
      return (
        <React.Fragment>
            <NolineInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} radius={radius}/>
        </React.Fragment>
      );
    }


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
            width={width}
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
    radius:"0",
    size:"16px",
    is_submit: false,
    details:false,
    bold:false,
    onSubmit: () => {},
    _onChange: () => {},
    width: "",
    
}

const ElTextarea = styled.textarea`
  border: 1px solid black;
  width: ${(props) => props.width};
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
    ::placeholder {
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
    ::placeholder {
      color: #999;
    }
`;

const NolineInput = styled.input`
  border: none;
  width: 100%;
  color:#262626;
  outline: none;
  ::placeholder {
      color: #999;
  }
  padding: 5px 20px;
  font-size: ${(props) => props.size};
  box-sizing: border-box;
  text-align: center;
  font-weight: ${(props) => props.bold? "bold" : ""};;
`;


export default Input;