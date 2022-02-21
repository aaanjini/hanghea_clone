import React from "react";
import styled from "styled-components";
import {Tag} from "../elements/Index";

const TagList = (props) => {
    
    return(
        <>
            <Tag>안녕</Tag><Tag>스폰지밥</Tag><Tag>디즈니</Tag>
        </>

    );



};

TagList.defaultProps = {
    children: null,
}


export default TagList;
