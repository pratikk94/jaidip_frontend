import Footer from "../Footer/Footer";
import Connect from "./Connect/Connect";
import Discover from "./Discover/Discover";
import FeatureSection from "./Features/Features";
import GetStarted from "./GetStarted/GetStarted";
import HeroSection from "./HeroSection/HeroSection";
import IntroSection from "./Intro/IntroSection";
import Research from "./Research/Research";
import Testimonials from "./Testimonials/Testimonials";
export default function Home(){
    return <div>
        <HeroSection/>
        <FeatureSection/>
        <IntroSection />
        <Research/>
        <Discover/>
        <Connect/>
        <Testimonials/>
        <GetStarted/>
    </div>
}