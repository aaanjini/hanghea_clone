import React from "react";
import styled from "styled-components";


const MobileViewMyInfo = (props) => {
    const {children} = props;

    return(
        <React.Fragment>
            <View>{children}</View>
        </React.Fragment>

    );
};

MobileViewMyInfo.defaultProps = {
    children:true,
}

const View = styled.div`
    box-sizing: border-box;
    max-width: 420px;
    min-height: 600px;
    height: 100vh;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 50px auto 0; 
`;

export default MobileViewMyInfo;