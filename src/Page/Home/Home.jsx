 
import AboutUs from "./AboutUs";
import Service from "./Service";
import Slider from "./Slider";

 

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Slider />
            <AboutUs />
            <Service />
        </div>
    );
};

export default Home;