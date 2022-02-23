import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button ,Image} from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import {useLocation, useHistory} from "react-router";
import { actionCreators as searchAction } from "../redux/modules/search";
import { IoMdClose } from 'react-icons/io';
import { CgSearch } from 'react-icons/cg';

//components
import SearchCard from "../components/SearchCard";
//page
import Header from "../components/Header";


const SearchMain = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const word = location.state.targetWord; 
    const search_list = useSelector((state)=>state.search.list);


    const [searchWord,setSearchWord] = React.useState(word?word:"");
    const [target, setTarget] = React.useState("");

    React.useEffect(()=>{        
        dispatch(searchAction.getSearchDB(searchWord));
    },[searchWord])

    const onChange = (e) => {
        setTarget(e.target.value);

    };
    const keyPress = () =>{
        setSearchWord(target);
   };
    const cancel = () => {
        setSearchWord("");  
    };

    console.log(target,"검색확인",searchWord);

    return( 
        <>
            <Grid padding="16px">
                <Grid is_flex>
                    <SearchWrap>
                        <div style={{width:"100%"}}>                    
                            <Icon><CgSearch style={{color:"#999"}}/></Icon>
                            <SearchInput placeholder="검색어를 입력하세요"  id="searchInput"
                                value={target}  
                                onChange={onChange}
                                onKeyPress={(e) => {
                                    if(e.key === "Enter"){
                                        keyPress()
                                    }
                                }}
                            ></SearchInput>
                        </div>
                        <CancleBtn onClick={cancel}><IoMdClose/></CancleBtn>
                    </SearchWrap>
                    <Button width="60px" size="15px" padding="0" bg="transparent" color="#777">취소</Button>
                </Grid>
                {search_list && search_list.length !== 0? (
                    <Grid margin="0 0 70px" height="calc(100% - 70px)" is_scroll>
                        <Grid margin="30px 0 30px">
                            <StyleFont>태그</StyleFont>
                            <Grid>
                                <TagBox 
                                   onClick={()=>{
                                        history.push({                                
                                            pathname: "/search",
                                            state: {targetWord: searchWord},                                  
                                        })
                                    }}
                                >
                                    <p>{searchWord}</p>
                                </TagBox>
                            </Grid>
                        </Grid>
                        <Grid margin="30px 0 30px">
                            <Grid is_flex>
                                <StyleFont>아이템</StyleFont>
                                <Button margin="0 0 30px" width="auto" size="14px" padding="0 10px" bg="transparent" color="#777"
                                    _onClick={()=>{
                                        history.push({                                
                                            pathname: "/search",
                                            state: {targetWord: searchWord},                                  
                                        })
                                    }}
                                >더보기</Button>
                            </Grid>                    
                            <ScrollWrap>
                                {search_list.map((el,i)=>{
                                    return(
                                        <SearchCard
                                            {...el}
                                            key={i}
                                            postId={el.postId}
                                        />
                                    );
                                    
                                })}
                            </ScrollWrap>
                        </Grid>
                    </Grid>
                ):(
                    <Grid margin="30px 0">
                        <DTextB >앗 ! </DTextB>
                        <DText color="#999">검색 결과가 없습니다. 🥲</DText>
                    </Grid>
                )}




                
            </Grid>
            
        </>

    );

};

const SearchWrap = styled.div`
    position: relative;
    width: 100%;
    padding: 6px 10px;
    border:none;
    border-radius: 20px;
    color: #999;
    box-sizing: border-box;
    background-color: #f2f2f2;
    font-size: 16px;  
    display : flex;
`;

const SearchInput = styled.input`
    width: calc(100% - 30px);
    background: none;
    border: none;
    outline: none;
    ::placeholder {
        color:#ccc
    }
`;

const Icon = styled.span`
    margin-right: 10px;
    display: inline-block;
    vertical-align: sub;
`;

const CancleBtn = styled.button`
    border:none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #777;
    color: white;
    font-size: 14px;
    padding:2px;
`;


const StyleFont = styled.p`
    position: relative;
    width: max-content;
    margin:  0 0 20px;
    @font-face {
        font-family: 'OTWelcomeRA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'OTWelcomeRA';
    ::after {
        content:'';
        position:absolute;
        width: 100%;
        height: 10px;
        background-color: rgb(0, 200, 210, 0.5);
        bottom: -3px;
        left: 0;
    }
`;
const TagBox = styled.div`
    width:100px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/564x/24/8e/20/248e2024b22e956b544d390219f419e4.jpg");
    background-position: center;
    background-size: cover;
    cursor: pointer;
    >p {
        @font-face {
            font-family: 'OTWelcomeRA';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }
        font-family: 'OTWelcomeRA'; 
    }
`;

const ScrollWrap = styled.div`
    white-space: nowrap;
    overflow-y: scroll;
`;

const DText = styled.p`
    @font-face {
        font-family: 'Cafe24Ohsquareair';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'Cafe24Ohsquareair';

`;
const DTextB = styled.p`
    @font-face {
        font-family: 'Cafe24Ohsquareair';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'Cafe24Ohsquareair';
    font-weight: bold;
    font-size: 30px;
`;

export default SearchMain;



