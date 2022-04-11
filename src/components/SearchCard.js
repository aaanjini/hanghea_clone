import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button ,Image} from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import {useLocation, useHistory} from "react-router";
import { actionCreators as searchAction } from "../redux/modules/search";
import { history } from "../redux/configureStore";
const SearchCard = (props) => {
    return(        
        <Grid width="140px" display="inline-block" align="top"
            _onClick={()=>{
                history.push(`/post/${props.postId}`)
                props={...props}
            }}        
        >            
            <Grid padding="8px 8px 4px">
                <Image 
                    shape="rectangle" 
                    src={props.imgUrl? props.imgUrl:"https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg"}
                    radius="15px"
                    width="100%"
                />
            </Grid>
            <Grid padding="0 20px" margin="0 0 16px">
                <Text bold size="14px" margin="5px 0 0" ellipsis>{props.title}</Text>
                <Grid width="auto" padding="4px 0 6px" height="23px">
                    <Image 
                        inline_block 
                        size="16"
                        profile={props.profileUrl? props.profileUrl : "https://www.garyqi.com/wp-content/uploads/2017/01/default-avatar-500x500.jpg"}
                    />
                    <Text inline_block margin="0 0 0 5px" align="text-top"
                        color="#585858"
                        size="12px"
                    >{props.nickname}</Text>
                </Grid>
            </Grid>
        </Grid>        
    );

};


export default SearchCard;

