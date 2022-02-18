import React from "react";
import { Grid, Text, Input, Button } from "../elements/index";
import Card from "../elements/Card";
const Main = (props) => {
    return(
        <React.Fragment>
            <Grid padding="16px 8px">
                {/* <Grid width="120px" padding="3px" radius="50%" bg="#ddd">
                    <Button width="60px">좋아요</Button>
                    <Button width="60px">신규</Button>
                </Grid> */}
                <Card/>
            </Grid>
            
        </React.Fragment>
    );
}

export default Main;