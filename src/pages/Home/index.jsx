import {useState, useEffect} from "react";
import { Container, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";


const Home = () => {
    return(
        <Container sx={{ backgroundColor: '' }}>
            <Typography variant="h3" align="left">Home</Typography>
            <Image src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3e0.png"/>
        </Container>
    );
};

export default Home;