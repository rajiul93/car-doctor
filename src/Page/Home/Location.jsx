import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
const Location = () => {
  return (
    <div className="md:flex justify-between bg-base-content p-14 rounded-xl text-base-100 mb-14">
      <div className="mt-8 md:mt-0 space-y-3 md:flex items-center gap-4">
      <LuCalendarDays className="text-2xl text-accent" />
        <div className="">
            <p>We are open monday-friday</p>
            <h1 className="text-2xl font-semibold">7:00 am - 9:00 pm</h1>
        </div>
      </div>

      <div className="mt-8 md:mt-0 space-y-3 md:flex items-center gap-4">
      <FaPhoneVolume className="text-2xl text-error"/>
        <div className="">
            <p>Have a question?</p>
            <h1 className="text-2xl font-semibold">+2546 251 2658</h1>
        </div>
      </div>

      <div className="mt-8 md:mt-0 space-y-3 md:flex items-center gap-4">
      <CiLocationOn className="text-2xl text-success"/>
        <div className="">
            <p>Need a repair? our address</p>
            <h1 className="text-2xl font-semibold">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
