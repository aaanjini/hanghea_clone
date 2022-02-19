import React from "react";
import styled from "styled-components";


const MobileView = (props) => {
    const {children} = props;

    return(
        <React.Fragment>
            <View>{children}</View>
        </React.Fragment>

    );
};

MobileView.defaultProps = {
    children:null,
}

const View = styled.div`
    box-sizing: border-box;
    max-width: 420px;
    min-height: 600px;
    height: 85vh;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 20px auto 0; 
    position: relative;
    overflow: hidden;
    background-color: white;
`;

export default MobileView;