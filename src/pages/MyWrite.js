import React from "react";
import {Image, Grid, Button} from "../elements/Index";


const MyWrite = (props) => {
    return(
        <React.Fragment>
            <Button is_flex width="18%" margin="20px 20px 20px 300px" > 완료</Button>
            <Image is_flex size="150" shape="circle" style={{margin:"auto"}}/>
            
            <Button is_flex width="30%" margin="auto" >프로필 사진 변경</Button>
            <div style={{margin:"30px 0 20px 38px"}}>
            닉네임
            </div>
            <label>
            <input type="text" name="nickname" style={{display:"block", margin:"auto", width:"80%"}}/>
            </label>

            <div style={{margin:"30px 0 20px 38px"}}>
            소개
            </div>
            <label>
            <input type="text" name="nickname" style={{display:"block", margin:"auto", width:"80%", height:"10vh", paddingTop:"0", paddingBottom:"0"}}/>
            </label>
        </React.Fragment>
    );
}

export default MyWrite;