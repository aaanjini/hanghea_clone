import React from "react";
import styled from "styled-components";

import {Text, Grid, Button} from "./Index";

const Input = (props) => {
    const {label, placeholder, _onChange , type, multiLine, value, bold, radius, size, is_submit, onSubmit,double, details, comment, tag,edit} = props;   
    const styles = {
      size,
      bold,
    };

    if(edit){
      return(
        <React.Fragment>
          <Grid>
            <ElInput type={type} placeholder={placeholder} onChange={_onChange} radius={radius} value={value}/>
          </Grid>
        </React.Fragment>
      );
    }

    if(tag){
      return (    
          <TagInput {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange} radius={radius} 
          onKeyPress={(e) => {
            if(e.key === "Enter"){
              onSubmit(e);
            }
          }}/>
      );
    }


    if(comment){
      return (
        <React.Fragment>
            <CommentInput {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange} radius={radius} 
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                onSubmit(e);
              }
            }}/>
        </React.Fragment>
      );
    }

    if(details){
      return (
        <React.Fragment>
            <NolineInput {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange} radius={radius}/>
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
          {label && <Text color="#333" margin="0 0 10px 0" size="16px" bold>{label}</Text>}
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
    radius:"0",
    size:"16px",
    is_submit: false,
    details:false,
    comment:false,
    bold:false,
    edit:false,
    onSubmit: () => {},
    _onChange: () => {},
    onkeyup: () => {},
    
}

const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  background-color:#eee;
  border-radius: 6px;
  outline: none;
  background-color: white;
  border: 1px solid #ddd;
  color:#333;
  ::placeholder {
    color: #999;
  }
`;

const ElInput = styled.input`
    border: none;
    border: 1px solid #ddd;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    border-radius: ${(props) => props.radius};
    background-color: inherit;
    color:#333;
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

const CommentInput = styled.input`
    width: calc(100% - 50px);
    height: 30px;
    background: none;
    border: none;
    outline: none;
    padding: 0 10px;
    ::placeholder {
        color:#ccc
    }
`;


const TagInput = styled.input`
    width: -webkit-fill-available;
    height: 35px;
    background: white;
    border: 1px solid #aaa;
    border-radius: ${(props) => props.radius};
    padding: 0 10px;
    outline: none;
    ::placeholder {
        color:#ccc
    }
`;



export default Input;