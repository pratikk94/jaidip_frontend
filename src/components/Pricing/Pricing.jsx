import Footer from "../Footer/Footer";
import GetStarted from "../Home/GetStarted/GetStarted";
import Feature from "./Compare/Compare";
import FAQ from "./FAQ/FAQ";
import HeroSection from "./HeroSection/HeroSection";

export default function Pricing(){
    return <div>
        <HeroSection/>
        <Feature/>
        <FAQ/>
        <GetStarted/>
    </div>;
};