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
    max-width: 440px;
    height: 600px;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 50px auto 0; 
`;

export default MobileView;