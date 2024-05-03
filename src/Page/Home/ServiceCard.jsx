import { FaArrowRightToBracket } from "react-icons/fa6";

const ServiceCard = ({ item }) => {
  const { title, img, price } = item;
  return (
    <div className="card  flex flex-col h-full bg-base-100 shadow-xl">
 
        <figure className="px-10 pt-10">
          <img src={img} alt=" " className="rounded-xl" />
        </figure>
        <div className="card-body items-start ">
          <h2 className="card-title ">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between w-full">
            <h1 className="text-error font-bold">Price: ${price}</h1>
            <FaArrowRightToBracket />
          </div>
        </div>
      </div>
 
  );
};

export default ServiceCard;
