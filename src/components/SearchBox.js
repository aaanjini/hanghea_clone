import React from "react";
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';


const SearchBox = (props) => {
    return(
        <React.Fragment>
            <SearchWrap>
                <Icon><CgSearch style={{color:"#999"}}/></Icon>
                <SearchInput placeholder="검색어를 입력하세요"></SearchInput>
            </SearchWrap>
            
        </React.Fragment>
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
    margin: 3px 10px 0 0;
    display: inline-block;
`;

export default SearchBox;