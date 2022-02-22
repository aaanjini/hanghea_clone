import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";

//components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
//page
import Header from "../components/Header";

const Search = (props) => {
    return(
        <React.Fragment>
            <Header details is_flex>                
                <Text bold margin="0">스폰지밥</Text>
                <Text bold></Text>
            </Header>
            <Grid margin="46px 0 0" padding="16px">
                <Grid >
                    <DTextB >앗 ! </DTextB>
                    <DText color="#999">검색 결과가 없습니다. 🥲</DText>
                </Grid>
                
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