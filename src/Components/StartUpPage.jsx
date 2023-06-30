import IntroSlide from "./Home/IntroSlide";
import '../Components/startUpPage.css';
import Description from "./Home/Description";
import FeatureList from "./Home/FeatureList";

export default function StartUpPage() {
    return (
        <div className="startup-page-container">
            <IntroSlide />
            <Description />
            <FeatureList />
        </div>
    )
}