import React from "react";
import { ButtonMyInfo, MobileViewMyInfo, Grid, CardMyInfo, Image}  from "../elements/Index";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
// import { useSelector, useDispatch } from "react-redux";
// import { actionCreators as MyActions } from "../redux/modules/mypage";


const Mypage = (props) => {

//   const dispatch = useDispatch();
//   const post_list = useSelector((state) => state.mypage.my_list);
//   console.log(post_list);

//   React.useEffect(() => {
//     dispatch(MyActions.myPostDB());
//   }, []);

    return(
        <React.Fragment>
            <Header text="내정보"/>            
            <Grid  margin="50px 0 70px" height="calc(100% - 121px)" is_scroll>
                <Grid padding="20px" is_flex>
                    <Image size="100"  shape="circle"/>
                    <Grid>
                        닉네임,소개글
                    </Grid>
                    <ButtonMyInfo style={{textAlign: "right", margin: "50px 50px 50px 0"}}/>
                </Grid>
                <Grid padding="16px 8px">
                    <Card/><Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Grid>
                
            </Grid>
        </React.Fragment>
    );
}

const Line = styled.hr`
    border-color: black;
    padding: 15px;
    margin: 16px;
`



export default Mypage;