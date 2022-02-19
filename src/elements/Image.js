import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {shape , src , size, profile, radius, inline_block, } = props;
    const styles = {
        src:src,
        size:size,
        profile:profile,
        radius:radius,
        inline_block:inline_block,
    };
    
    if(shape === "circle"){ //프로필 이미지
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }
    if(shape === "rectangle"){//게시글 이미지
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        );
    }
    return(
        <React.Fragment>
        </React.Fragment>
    );


};

Image.defaultProps = {
    shape : "circle",
    src : "",
    size : 36,
    profile:"https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg",
    radius:"0",
    inline_block:false,
}

const AspectOutter = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 100%; 
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    border-radius: ${(props) => props.radius};
`;

const ImageCircle = styled.div`
    display: ${(props) => (props.inline_block? "inline-block" : "block")};
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius:var(--size);
    background-image: url("${(props) => props.profile}");
    background-size: cover;
`;

export default Image;
