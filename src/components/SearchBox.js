import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { CgSearch } from 'react-icons/cg';
import { actionCreators as searchAction } from "../redux/modules/search";
import { useDispatch } from "react-redux";

const SearchBox = (props) => {
    const dispatch = useDispatch();
    const [word,setWord] = React.useState("");

    const onChange = (e) => {
        setWord(e.target.value);
    };


    const searchDB = ()=>{
        dispatch(searchAction.getSearchDB(word));
    }

    return(
        <React.Fragment>
            <SearchWrap>
                <Icon><CgSearch style={{color:"#999"}}/></Icon>
                <SearchInput placeholder="검색어를 입력하세요"  
                //value={word}  
                onChange={onChange}
                onKeyPress={(e) => {
                    if(e.key === "Enter"){
                        searchDB()
                      history.push("/search")
                    }
                }}            
                ></SearchInput>
            </SearchWrap>
            
        </React.Fragment>
    );
};


SearchBox.defaultProps = {
    _onChange: () => {}

}

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