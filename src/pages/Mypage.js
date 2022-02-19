import React from "react";
import { ButtonMyInfo, MobileViewMyInfo, Grid, CardMyInfo, Image}  from "../elements/Image";
import styled from "styled-components";
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
            <div className="title" style={{textAlign:"center", fontSize:"25px"}}> Mypage </div>
            <MobileViewMyInfo>
            <Grid padding="20px">
            <Image size="100" style={{margin:"16px 16px"}}/>
            <ButtonMyInfo style={{textAlign: "right", margin: "50px 50px 50px 0"}}/>
            <Line />
            <CardMyInfo>          

            </CardMyInfo>
            <CardMyInfo>          

            </CardMyInfo>
            <CardMyInfo>          

            </CardMyInfo>
            <CardMyInfo>          

            </CardMyInfo>
            </Grid>



            </MobileViewMyInfo>



            </React.Fragment>
    );
}

const Line = styled.hr`
    border-color: black;
    padding: 15px;
    margin: 16px;
`


export default Mypage;