import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { history } from "../redux/configureStore";
import { GoHome } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';


const SearchBox = (props) => {
    return(
        <React.Fragment>
            <NaviWrap>
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent" color="#aaa" size="25px"
                        _onClick={()=>{
                            history.push("/")
                        }}
                    ><GoHome/></Button>
                    <Text margin="0" size="12px" color="#aaa">홈</Text>
                </Grid>   
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent" color="#aaa" size="25px"
                        _onClick={()=>{
                            history.push("/write")
                        }}
                    ><AiOutlinePlus/></Button>
                    <Text margin="0" size="12px" color="#aaa">플러스</Text>
                </Grid>
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent" color="#aaa" size="25px"
                        _onClick={()=>{
                            history.push("/mypage")
                        }}
                    ><BsEmojiSmile/></Button>
                    <Text margin="0" size="12px" color="#aaa">내정보</Text>
                </Grid>             
            </NaviWrap>
        </React.Fragment>
    );
};

const NaviWrap = styled.div`
    display: flex;
    justify-content: space-around;
    width: calc(100% - 40px);
    position: absolute;
    bottom:0;
    left: 0;
    padding: 10px 20px;
    border-top: 1px solid #eee;
    background-color: white;
    z-index: 3;
`;

export default SearchBox;