import React from "react";
import styled from "styled-components";


const VeiwContent = (props) => {
    const {children} = props;

    return(
        <React.Fragment>
            <View>{children}</View>
        </React.Fragment>
    );

};

VeiwContent.defaultProps = {
    children:null,
};

const View = styled.div`
    font-size: 12px;
    line-height: 20px;
    padding: 0 16px;
    letter-spacing: -.015em;
    white-space: pre-wrap;
    word-break: break-word;
`;


export default VeiwContent;