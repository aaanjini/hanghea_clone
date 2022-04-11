import React from "react";
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';
import { actionCreators as searchAction } from "../redux/modules/search";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router";


const SearchBox = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [word,setWord] = React.useState("");   

    const onChange = (e) => {
        setWord(e.target.value);        
    };

    return(
        <React.Fragment>
            <SearchWrap>
                <Icon><CgSearch style={{color:"#999"}}/></Icon>
                <SearchInput placeholder="검색어를 입력하세요"  
                    //value={word}  
                    onChange={onChange}
                    onKeyPress={(e) => {
                        if(e.key === "Enter"){
                            history.push({                                
                                pathname: "/search/main",
                                state: {targetWord: word},                                  
                            })
                        }
                    }}
                ></SearchInput>
            </SearchWrap>
            
        </React.Fragment>
    );
};


SearchBox.defaultProps = {
    search:false,
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

export default SearchBox;