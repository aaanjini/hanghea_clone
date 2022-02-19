import React from "react";
import styled from "styled-components";

const Header = (props) => {
    const {text,children,details} = props;


    if(details){
        return(
            <HeaderBox>
                {children}
            </HeaderBox>
        );
    }
    return(
        <HeaderBox>
            <h1>{text? text: children}</h1>
        </HeaderBox>
    );

};

Header.DafaultProps = {
    text: false,
    children: null,
    width: "100%",
    details:false,
};

const HeaderBox = styled.div`
    @font-face {
        font-family: 'OTWelcomeRA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top:0;
    left: 0;
    border-bottom: 1px solid #eee;
    padding: 10px 16px;
    background-color: white;
    >h1 {
        font-family: 'OTWelcomeRA';
        margin: 0;
        font-size: 20px;
    }
`;


export default Header;
