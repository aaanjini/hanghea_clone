import React from "react";
import styled from "styled-components";


const TagGrid = (props) => {
    const {children} = props;
    
    
    return(
        <DefaultGrid>
            {children}
        </DefaultGrid>

    );


};

TagGrid.defaultProps = {
    children: null,
}

const DefaultGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 18px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;


export default TagGrid;
