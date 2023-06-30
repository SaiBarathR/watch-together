import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import introimg from "../../Icons/IntrolSlide/introslide.png"


export default function IntroSlide() {

    return (
        <div className="intro-slide-container">
            <Grid className="intro-slide-content" container >
                <Grid item className="intro-slide-item-1" xs={12} md={5.5} >
                    <Button variant="outlined" className="intro-slide-item-1-button-1">
                        Stream Together
                    </Button>
                    <Typography className="intro-slide-item-1-paragrapgh">
                        Remote movie nights redefined
                    </Typography>
                    <Button variant="contained" className="intro-slide-item-1-button-2">
                        Try Now
                    </Button>
                </Grid>
                <Grid item xs={12} md={5.5} >
                    <img className="intro-slide-item-1-img" src={introimg} alt="img"></img>
                </Grid>
            </Grid>
        </div>
    )
}