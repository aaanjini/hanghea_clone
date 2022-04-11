import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { searchApis } from "../../shared/apis";

const GET_SEARCH = "GET_SEARCH";

const getSearch = createAction(GET_SEARCH,(search_list)=>({search_list}));

const initialState = {
    list:[],
};


const getSearchDB = (word) => {
    return function (dispatch, getState, {history}){
        searchApis.getSearch(word)
        .then((res)=>{
            //console.log("검색결과",res.data);
            const _list = res.data.searchlist;
            dispatch(getSearch(_list));
        }).catch((err)=>{
            console.log("검색에러",err)
        });
    };
};




export default handleActions ({
    [GET_SEARCH]: (state, action) => produce(state, (draft) => {
        console.log("화긴",action.payload.search_list);
        draft.list = action.payload.search_list;  
    }),
    
},initialState);


const actionCreators = { //액션 생성자 내보내기
    getSearchDB,
};

export {actionCreators};