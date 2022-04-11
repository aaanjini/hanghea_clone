import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from "react-router";
import { actionCreators as searchAction } from "../redux/modules/search";
//components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
//page
import Header from "../components/Header";

const Search = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const word = location.state.targetWord; 

    React.useEffect(()=>{        
        dispatch(searchAction.getSearchDB(word));        
    },[])

    const search_list = useSelector((state)=>state.search.list);
    
    return(
        <React.Fragment>
            <Header details is_flex>                
                <Text bold margin="0">{word}</Text>
                <Text bold></Text>
            </Header>
            <Grid padding="16px" margin="46px 0 70px" height="calc(100% - 116px)" is_scroll>
                {search_list && search_list.length !== 0? (
                    <Grid>
                        {search_list.map((p, idx) => {
                            return (                
                                <Card 
                                key={p.postId} 
                                {...p} 
                                postId={p.postId}
                                />
                            );
                        })}
                    </Grid>
                ) : (
                    <Grid >
                        <DTextB >앗 ! </DTextB>
                        <DText color="#999">검색 결과가 없습니다. 🥲</DText>
                    </Grid>
                )}
                
            </Grid>
        </React.Fragment>
    );
}


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


export default Search;