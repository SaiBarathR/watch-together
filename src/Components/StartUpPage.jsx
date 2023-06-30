import IntroSlide from "./Home/IntroSlide";
import '../Components/startUpPage.css';
import Description from "./Home/Description";
import FeatureList from "./Home/FeatureList";
import QA from "./Home/QA";

export default function StartUpPage() {
    return (
        <div className="startup-page-container">
            <IntroSlide />
            <Description />
            <FeatureList />
            <QA/>
            {/* <PriceTier/> */}
        </div>
    )
}