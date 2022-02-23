import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { history } from "../redux/configureStore";
import { GoHome } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';


const SearchBox = (props) => {    
    const [activeNav, setActiveNav] = React.useState(1);
    
    return(
        <React.Fragment>
            <NaviWrap>
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent"  size="25px"
                        _onClick={()=>{
                            setActiveNav(1)
                            history.push("/main")
                        }}
                    >{activeNav === 1? (<GoHome style={{color:"#00c8d2"}}/>):(<GoHome style={{color:"#aaa"}}/>)}</Button>
                    <Text margin="0" size="12px" 
                        color={activeNav === 1? "#00c8d2": "#aaa"}
                        >홈
                    </Text>
                </Grid>
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent" size="25px"
                        _onClick={()=>{
                            setActiveNav(2)
                            history.push("/write")
                        }}
                    >{activeNav === 2?<AiOutlinePlus style={{color:"#00c8d2"}}/>:<AiOutlinePlus style={{color:"#aaa"}}/>}</Button>
                    <Text margin="0" size="12px" 
                        color={activeNav === 2? "#00c8d2": "#aaa"}>플러스
                        </Text>
                </Grid>
                <Grid width="50px" center>
                    <Button padding="0" width="100%" bg="transparent" color="#aaa" size="25px"
                        _onClick={()=>{
                            setActiveNav(3)
                            history.push("/mypage")
                        }}
                    >{activeNav === 3?<BsEmojiSmile style={{color:"#00c8d2"}}/>:<BsEmojiSmile style={{color:"#aaa"}}/>}</Button>
                    <Text margin="0" size="12px" color={activeNav === 3? "#00c8d2": "#aaa"}>내정보</Text>
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