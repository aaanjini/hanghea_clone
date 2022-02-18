import React from "react";
import { Grid, Text, Input, Button } from "../elements/Index";
import styled from "styled-components";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

const Main = (props) => {

    const likeBtn = (e) => {
        const like = document.getElementById('sliderOne');
        const new_btn = document.getElementById('sliderTwo');
        const slide = document.getElementById('slideBg');       
        
        like.style.color = "#00c8d2";
        new_btn.style.color = "#999";
        slide.style.left = "3px";
    };
    const newBtn = (e) => {
        const like = document.getElementById('sliderOne');
        const new_btn = document.getElementById('sliderTwo');
        const slide = document.getElementById('slideBg');

        like.style.color = "#999";
        new_btn.style.color = "#00c8d2";

        slide.style.left = "72px";
    };


    return(
        <React.Fragment>
            <Grid padding="16px 8px">
                <SearchBox></SearchBox>
                <Grid width="150px" height="40px" radius="20px" padding="3px" relative="relative" margin="20px 0 30px" bg="#f2f2f2" >
                    <Slider id="slideBg"></Slider>
                    <Button 
                        id="sliderOne"
                        text="트렌드" 
                        width="70px" 
                        height="35px" 
                        color="#00c8d2" 
                        bg="transparent" 
                        relative="relative" 
                        padding="10px 0"
                        _onClick={()=>{
                            console.log("1눌림");
                            likeBtn()
                        }}
                    >                        
                    </Button>
                    <Button 
                        id="sliderTwo"
                        text="신규" 
                        width="70px" 
                        height="35px" 
                        color="#999" 
                        bg="transparent" 
                        relative="relative" 
                        padding="10px 0"
                        _onClick={()=>{
                            console.log("2눌림");
                            newBtn()
                        }}
                    >                        
                    </Button>
                </Grid>
                <Card/>
            </Grid>
            
        </React.Fragment>
    );
}


const Slider = styled.div`
    width: 75px;
    height: 34px;
    background-color: white;
    position: absolute;
    left: 3px;
    top:3px;
    border-radius: 20px;
    z-index: 1;
    transition: 0.3s;
`;




export default Main;