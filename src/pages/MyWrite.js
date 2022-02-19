import React from "react";
import {Image, Grid, Button} from "../elements/Index";
import Text from "../components/Card";

const MyWrite = (props) => {
    return(
        <React.Fragment>
            <Grid>
            <Image is_flex size="150" shape="circle" style={{margin:"auto"}}/>
            </Grid>
            <Button is_flex width="30%" margin="auto" >프로필 사진 변경</Button>
            닉네임
            <Text/>

        </React.Fragment>
    );
}

export default MyWrite;