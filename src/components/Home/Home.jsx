import Connect from "./Connect/Connect";
import Discover from "./Discover/Discover";
import FeatureSection from "./Features/Features";
import HeroSection from "./HeroSection/HeroSection";
import IntroSection from "./Intro/IntroSection";
import Research from "./Research/Research";
export default function Home(){
    return <div>
        <HeroSection/>
        <FeatureSection/>
        <IntroSection />
        <Research/>
        <Discover/>
        <Connect/>
    </div>
}