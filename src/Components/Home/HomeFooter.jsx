import Grid from "@mui/material/Grid";
import { ReactComponent as Instagram } from "../../Icons/instagram.svg"
import { ReactComponent as Twitter } from "../../Icons/twitter.svg"

import { useMediaQuery } from "@mui/material";

export default function HomeFooter() {
    const isMobileView = useMediaQuery('(max-width:650px)');

    const footerElements = [
        {
            header: "Support",
            items: ["FAQ", "Contact", "Blog"]
        },
        {
            header: "Platform",
            items: ["Plans", "Features", "Affiliates"]
        }, {
            header: "Legal",
            items: ["Terms", "Privacy", "DMCA"]
        }
    ];

    return (
        <footer className={isMobileView ? "homepage-footer-mobile homepage-footer" : "homepage-footer"}>
            <Grid container maxWidth={'1400px'} display={"flex"} maxHeight={isMobileView ? "none" : "250px"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                {footerElements.map((footerElement, index) => {
                    return (
                        <Grid width={isMobileView ? "100%" : "inherit"} key={index + footerElement.header} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                            <Grid width={isMobileView ? "100%" : "inherit"} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                                <p className="homepage-footer-items color-provider"> {footerElement.header}</p>
                            </Grid>
                            {footerElement.items.map((item, subIndex) => {
                                return <Grid width={isMobileView ? "100%" : "inherit"} key={item + subIndex} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                                    <p className="homepage-footer-items">{item}</p>
                                </Grid>
                            })}
                        </Grid>
                    )
                })}
            </Grid>
            <div className="copyright">
                <p className="copyright-text">©2023 Watch Together Remotely. All rights reserved.</p>
                <div className="copyright-icons">
                    <Instagram />
                    <Twitter />
                </div>
            </div>
        </footer>
    )
}