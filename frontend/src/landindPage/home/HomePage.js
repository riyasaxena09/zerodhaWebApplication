import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAcount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
    return ( 
        <>
        {/* <i className="fa fa-camera"></i> */}
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAcount />

        </>
     );
}

export default HomePage;