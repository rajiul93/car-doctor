import img1 from "../../assets/images/banner/1.jpg";

const Slider = () => {
  return (
    <div className=" z-0">
      <div className="carousel rounded-xl overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full max-h-[500px] object-cover" />
          <div 
          className="absolute h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
              Affordable Price <br /> For Car Servicing
            </h1>
            <p className="text-base-300 md:w-1/2">
            Experience economical auto care with our budget-friendly servicing. Our tailored solutions ensure top-notch maintenance without draining your wallet. Drive confidently knowing your car receives quality service at affordable rates.
            </p>
            <div>
              <button className="btn hover:btn-outline  btn-error  ">
                Discover More
              </button>
              <button className="btn btn-outline border-base-100 text-base-100 ms-6">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full max-h-[500px] object-cover"
          />
                <div 
          className="absolute h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
            Keeping Costs Down <br /> Wallet-Friendly Options for Car Maintenance
            </h1>
            <p className="text-base-300 md:w-1/2">
            Discover wallet-friendly car maintenance solutions with our expert team. From routine check-ups to essential repairs, we provide high-quality service that fits your budget. Keep your car running smoothly for less.
            </p>
            <div>
              <button className="btn hover:btn-outline  btn-error  ">
                Discover More
              </button>
              <button className="btn btn-outline border-base-100 text-base-100 ms-6">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full max-h-[500px] object-cover"
          />
                <div 
          className="absolute h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
            Economical Auto Care <br /> Affordable Servicing Tailored to Your Budget
            </h1>
            <p className="text-base-300">
              There are many variations of passages of available,
              <br /> but the majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn hover:btn-outline  btn-error  ">
                Discover More
              </button>
              <button className="btn btn-outline border-base-100 text-base-100 ms-6">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
