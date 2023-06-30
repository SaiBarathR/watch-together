import { Typography, useMediaQuery } from "@mui/material"
import cinema from "../../Icons/cinema.png"
import messageIcon from "../../Icons/message.png"
import popcorn from "../../Icons/popcorn.png"


export default function FeatureList() {
    const isMobileView = useMediaQuery('(min-width:450px)')

    function FeatureListBoxRenderer({ src, header, body }) {
        return (
            <div className={isMobileView ? "feature-list-items" : "feature-list-items-mobile"}>
                <div className="feature-list-item-circle-container">
                    <img src={src} alt="img"></img>
                </div>
                <div className="feature-list-item-text-container">
                    <Typography className={isMobileView ? "feature-list-item-text-header" : "feature-list-item-text-header feature-list-item-text-paragraph-center"}>
                        {header}
                    </Typography>
                    <Typography className={isMobileView ? "feature-list-item-text-paragraph" : "feature-list-item-text-paragraph feature-list-item-text-paragraph-center"}>
                        {body}
                    </Typography>
                </div>
            </div>
        )
    }

    return (
        <div className="feature-list-container">
            <FeatureListBoxRenderer src={cinema} header={'CineChat'} body={'Movie nights reimagined'} />
            <FeatureListBoxRenderer src={messageIcon} header={'TalkTime'} body={'Never miss a gossip'} />
            <FeatureListBoxRenderer src={popcorn} header={'SnackSync'} body={'Munch together'} />
        </div>
    )
}