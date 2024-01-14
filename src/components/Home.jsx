import FeatureSection from "./Home/Features/Features";
import HeroSection from "./Home/HeroSection/HeroSection";
import IntroSection from "./Home/Intro/IntroSection";
import Research from "./Home/Research/Research";
export default function Home(){
    return <div>
        <HeroSection/>
        <FeatureSection/>
        <IntroSection />
        <Research/>
    </div>
}