import React from "react";
import styled from "styled-components";


const Tag = (props) => {
    const {children} = props;
    
    
    return(
        <DefaultTag>
            {children}
        </DefaultTag>

    );



};

Tag.defaultProps = {
    children: null,
}

const DefaultTag = styled.div`
    display: inline-block;
    color: #00c8d2;
    border: 1px solid #00c8d2;
    border-radius: 30px;
    line-height: 25px;
    padding: 0 10px;
    font-size: 12px;
    letter-spacing: -.015em;
    margin: 4px 3px;
`;


export default Tag;
