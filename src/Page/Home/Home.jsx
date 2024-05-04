 
import AboutUs from "./AboutUs";
import Location from "./Location";
import PopularProduct from "./PopularProduct";
import Service from "./Service";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

 

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Slider />
            <AboutUs />
            <Service />
            <Location />
            <PopularProduct />
            <Testimonial />
        </div>
    );
};

export default Home;