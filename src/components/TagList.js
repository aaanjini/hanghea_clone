import React from "react";
import styled from "styled-components";
import {Tag} from "../elements/Index";

const TagList = (props) => {
    const tagList = props.tags;
    return(
        <>  
            {tagList?tagList.map((el,i)=>{
                return(
                    <Tag key={i}>{el}</Tag>
                );                
            }): null}
        </>

    );



};


export default TagList;
